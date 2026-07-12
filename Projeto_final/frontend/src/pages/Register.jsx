import { useState } from "react";
import Input from "../components/Input";
import { Link } from "react-router";
import Button from "../components/Button";
import BrandMark from "../components/BrandMark";
import { Sparkles } from "lucide-react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [cep, setCep] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!name || !email || !password || !confirmPassword || !cep) {
        setError("Todas as informações são obrigatórias");
        return;
      }

      if (password !== confirmPassword) {
        setError("Senhas não conferem");
        return;
      }

      const response = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, cep }),
      });

      switch (response.status) {
        case 409:
          setError("E-mail já cadastrado");
          break;
        case 400:
          setError("Todas as informações são obrigatórias");
          break;
        case 201:
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          setCep("");
          setError("");
          break;
        case 500:
          setError("Tente novamente mais tarde");
          break;
        default:
          setError("");
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
      setError("Não foi possível conectar ao servidor");
    }
  }

  return (
    <main className="auth-page register-page">
      <section className="auth-visual">
        <BrandMark />

        <div className="auth-hero-copy">
          <span className="hero-eyebrow">
            <Sparkles size={16} />
            nova experiência
          </span>

          <h1>Crie sua conta e monte seu experimento.</h1>

          <p>
            Cadastre-se para salvar seus pedidos, acompanhar o status
            e explorar o cardápio do Kitchen Lab.
          </p>
        </div>

        <div className="auth-burger-showcase">
          <img src="./calabresa-especial.png" alt="Burger destaque Kitchen Lab" />
        </div>
      </section>

      <form className="auth-box register-box" onSubmit={handleSubmit}>
        <Link to="/" className="auth-logo-link">
          <BrandMark compact />
        </Link>

        <div className="auth-title">
          <span>Cadastro</span>
          <h2>Entrar no laboratório</h2>
          <p>Preencha seus dados para criar a conta.</p>
        </div>

        <Input placeholder="Nome completo" onChange={(e) => setName(e.target.value)} value={name} />
        <Input placeholder="E-mail" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <Input placeholder="Senha" type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <Input
          placeholder="Confirme sua senha"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <Input placeholder="CEP" type="text" onChange={(e) => setCep(e.target.value)} value={cep} />

        <p className="error-text">{error}</p>

        <div className="register-buttons">
          <Button title="Criar conta" type="submit" />

          <Link to="/login" className="full-width">
            <Button title="Já tenho uma conta" variant="outline" />
          </Link>
        </div>
      </form>
    </main>
  );
};

export default Register;
