export default function Button({ children, variant = "primary" }) {
  const baseClasses = "rounded-full px-8 py-3 font-black transition";

  const variants = {
    primary: "bg-yellow-400 text-zinc-950 hover:bg-yellow-300",
    secondary:
      "border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-zinc-950",
  };

  const selectedVariant = variants[variant] || variants.primary;

  return (
    <button className={`${baseClasses} ${selectedVariant}`}>{children}</button>
  );
}
