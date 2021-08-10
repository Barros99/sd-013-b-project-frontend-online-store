export async function getCategories() {
  const result = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await result.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query, productId) {
  if (categoryId === '' && query === '') {
    const result = await fetch(`https://api.mercadolibre.com/items/${productId}`);
    const product = await result.json();
    console.log('apenas productId');
    return product;
  }
  if (query === '') {
    const url = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
    const result = await fetch(url);
    const productsFromCategories = await result.json();
    console.log('apenas category', url);
    return productsFromCategories;
  } if (categoryId === '') {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const result = await fetch(url);
    const productsFromSearch = await result.json();
    console.log('apenas query', url);
    return productsFromSearch;
  }
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const productsFromCategoryAndSearch = await result.json();
  return productsFromCategoryAndSearch;
}
