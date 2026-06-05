import { cn } from '@/lib/cn'

type FieldType = 'text' | 'email' | 'tel' | 'textarea' | 'select'

interface FormFieldProps {
  id: string
  label: string
  type?: FieldType
  required?: boolean
  options?: string[]
  placeholder?: string
  rows?: number
  className?: string
}

const fieldBase =
  'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-on-night placeholder:text-on-night-muted/60 transition duration-200 focus:border-accent-sky focus:bg-white/10 focus:outline-none'

/** Uncontrolled, dark-themed form control (input / textarea / select). */
export function FormField({
  id,
  label,
  type = 'text',
  required,
  options,
  placeholder,
  rows = 4,
  className,
}: FormFieldProps) {
  return (
    <label htmlFor={id} className={cn('block', className)}>
      <span className="mb-1.5 block text-[13px] font-medium text-on-night-muted">
        {label}
        {required && <span className="text-accent-sky"> *</span>}
      </span>

      {type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          required={required}
          rows={rows}
          placeholder={placeholder}
          className={cn(fieldBase, 'resize-none')}
        />
      ) : type === 'select' ? (
        <select
          id={id}
          name={id}
          required={required}
          defaultValue=""
          className={cn(fieldBase, 'select-dark appearance-none pr-10')}
        >
          <option value="" disabled>
            Select…
          </option>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          placeholder={placeholder}
          className={fieldBase}
        />
      )}
    </label>
  )
}
