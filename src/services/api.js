// Fizemos o requisito 1 em pair programming

const BASE_URL = 'https://api.mercadolibre.com/sites/MLB';

export async function getCategories() {
  const response = await fetch(`${BASE_URL}/categories`);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(`${BASE_URL}/search?category=$${categoryId}&q=$${query}`);
  const data = await response.json();
  return data;
}
