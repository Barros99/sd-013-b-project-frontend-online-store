const url = 'https://api.mercadolibre.com/sites/MLB/categories';
const urlQuery = 'https://api.mercadolibre.com/sites/MLB/search?category=';

export async function getCategories() {
  const requestCategories = await fetch(url);
  const categories = await requestCategories.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(
  categoryId = '&CATEGORY_ID', query = '$QUERY',
) {
  const searchCategories = await fetch(`${urlQuery}${categoryId}&q=${query}`);
  const products = await searchCategories.json();
  return products;
}
