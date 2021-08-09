export async function getCategories() {
  // Implemente aqui
  const urlBase = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(urlBase);
  const productList = await response.json();
  return productList;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
