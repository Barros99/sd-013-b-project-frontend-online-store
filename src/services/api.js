export async function getCategories() {
  try {
    const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
    const response = await fetch(endPoint);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const response = await fetch(endPoint);
    const data = await response.json();
    return data;
  } catch (err) {
    return err;
  }
}
