export async function getCategories() {
<<<<<<< HEAD
  const categories = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((result) => result.json());
=======
  const categories = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  ).then((result) => result.json());
>>>>>>> main-group-16-requirement-3
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
<<<<<<< HEAD
  const categorieAndQuery = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`)
    .then((result) => result.json());
=======
  const categorieAndQuery = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`,
  ).then((result) => result.json());
>>>>>>> main-group-16-requirement-3
  return categorieAndQuery;
}
