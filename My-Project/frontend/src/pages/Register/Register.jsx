import { useState } from "react";
import { Link } from "react-router";

import Button from "../../components/Button/Button";
import TextField from "../../components/TextField/TextField";
import { createUser, getUsers } from "../../services/api";

import "./Register.css";

const initialFormData = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const initialErrors = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Register() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);
  const [successMessage, setSuccessMessage] = useState("");
  const [requestError, setRequestError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    setSuccessMessage("");
    setRequestError("");
  }

  function validateForm() {
    const newErrors = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    if (formData.name.trim().length < 3) {
      newErrors.name = "Digite um nome com pelo menos 3 caracteres.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email.trim())) {
      newErrors.email = "Digite um endereço de e-mail válido.";
    }

    if (formData.password.length < 6) {
      newErrors.password = "A senha deve possuir pelo menos 6 caracteres.";
    }

    if (formData.confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Confirme sua senha.";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "As senhas não são iguais.";
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== "");
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const isFormValid = validateForm();

    if (!isFormValid) {
      setSuccessMessage("");
      setRequestError("");
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage("");
    setRequestError("");

    try {
      const users = await getUsers();

      const normalizedEmail = formData.email.trim().toLocaleLowerCase();

      const emailAlreadyExists = users.some(
        (user) => user.email.toLocaleLowerCase() === normalizedEmail,
      );

      if (emailAlreadyExists) {
        setErrors((currentErrors) => ({
          ...currentErrors,
          email: "Este e-mail já está cadastrado.",
        }));

        return;
      }

      const newUser = {
        name: formData.name.trim(),
        email: normalizedEmail,
        password: formData.password,
        role: "customer",
        createdAt: new Date().toISOString(),
      };

      await createUser(newUser);

      setFormData(initialFormData);
      setErrors(initialErrors);
      setSuccessMessage("Conta criada com sucesso!");
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);

      setRequestError(
        "Não foi possível criar a conta. Verifique se o servidor está funcionando.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="register-page">
      <section className="register-card">
        <div className="register-header">
          <span className="project-label">Burger Lab</span>

          <h1>Criar conta</h1>

          <p>
            Preencha os dados abaixo para acessar nossos produtos e realizar
            seus pedidos.
          </p>
        </div>

        <form className="register-form" onSubmit={handleSubmit} noValidate>
          <TextField
            id="name"
            label="Nome completo"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleFieldChange}
            placeholder="Digite seu nome completo"
            error={errors.name}
            required
          />

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
            placeholder="Digite uma senha"
            error={errors.password}
            required
          />

          <TextField
            id="confirmPassword"
            label="Confirmação de senha"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleFieldChange}
            placeholder="Digite a senha novamente"
            error={errors.confirmPassword}
            required
          />

          {successMessage && (
            <p className="register-success-message">{successMessage}</p>
          )}

          {requestError && (
            <p className="register-request-error">{requestError}</p>
          )}

          <Button type="submit" fullWidth disable={isSubmitting}>
            {isSubmitting ? "Cadastrando..." : "Criar conta"}
          </Button>
        </form>

        <p className="existing-account-text">
          Já possui uma conta?
          <Link to="/access-selection"> Entrar</Link>
        </p>
      </section>
    </main>
  );
}
