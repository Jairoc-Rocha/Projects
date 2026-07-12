import { useState } from "react";
import { useLocation, useNavigate } from "react-router";

import AuthCard from "../components/AuthCard";
import AuthFooterLink from "../components/AuthFooterLink";
import AuthHeader from "../components/AuthHeader";
import LoginForm from "../components/LoginForm";
import PageLayout from "../components/PageLayout";
import { initialLoginFormData } from "../data/initialLoginFormData";
import useAuth from "../hooks/useAuth";
import { validateLoginForm } from "../utils/validateLoginForm";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const redirectTo = location.state?.from || "/";

  const [loginFormData, setLoginFormData] = useState(initialLoginFormData);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });

    setError("");
    setIsSubmitting(false);
  }

  function handleSubmit() {
    const validationError = validateLoginForm(loginFormData);

    if (validationError) {
      setError(validationError);
      setIsSubmitting(false);
      return;
    }

    const loginResult = login(loginFormData.email);

    if (!loginResult.success) {
      setError(loginResult.message);
      setIsSubmitting(false);
      return;
    }

    setError("");
    setIsSubmitting(true);

    console.log("Login realizado:", loginFormData.email);

    setTimeout(() => {
      navigate(redirectTo);
    }, 800);
  }

  return (
    <PageLayout centered>
      <AuthCard>
        <AuthHeader
          eyebrow="Acesso"
          title="Entrar no Burger Lab"
          description="Acesse sua conta para acompanhar seus pedidos e salvar seus dados."
        />

        <LoginForm
          loginFormData={loginFormData}
          error={error}
          isSubmitting={isSubmitting}
          onChange={handleChange}
          onSubmit={handleSubmit}
        />

        <AuthFooterLink
          text="Ainda não tem conta?"
          linkText="Criar conta"
          to="/register"
        />
      </AuthCard>
    </PageLayout>
  );
}
