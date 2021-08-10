export async function getCategories() {
  const response = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  );
  const object = await response.json();
  return object;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId && query) {
    const responseIdAndQuery = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
    );
    const dataIdAndQuery = await responseIdAndQuery.json();
    return dataIdAndQuery;
  }

  if (categoryId && !query) {
    const responseId = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`,
    );
    const dataId = await responseId.json();
    return dataId;
  }

  const responseQuery = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?q=${query}`,
  );
  const dataQuery = await responseQuery.json();
  return dataQuery;
}
