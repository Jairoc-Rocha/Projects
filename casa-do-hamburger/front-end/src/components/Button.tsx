type ButtonType = {
  title: string;
  variant?: "default" | "outline";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  title,
  variant = "default",
  ...props
}: ButtonType) {
  const buttonVariant = () => {
    if (variant === "default") {
      return "w-full cursor-pointer border-2 border-[#c92a0e] rounded-md bg-[#c92a0e] py-2 text-sm font-bold text-white";
    } else if (variant === "outline") {
      return "w-full cursor-pointer border-2 border-[#c92a0e] rounded-md bg-white py-2 text-sm font-bold text-[#c92a0e]";
    }
  };

  return (
    <>
      <button {...props} className={buttonVariant()}>
        {title}
      </button>
    </>
  );
}
