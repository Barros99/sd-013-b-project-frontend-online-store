export async function getCategories() {
  const fetchGetCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  return fetchGetCategories.json();
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
