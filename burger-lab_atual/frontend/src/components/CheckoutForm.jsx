import FormField from "./FormField";
import FormSelect from "./FormSelect";

export default function CheckoutForm({
  formData,
  cartTotal,
  paymentMethods,
  error,
  isSubmitting,
  onChange,
  onSubmit,
}) {
  return (
    <form
      className="
        rounded-4xl border border-yellow-400/20 bg-zinc-950 p-6
      "
    >
      <h3 className="text-2xl font-black text-yellow-50">Dados para entrega</h3>

      {error && (
        <div
          className="
            mt-4 rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3
            text-sm font-bold text-red-300
          "
        >
          {error}
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        <FormField
          label="Nome"
          name="name"
          value={formData.name}
          onChange={onChange}
          placeholder="Digite seu nome"
        />

        <FormField
          label="Telefone"
          name="phone"
          value={formData.phone}
          onChange={onChange}
          placeholder="(00) 00000-0000"
        />

        <FormField
          label="Endereço"
          name="address"
          value={formData.address}
          onChange={onChange}
          placeholder="Rua, avenida, número..."
          className="md:col-span-2"
        />

        <FormSelect
          label="Forma de pagamento"
          name="paymentMethod"
          value={formData.paymentMethod}
          onChange={onChange}
          options={paymentMethods}
        />

        <FormField
          label="Observação"
          name="observation"
          value={formData.observation}
          onChange={onChange}
          placeholder="Ex: sem cebola"
        />
      </div>

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
        {isSubmitting ? "Finalizando..." : "Confirmar pedido"}
      </button>
    </form>
  );
}
