export async function getCategories() {
  const fetchGetCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const json = await fetchGetCategories.json();
  return json;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (!query) {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    const json = await response.json();
    return json;
  }
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const json = response.json();
  return json;
}

// export async function getProduct(productId) {
//   const product = await fetch(
//     `https://api.mercadolibre.com/items/${productId}`,
//   );

//   return product.json();
// }
