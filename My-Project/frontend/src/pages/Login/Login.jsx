import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

import Button from "../../components/Button/Button";
import TextField from "../../components/TextField/TextField";
import { useAuth } from "../../contexts/AuthContext";
import { getUserByEmail } from "../../services/api";

import "./Login.css";

const initialFormData = {
  email: "",
  password: "",
};

const initialErrors = {
  email: "",
  password: "",
};

export default function Login() {
  const { userType } = useParams();
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [requestError, setRequestError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const userTypeTitle = userType === "admin" ? "Administrador" : "Cliente";

  function handleFieldChange(event) {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));

    setRequestError("");
  }

  function validateForm() {
    const newErrors = {
      email: "",
      password: "",
    };

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = "Digite um endereço de e-mail válido.";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Digite uma senha com pelo menos 6 caracteres.";
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== "");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const isFormValid = validateForm();

    if (!isFormValid) {
      setRequestError("");
      return;
    }

    setIsSubmitting(true);
    setRequestError("");

    try {
      const foundUser = await getUserByEmail(formData.email);

      if (!foundUser) {
        setRequestError("E-mail ou senha inválidos.");
        return;
      }

      if (foundUser.password !== formData.password) {
        setRequestError("E-mail ou senha inválidos.");
        return;
      }

      if (foundUser.role !== userType) {
        setRequestError(
          `Este usuário não possui acesso como ${userTypeTitle.toLowerCase()}.`,
        );

        return;
      }

      const authenticatedUser = {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role,
        createdAt: foundUser.createdAt,
      };

      login(authenticatedUser);

      if (foundUser.role === "admin") {
        navigate("/admin");
        return;
      }

      navigate("/products");
    } catch (error) {
      console.error("Erro ao realizar login:", error);

      setRequestError(
        "Não foi possível entrar. Verifique se o servidor está funcionando.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="login-page">
      <section className="login-visual-area">
        <div className="login-visual-content">
          <span>Experiência artesanal</span>

          <h1>Burger Lab</h1>

          <p>
            Sabores desenvolvidos com precisão, criatividade e muita
            personalidade.
          </p>
        </div>
      </section>

      <section className="login-form-area">
        <div className="login-card">
          <span className="project-label">Burger Lab</span>

          <h2>Entrar</h2>

          <p className="login-access-type">
            Acesso de: <strong>{userTypeTitle}</strong>
          </p>

          <form className="login-form" onSubmit={handleSubmit} noValidate>
            <TextField
              id="email"
              label="E-mail"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleFieldChange}
              placeholder="Digite seu e-mail"
              error={errors.email}
              required
            />

            <TextField
              id="password"
              label="Senha"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleFieldChange}
              placeholder="Digite sua senha"
              error={errors.password}
              required
            />

            {requestError && (
              <p className="login-request-error">{requestError}</p>
            )}

            <Button type="submit" fullWidth disabled={isSubmitting}>
              {isSubmitting ? "Entrando..." : "Entrar"}
            </Button>
          </form>

          <p className="login-register-text">
            Ainda não possui uma conta?
            <Link to="/register"> Cadastre-se</Link>
          </p>

          <Link className="login-back-link" to="/access-selection">
            Voltar para a escolha de acesso
          </Link>
        </div>
      </section>
    </main>
  );
}
