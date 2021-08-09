export async function getCategories() {
  const fetchCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await fetchCategories.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const getIdQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query} `);
  const idQuery = await getIdQuery.json();
  return idQuery;
}
