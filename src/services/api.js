export async function getCategories() {
  const result = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await result.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (query === '') {
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
    const result = await fetch(url);
    const productsFromCategories = await result.json();
    return productsFromCategories;
  } if (categoryId === '') {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const result = await fetch(url);
    const productsFromSearch = await result.json();
    return productsFromSearch;
  } const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const productsFromCategoryAndSearch = await result.json();
  return productsFromCategoryAndSearch;
}
