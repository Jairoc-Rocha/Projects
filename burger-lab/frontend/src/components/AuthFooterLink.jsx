import { Link } from "react-router";

export default function AuthFooterLink({ text, linkText, to }) {
  return (
    <p className="mt-6 text-center text-sm text-yellow-50/70">
      {text}{" "}
      <Link
        to={to}
        className="font-bold text-yellow-400 transition hover:text-yellow-300"
      >
        {linkText}
      </Link>
    </p>
  );
}
