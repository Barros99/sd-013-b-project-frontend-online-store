export async function getCategories() {
  const endpoint = 'https://api.mercadolibre.com/sites/MLB/categories';

  return fetch(endpoint)
    .then((response) => response.json())
    .then((response) => response);
}

/* DESESTRUTURAR OS PARÂMETROS */
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;

  return fetch(endpoint)
    .then((response) => response.json())
    .then((response) => response);
}
