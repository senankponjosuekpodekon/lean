interface InputProps {
  label: string;
  name: string;
  type?: "text" | "email" | "tel" | "number" | "date" | "password";
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
  helpText?: string;
}

export function Input({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
  error,
  helpText,
}: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-text">
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className={`h-12 px-4 rounded-lg border bg-surface text-text placeholder:text-text-secondary focus:outline-none focus:ring-2 focus:ring-primary/30 transition-colors ${
          error ? "border-error" : "border-border"
        }`}
      />
      {helpText && <p className="text-xs text-text-secondary">{helpText}</p>}
      {error && <p className="text-sm text-error">{error}</p>}
    </div>
  );
}
