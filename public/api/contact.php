<?php
declare(strict_types=1);

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed.']);
    exit;
}

$raw = file_get_contents('php://input');
$data = json_decode($raw ?: '', true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'message' => 'Invalid request.']);
    exit;
}

function clean_value(array $data, string $key): string
{
    $value = isset($data[$key]) ? (string) $data[$key] : '';
    $value = trim($value);
    return str_replace(["\r", "\n"], ' ', $value);
}

function clean_message(array $data, string $key): string
{
    $value = isset($data[$key]) ? (string) $data[$key] : '';
    return trim(str_replace("\r", '', $value));
}

$name = clean_value($data, 'name');
$email = clean_value($data, 'email');
$company = clean_value($data, 'company');
$service = clean_value($data, 'service');
$referral = clean_value($data, 'referral');
$message = clean_message($data, 'message');

if ($name === '' || $email === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Name, email and message are required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'A valid email address is required.']);
    exit;
}

$to = 'info@roshitech.com';
$subject = 'Roshi Tech inquiry from ' . $name;
$bodyLines = [
    'Name: ' . $name,
    'Email: ' . $email,
    $company !== '' ? 'Company: ' . $company : null,
    $service !== '' ? 'Service of interest: ' . $service : null,
    $referral !== '' ? 'How they heard about us: ' . $referral : null,
    '',
    'Message:',
    $message,
];
$body = implode("\n", array_filter($bodyLines, static fn ($line) => $line !== null));
$headers = [
    'From: Roshi Tech Website <info@roshitech.com>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: PHP/' . phpversion(),
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'message' => 'Unable to send message.']);
    exit;
}

echo json_encode(['ok' => true, 'message' => 'Message sent.']);
