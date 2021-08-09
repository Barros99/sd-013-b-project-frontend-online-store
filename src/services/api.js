export async function getCategories() {
  // Implemente aqui
  const categoriesURL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const fetchAPI = await fetch(categoriesURL);
  const data = await fetchAPI.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  let listURL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  if (!query) {
    listURL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  }
  if (!categoryId) {
    listURL = `https://api.mercadolibre.com/sites/MLB/search?q=$${query}`;
  }
  const fetchAPI = await fetch(listURL);
  const data = await fetchAPI.json();
  return data;
}
