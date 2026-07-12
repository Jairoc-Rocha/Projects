export default function Button({
  children,
  variant = "primary",
  className = "",
  onClick,
}) {
  const buttonClasses = {
    primary: "bg-green-500 text-zinc-950 shadow-lg hover:bg-green-400",
    secondary: "bg-zinc-700 text-white shadow-lg hover:bg-zinc-600",
    danger: "bg-red-500 text-white shadow-lg hover:bg-red-400",
    warning: "bg-yellow-400 text-zinc-950 shadow-lg hover:bg-yellow-300",
  };

  return (
    <>
      <button
        onClick={onClick}
        className={`cursor-pointer rounded-xl px-6 py-3 font-bold transition ${buttonClasses[variant]}${className}`}
      >
        {children}
      </button>
    </>
  );
}
