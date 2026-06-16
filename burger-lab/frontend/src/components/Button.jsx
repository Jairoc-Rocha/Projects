import "./Button.css";

export default function Button({
  title,
  type = "button",
  variant = "primary",
  onClick,
}) {
  return (
    <button type={type} className={`btn btn-${variant}`} onClick={onClick}>
      {title}
    </button>
  );
}
