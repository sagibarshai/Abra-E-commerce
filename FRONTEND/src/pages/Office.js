import React from 'react';
import { returenTypeOfItem } from '../utils/returnTypeOfItem';
import DisplayPage from '../shared/DisplayPage';
export default ({ products }) => {
  const officeProducts = [
    ...returenTypeOfItem(products, 'Office'),
    ...returenTypeOfItem(products, 'Office'),
    ...returenTypeOfItem(products, 'Office'),
    ...returenTypeOfItem(products, 'Office'),
  ];
  return <DisplayPage products={officeProducts} title="Office Products" />;
};
