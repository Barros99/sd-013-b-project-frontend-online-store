export async function getCategories() {
  // Implemente aqui
  const requestCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const requestReturn = await requestCategories.json();
  return requestReturn;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const requestProducts = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const requestReturn = await requestProducts.json();
  return requestReturn;
}
