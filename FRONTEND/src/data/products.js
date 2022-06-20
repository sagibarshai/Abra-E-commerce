import { createContext } from 'react';
export const allProducts = {
  items: [
    {
      name: 'Black T-shirt',
      price: 89,
      imgSrc: '/images/tshirt.jpg',
      types: ['Best_Sellers', 'Clothing'],
      cartQty: localStorage.getItem('Black T-shirt') || 0,
    },
    {
      name: 'White Mouse Pad',
      price: 57,
      imgSrc: '/images/w-pad.jpg',
      types: ['Home', 'Best_Sellers', 'Office'],
      cartQty: localStorage.getItem('White Mouse Pad') || 0,
    },
    {
      name: 'Black Canvas bag',
      price: 42,
      imgSrc: './images/b-bag.png',
      types: ['Best_Sellers'],
      cartQty: localStorage.getItem('Black Canvas bag') || 0,
    },
    {
      name: 'White Hat',
      price: 64,
      imgSrc: '/images/w-hat.png',
      types: ['Sport', 'Best_Sellers', 'Clothing'],
      cartQty: localStorage.getItem('White Hat') || 0,
    },
    {
      name: 'Black Bottle',
      price: 109,
      imgSrc: '/images/b-bottle.png',
      types: ['Sport'],
      cartQty: localStorage.getItem('Black Bottle') || 0,
    },
    {
      name: 'White Mug',
      price: 24,
      imgSrc: '/images/mug.png',
      types: ['Home', 'Best_Sellers', 'Office'],
      cartQty: localStorage.getItem('White Mug') || 0,
    },
    {
      name: 'Black Notebook',
      price: 23,
      imgSrc: '/images/notebook.png',
      types: ['Home', 'Office'],
      cartQty: localStorage.getItem('Black Notebook') || 0,
    },
    {
      name: 'White Bottle',
      price: 109,
      imgSrc: '/images/w-bottle.png',
      types: ['Sport'],
      cartQty: localStorage.getItem('White Bottle') || 0,
    },
    {
      name: 'Black Mouse Pad',
      price: 57,
      imgSrc: '/images/b-pad.png',
      types: ['Home', 'Best_Sellers', 'Office'],
      cartQty: localStorage.getItem('Black Mouse Pad') || 0,
    },
    {
      name: '2 Pens',
      price: 22,
      imgSrc: '/images/pens.png',
      types: ['Home', 'Office'],
      cartQty: localStorage.getItem('2 Pens') || 0,
    },
  ],
};
export const Products = createContext(allProducts);
