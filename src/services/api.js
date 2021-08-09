export async function getCategories() {
  const requirement = await fetch('https://api.mercadolibre.com/sites/MLB/categories ');
  const executeJson = await requirement.json();
  const getResults = await executeJson.results;
  return getResults;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
