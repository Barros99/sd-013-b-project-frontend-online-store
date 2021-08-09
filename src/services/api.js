const CATEGORIES = 'https://api.mercadolibre.com/sites/MLB/categories';
const PRODUCTID = 'https://api.mercadolibre.com/sites/MLB/search?category=';

// REQUISITO 1 FEITO POR TODOS VIA PAIR PROGRAMING;

export async function getCategories() {
  const response = await (await fetch(CATEGORIES)).json();
  return response;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await (await fetch(`${PRODUCTID}${categoryId}&q=${query}`)).json();
  return response;
}
