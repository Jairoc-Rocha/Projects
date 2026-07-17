export default function FormSelect({
  label,
  name,
  value,
  onChange,
  options,
  className = "",
}) {
  return (
    <div className={className}>
      <label className="mb-2 block text-sm font-bold text-yellow-50">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="
          w-full rounded-2xl border border-yellow-400/20 bg-black px-4 py-3
          text-yellow-50 outline-none transition focus:border-yellow-400
        "
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
