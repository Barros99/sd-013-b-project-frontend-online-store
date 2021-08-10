export async function getCategories() {
  const categories = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  ).then((result) => result.json());
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const categorieAndQuery = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`,
  ).then((result) => result.json());
  return categorieAndQuery;
}
