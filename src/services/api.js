const categoryApi = 'https://api.mercadolibre.com/sites/MLB/categories';

/* const categoryId = 'CATEGORY_ID'; */

export async function getCategories() {
  await fetch(categoryApi)
    .then((response) => response.json())
    .then((response) => response.id); /* TENTANDO ACESSAR A CHAVE ID */

    /* .then((response) => console.log(response)); */
}

/* DESESTRUTURAR OS PARÂMETROS */
export async function getProductsFromCategoryAndQuery(categoryId, query) {
  await fetch`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`
    .then((response) => response.json());
    /* .then((response) => console.log(response)); */
}
