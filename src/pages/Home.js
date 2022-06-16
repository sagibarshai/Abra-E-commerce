import Cart from '../shared/Cart';
import DisplayPage from '../shared/DisplayPage';
import { returenTypeOfItem } from '../utils/returnTypeOfItem';
export default ({ products }) => {
  const homeProducts = [
    // just for that I can get X3 products
    ...returenTypeOfItem(products, 'Home'),
    ...returenTypeOfItem(products, 'Home'),
    ...returenTypeOfItem(products, 'Home'),
  ];
  return (
    <>
      <DisplayPage title="Our Products" products={homeProducts} />
    </>
  );
};
