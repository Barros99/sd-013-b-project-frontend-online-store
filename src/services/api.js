export async function getCategories() {
  const url = 'https://api.mercadolibre.com/sites/MLB/categories';
  const data = await fetch(url);
  const categories = await data.json();
  return categories;
}

export async function
getProductsFromCategoryAndQuery(
  categoryId = undefined,
  query = undefined,
) {
  let url = '';
  if (query && categoryId) url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  else if (query) url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  else url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;

  const data = await fetch(url);
  const categories = await data.json();
  return categories;
}
