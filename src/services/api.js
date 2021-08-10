export async function getCategories() {
  const response = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  );

  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(
  categoryId,
  query,
  searchByCategory = false,
) {
  const response = searchByCategory
    ? await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`,
    )
    : await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
    );

  const categoryAndQuery = await response.json();
  return categoryAndQuery;
}
