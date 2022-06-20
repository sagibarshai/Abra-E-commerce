export const returenTypeOfItem = (products, stringType) => {
  const renderedItems = [];
  const items = products.items;
  items.map((item) => {
    return item.types.map((type) => {
      if (type === stringType) {
        renderedItems.unshift(item);
      }
    });
  });
  return renderedItems;
};
