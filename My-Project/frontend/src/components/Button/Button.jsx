import "./Button.css";

export default function Button({
  children,
  type = "button",
  variant = "primary",
  fullWidth = false,
  className = "",
  disable = false,
  ...rest
}) {
  const buttonClasses = [
    "button",
    `button-${variant}`,
    fullWidth ? "button-full-width" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={buttonClasses} type={type} disabled={disable} {...rest}>
      {children}
    </button>
  );
}
