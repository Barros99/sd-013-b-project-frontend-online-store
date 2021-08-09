export async function getCategories() {
  const requirement = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const executeJson = await requirement.json();
  return executeJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const newFetch = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const executeJson = await newFetch.json();
  console.log(executeJson);
  return executeJson;
}
