import { Link } from "react-router";

export default function Header() {
  return (
    <div className="bg-[#161410]">
      <header className="mx-auto flex w-full items-center justify-between p-3 md:w-184.25 md:p-0">
        <img src="./logo.png" alt="logo do site" />
        <Link to="/login">
          <button className="h-8.75 w-32.5 cursor-pointer rounded-sm bg-[#f2daac]">
            Entrar
          </button>
        </Link>
      </header>
    </div>
  );
}
