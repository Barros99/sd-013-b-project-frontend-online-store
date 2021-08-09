const baseURL = 'https://api.mercadolibre.com/sites/MLB';

export async function getCategories() {
  const response = await fetch(`${baseURL}/categories`);

  return response.json();
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(`${baseURL}/search?category=${categoryId}&q=${query}`);

  return response.json();
}
