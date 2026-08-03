import "./TextField.css";

export default function TextField({
  id,
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
}) {
  return (
    <div className="field-group">
      <label className="field-label" htmlFor={id}>
        {label}

        {required && (
          <span className="required-indicator" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <input
        className={`text-field ${error ? "text-field-error" : ""}`}
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />

      {error && (
        <span className="field-error-message" id={`${id}-error`}>
          {error}
        </span>
      )}
    </div>
  );
}
