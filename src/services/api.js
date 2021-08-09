const url = 'https://api.mercadolibre.com/sites/MLB/categories';
export async function getCategories() {
  const requestCategories = await fetch(url);
  const categories = await requestCategories.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const searchCategories = await categoryId();
  const categorie = searchCategories;
}
