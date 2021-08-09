export async function getCategories() {
  const response = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  );
  const object = await response.json();
  console.log(typeof object);
  return object;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const responseQuery = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
  );
  const dataQuery = await responseQuery.json();
  const responseId = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`,
  );
  const dataId = await responseId.json();
  console.log(dataQuery);
  return categoryId ? dataQuery : dataId;
}
