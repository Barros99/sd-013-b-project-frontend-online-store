export async function getCategories() {
  // Implemente aqui
  const fetchData = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await fetchData.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const fetchData = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const data = await fetchData.json();
  return data;
}
