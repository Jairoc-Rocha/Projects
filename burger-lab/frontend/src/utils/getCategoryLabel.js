import { categories } from "../data/categories";

export function getCategoryLabel(categoryValue) {
  const category = categories.find(
    (category) => category.value === categoryValue,
  );

  if (!category) {
    return categoryValue;
  }

  return category.label;
}
