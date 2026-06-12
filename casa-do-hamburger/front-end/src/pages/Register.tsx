import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [cep, setCep] = useState("");

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log({ name, email, password, confirmPassword, cep });
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
            type="text"
            placeholder="Nome Completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <Input
            type="password"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
          <Input
            type="text"
            placeholder="CEP"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <Button title="Criar conta" variant="default" />
          <Link to="/login" className="w-full">
            <Button title="Já tenho uma conta" variant="outline" />
          </Link>
        </div>
      </form>
    </>
  );
}
