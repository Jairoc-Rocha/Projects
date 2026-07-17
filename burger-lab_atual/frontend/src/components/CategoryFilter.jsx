import { categories } from "../data/categories";

function CategoryButton({ label, value, activeCategory, onChangeCategory }) {
  const isActive = activeCategory === value;

  return (
    <button
      onClick={() => onChangeCategory(value)}
      className={`
        cursor-pointer rounded-full border px-5 py-2 text-sm font-black transition
        ${
          isActive
            ? "border-yellow-400 bg-yellow-400 text-zinc-950"
            : "border-yellow-400/40 text-yellow-400 hover:bg-yellow-400 hover:text-zinc-950"
        }
      `}
    >
      {label}
    </button>
  );
}

export default function CategoryFilter({ activeCategory, onChangeCategory }) {
  return (
    <div
      className="
        mt-8 flex flex-wrap gap-3
      "
    >
      {categories.map((category) => (
        <CategoryButton
          key={category.value}
          label={category.label}
          value={category.value}
          activeCategory={activeCategory}
          onChangeCategory={onChangeCategory}
        />
      ))}
    </div>
  );
}
