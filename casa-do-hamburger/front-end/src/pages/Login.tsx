import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <>
      <form
        className="flex h-screen items-center justify-center bg-[#161410]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <Link to="/">
            <img className="mb-4" src="./logo.png" alt="minha logo" />
          </Link>
          <Input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button title="Login" variant="default" />
          <Link to="/register" className="w-full">
            <Button title="Não tenho uma conta" variant="outline" />
          </Link>
        </div>
      </form>
    </>
  );
}
