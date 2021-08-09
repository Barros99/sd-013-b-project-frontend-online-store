export async function getCategories() {
  // Implemente aqui o seu código!
  const responseCategories = await (await fetch('https://api.mercadolibre.com/sites/MLB/categories')).json();
  return responseCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const responseProduct = await (await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)).json();
  return responseProduct;
}
