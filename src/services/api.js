export async function getCategories() {
  const fetchGetCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return fetchGetCategories.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const fetchCategorieIdByQuery = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  );

  return fetchCategorieIdByQuery.json();
}
