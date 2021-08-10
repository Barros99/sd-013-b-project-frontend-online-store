const getItemsFromLocalStorage = () => {
  const items = localStorage.getItem('cartItems');

  if (items) {
    return JSON.parse(items);
  }

  return [];
};

export default getItemsFromLocalStorage;
