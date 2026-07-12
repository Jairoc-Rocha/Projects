import FormField from "./FormField";

export default function LoginForm({
  loginFormData,
  error,
  isSubmitting,
  onChange,
  onSubmit,
}) {
  return (
    <form className="mt-8 space-y-5">
      <FormField
        label="E-mail"
        name="email"
        value={loginFormData.email}
        onChange={onChange}
        placeholder="Digite seu e-mail"
        type="email"
      />

      <FormField
        label="Senha"
        name="password"
        value={loginFormData.password}
        onChange={onChange}
        placeholder="Digite sua senha"
        type="password"
      />

      {error && (
        <p className="rounded-2xl bg-red-500/10 px-4 py-3 text-sm font-bold text-red-300">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={onSubmit}
        disabled={isSubmitting}
        className="
          w-full cursor-pointer rounded-full bg-yellow-400 px-8 py-3
          font-black text-zinc-950 transition hover:bg-yellow-300
          disabled:cursor-not-allowed disabled:opacity-50
        "
      >
        {isSubmitting ? "Entrando..." : "Entrar"}
      </button>
    </form>
  );
}
