export async function getCategories() {
  // Implemente aqui
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}

// Para realizar essas buscas, vocês precisarão consultar os seguintes endpoints:

// Para listar as categorias disponíveis:
// Tipo da requisição: GET
// Endpoint: https://api.mercadolibre.com/sites/MLB/categories
// Para buscar por itens por termo:
// Tipo da requisição: GET
// Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
// Endpoint: https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
// Para buscar itens por categoria:
// Tipo da requisição: GET
// Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
// Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID
// Para buscar itens de uma categoria por termo:
// Tipo da requisição: GET
// Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
// Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
// Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY