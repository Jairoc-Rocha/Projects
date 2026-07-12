import { useState } from "react";
import { useNavigate } from "react-router";

import AuthCard from "../components/AuthCard";
import AuthFooterLink from "../components/AuthFooterLink";
import AuthHeader from "../components/AuthHeader";
import PageLayout from "../components/PageLayout";
import RegisterForm from "../components/RegisterForm";
import { AUTH_MESSAGES } from "../constants/authMessages";
import { initialRegisterFormData } from "../data/initialRegisterFormData";
import useAuth from "../hooks/useAuth";
import { validateRegisterForm } from "../utils/validateRegisterForm";

export default function Register() {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [registerFormData, setRegisterFormData] = useState(
    initialRegisterFormData,
  );
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setRegisterFormData({
      ...registerFormData,
      [name]: value,
    });

    setError("");
    setSuccess("");
    setIsSubmitting(false);
  }

  function handleSubmit() {
    const validationError = validateRegisterForm(registerFormData);

    if (validationError) {
      setError(validationError);
      setSuccess("");
      return;
    }

    const registerResult = register(registerFormData);

    if (!registerResult.success) {
      setError(registerResult.message);
      setSuccess("");
      return;
    }

    setError("");
    setSuccess(setSuccess(AUTH_MESSAGES.registerRedirect));
    setIsSubmitting(true);

    console.log("Cadastro realizado:", registerFormData.email);

    setTimeout(() => {
      navigate("/login");
    }, 1500);
  }

  return (
    <PageLayout centered>
      <AuthCard>
        <AuthHeader
          eyebrow="Cadastro"
          title="Criar conta"
          description="Cadastre-se para salvar seus dados e acompanhar seus pedidos."
        />

        <RegisterForm
          registerFormData={registerFormData}
          error={error}
          success={success}
          isSubmitting={isSubmitting}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />

        <AuthFooterLink
          text="Já tem uma conta?"
          linkText="Entrar"
          to="/login"
        />
      </AuthCard>
    </PageLayout>
  );
}
