const URL = 'https://api.mercadolibre.com/sites/MLB';

export async function getCategories() {
  const endpoint = `${URL}/categories`;

  const fetchApi = await fetch(endpoint);
  const data = await fetchApi.json();

  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  let endpoint = '';

  if (categoryId && query) {
    endpoint = `${URL}/search?category=${categoryId}&q=${query}`;
  } else if (categoryId) {
    endpoint = `${URL}/search?category=${categoryId}`;
  } else {
    endpoint = `${URL}/search?q=${query}`;
  }

  const fetchApi = await fetch(endpoint);
  const data = await fetchApi.json();

  return data;
}
