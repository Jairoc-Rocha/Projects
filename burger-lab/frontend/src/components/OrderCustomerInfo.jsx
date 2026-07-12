import { getPaymentMethodLabel } from "../utils/getPaymentMethodLabel";

export default function OrderCustomerInfo({ customer }) {
  return (
    <div className="mt-6 border-t border-yellow-400/10 pt-4">
      <span className="text-sm font-bold text-yellow-50/70">
        Dados do cliente
      </span>

      <div
        className="
          mt-3 grid gap-3 rounded-2xl bg-black/30 px-4 py-3
          text-sm text-yellow-50/70 md:grid-cols-2
        "
      >
        <p>
          <strong className="text-yellow-50">Nome:</strong> {customer.name}
        </p>

        <p>
          <strong className="text-yellow-50">E-mail:</strong> {customer.email}
        </p>

        <p>
          <strong className="text-yellow-50">Telefone:</strong> {customer.phone}
        </p>

        <p>
          <strong className="text-yellow-50">Forma de pagamento:</strong>{" "}
          {getPaymentMethodLabel(customer.paymentMethod)}
        </p>

        <p className="md:col-span-2">
          <strong className="text-yellow-50">Endereço:</strong>{" "}
          {customer.address}
        </p>
      </div>
    </div>
  );
}
