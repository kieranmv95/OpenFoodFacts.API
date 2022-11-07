const macros = (
  nutriments: any
): { carbs: number; fat: number; protein: number } => {
  const total =
    100 /
    (nutriments.carbohydrates_100g +
      nutriments.fat_100g +
      nutriments.proteins_100g);

  return {
    carbs: nutriments.carbohydrates_100g * total,
    fat: nutriments.fat_100g * total,
    protein: nutriments.proteins_100g * total,
  };
};

export default macros;
