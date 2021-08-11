async function getProductForCategory(category) {
  try {
    const fetchAPI = `https://api.mercadolibre.com/sites/MLB/search?category=${category}`;
    const responseAPI = await fetch(fetchAPI);
    const data = await responseAPI.json();
    return data;
  } catch (error) {
    return error;
  }
}

async function getProductForQuery(query) {
  try {
    const fetchAPI = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const responseAPI = await fetch(fetchAPI);
    const data = await responseAPI.json();
    return data;
  } catch (error) {
    return error;
  }
}

async function getProductsCategoryQuery(categoryId, query) {
  try {
    const fetchAPI = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
    const responseAPI = await fetch(fetchAPI);
    const data = await responseAPI.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (categoryId === null) {
    return getProductForQuery(query);
  }
  if (query === null) {
    return getProductForCategory(categoryId);
  }

  getProductsCategoryQuery(categoryId, query);
}

export async function getCategories() {
  try {
    const fetchAPI = 'https://api.mercadolibre.com/sites/MLB/categories';
    const responseAPI = await fetch(fetchAPI);
    const data = await responseAPI.json();
    return data;
  } catch (error) {
    return error;
  }
}
