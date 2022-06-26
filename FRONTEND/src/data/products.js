import { createContext } from 'react';
export const allProducts = {
  items: [
    {
      name: 'Black T-shirt',
      price: 89,
      imgSrc: '/images/tshirt.jpg',
      types: ['Best_Sellers', 'Clothing'],
      cartQty: 0,
    },
    {
      name: 'White Mouse Pad',
      price: 57,
      imgSrc: '/images/WPad.jpg',
      types: ['Home', 'Office', 'Best_Sellers'],
      cartQty: 0,
    },
    {
      name: 'Black Canvas bag',
      price: 42,
      imgSrc: './images/bBag.png',
      types: ['Best_Sellers', 'Clothing'],
      cartQty: 0,
    },
    {
      name: 'White Hat',
      price: 64,
      imgSrc: '/images/wHat.png',
      types: ['Sport', 'Best_Sellers', 'Clothing'],
      cartQty: 0,
    },
    {
      name: 'Black Bottle',
      price: 109,
      imgSrc: '/images/bBottle.png',
      types: ['Sport', 'Best_Sellers'],
      cartQty: 0,
    },
    {
      name: 'White Mug',
      price: 24,
      imgSrc: '/images/wMug.png',
      types: ['Home', 'Office', 'best-sellers'],
      cartQty: 0,
    },
    {
      name: 'Black Notebook',
      price: 23,
      imgSrc: '/images/notebook.png',
      types: ['Home', 'Office'],
      cartQty: 0,
    },
    {
      name: 'White Bottle',
      price: 109,
      imgSrc: '/images/wBottle.png',
      types: ['Sport'],
      cartQty: 0,
    },
    {
      name: 'Black Mouse Pad',
      price: 57,
      imgSrc: '/images/bPad.png',
      types: ['Home', 'Office'],
      cartQty: 0,
    },
    {
      name: '2 Pens',
      price: 22,
      imgSrc: '/images/pens.png',
      types: ['Home', 'Office'],
      cartQty: 0,
    },
  ],
};
export const Products = createContext(allProducts);
