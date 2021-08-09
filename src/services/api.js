const urlBase = 'https://api.mercadolibre.com/sites/MLB/search?';

export async function getCategories() {
  // Implemente aqui
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categoriesList = await response.json();
  return categoriesList;
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const response = await fetch(`${urlBase}category=${categoryId}&q=${query}`);
  const productInfos = await response.json();
  return productInfos;
}

// commit inicial.
