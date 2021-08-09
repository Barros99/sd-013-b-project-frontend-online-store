const URL = 'https://api.mercadolibre.com/sites/MLB/';

export async function getCategories() {
  return fetch(`${URL}categories`)
    .then((response) => response.json())
    .catch((err) => console.log(err, 'error'))
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  return fetch(`${URL}search?category=${categoryId}&q=${query}`)
    .then((response) => response.json());
}
