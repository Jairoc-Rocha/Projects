import { useState } from "react";

import { formatCurrency } from "../utils/formatCurrency";
import { getItemsCountLabel } from "../utils/getItemsCountLabel";

export default function OrderItemsAccordion({ items }) {
  const [isItemsOpen, setIsItemsOpen] = useState(false);

  function handleToggleItems() {
    setIsItemsOpen(!isItemsOpen);
  }

  return (
    <div className="mt-6 border-t border-yellow-400/10 pt-4">
      <button
        type="button"
        onClick={handleToggleItems}
        className="
          flex w-full cursor-pointer items-center justify-between
          rounded-2xl bg-black/30 px-4 py-3 text-left transition
          hover:bg-yellow-400/10
        "
      >
        <span className="text-sm font-bold text-yellow-50/70">
          {getItemsCountLabel(items)}
        </span>

        <span className="text-sm font-black text-yellow-400">
          {isItemsOpen ? "Ocultar itens ▲" : "Ver itens ▼"}
        </span>
      </button>

      {isItemsOpen && (
        <ul className="mt-3 space-y-2">
          {items.map((item) => {
            const itemSubtotal = item.price * item.quantity;

            return (
              <li
                key={item.id}
                className="
                  flex flex-col gap-3 rounded-2xl bg-black/30 px-4 py-3
                  text-sm md:flex-row md:items-center md:justify-between
                "
              >
                <div>
                  <span className="block font-bold text-yellow-50">
                    {item.name}
                  </span>

                  <span className="mt-1 block text-xs text-yellow-50/60">
                    {item.quantity} x {formatCurrency(item.price)}
                  </span>
                </div>

                <strong className="font-black text-yellow-400">
                  {formatCurrency(itemSubtotal)}
                </strong>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
