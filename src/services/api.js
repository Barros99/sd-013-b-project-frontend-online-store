export async function getCategories() {
  // Implemente aqui
  try {
    const endPoint = 'https://api.mercadolibre.com/sites/MLB/categories'
    const reponse = await fetch(endPoint);
    const data = await response.json();
    return data;
  } catch (err) {
    return err
  }
}

export async function getProductsFromCategoryAndQuery( categoryId, query ) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  try {
    const endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`
    const response = await fetch(endPoint);
    const data = await response.json();
    return data;
} catch (err) {
  return err;
  }
}