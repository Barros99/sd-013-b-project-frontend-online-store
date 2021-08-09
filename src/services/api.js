export async function getCategories() {
  const fetched = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await fetched.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const fetched = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  );

  const searchResults = await fetched.json();
  return searchResults;
}
