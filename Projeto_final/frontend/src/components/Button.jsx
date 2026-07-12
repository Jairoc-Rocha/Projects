const Button = ({ title, variant = "default", className = "", children, ...props }) => {
  const buttonClass = `btn ${variant === "outline" ? "btn-outline" : "btn-default"} ${className}`.trim();

  return (
    <button {...props} className={buttonClass}>
      {children ? children : title}
    </button>
  );
};

export default Button;
