import React from 'react';
import { returenTypeOfItem } from '../utils/returnTypeOfItem';
import DisplayPage from '../shared/DisplayPage';
export default ({ products }) => {
  const sportsProducts = [
    ...returenTypeOfItem(products, 'Sport'),
    ...returenTypeOfItem(products, 'Sport'),
    ...returenTypeOfItem(products, 'Sport'),
  ];
  return <DisplayPage products={sportsProducts} title="Sports Products" />;
};
