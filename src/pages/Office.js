import { returenTypeOfItem } from '../utils/returnTypeOfItem';
import DisplayPage from '../shared/DisplayPage';
export default ({ products }) => {
  const officeProducts = [
    ...returenTypeOfItem(products, 'Office'),
    ...returenTypeOfItem(products, 'Office'),
    ...returenTypeOfItem(products, 'Office'),
    ...returenTypeOfItem(products, 'Office'),
  ];
  console.log(officeProducts);
  return <DisplayPage products={officeProducts} title="Office Products" />;
};
