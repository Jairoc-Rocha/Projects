export default function FormField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-sm font-bold text-yellow-50">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-yellow-400/20 bg-black px-4 py-3 text-yellow-50 outline-none transition placeholder:text-yellow-50/30 focus:border-yellow-400"
      />
    </div>
  );
}
