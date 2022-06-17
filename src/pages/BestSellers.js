import { returenTypeOfItem } from '../utils/returnTypeOfItem';
import DisplayPage from '../shared/DisplayPage';
export default ({ products }) => {
  const bestSellers = [
    ...returenTypeOfItem(products, 'Best_Sellers'),
    ...returenTypeOfItem(products, 'Best_Sellers'),
    ...returenTypeOfItem(products, 'Best_Sellers'),
  ];
  return <DisplayPage products={bestSellers} title="Best Sellers" />;
};
