import { returenTypeOfItem } from '../utils/returnTypeOfItem';
import DisplayPage from '../shared/DisplayPage';
export default ({ products }) => {
  const clothingProducts = [
    ...returenTypeOfItem(products, 'Clothing'),
    ...returenTypeOfItem(products, 'Clothing'),
    ...returenTypeOfItem(products, 'Clothing'),
    ...returenTypeOfItem(products, 'Clothing'),
  ];
  return <DisplayPage products={clothingProducts} title="Clothing Products" />;
};
