export async function getCategories() {
  try {
    const fetchAPI = 'https://api.mercadolibre.com/sites/MLB/categories';
    const responseAPI = await fetch(fetchAPI);
    const data = await responseAPI.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const fetchAPI = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const responseAPI = await fetch(fetchAPI);
    const data = await responseAPI.json();
    return data;
  } catch (error) {
    return error;
  }
}
