export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  return [...data];
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const responseQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
  const dataQuery = await responseQuery.json();
  const responseId = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  const dataId = await responseId.json();
  return (categoryId ? dataQuery : dataId);
}
