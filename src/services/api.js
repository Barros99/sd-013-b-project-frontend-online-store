export async function getCategories() {
  const getResponse = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const response = await getResponse.json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const getResponse = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const response = await getResponse.json();
  return response;
}
