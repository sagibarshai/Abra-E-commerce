import { createContext } from 'react';

export const Products = createContext({
  items: [
    {
      name: 'Black T-shirt',
      price: 89,
      imgSrc: '/images/tshirt.jpg',
      types: ['Best_Sellers', 'Clothing '],
    },
    {
      name: 'White Mouse Pad',
      price: 57,
      imgSrc: '/images/w-pad.jpg',
      types: ['Home', 'Best_Sellers', 'Office'],
    },
    {
      name: 'Black Canvas bag',
      price: 42,
      imgSrc: './images/b-bag.png',
      types: ['Best_Sellers'],
    },
    {
      name: 'White Hat',
      price: 64,
      imgSrc: '/images/w-hat.png',
      types: ['Sport', 'Best_Sellers'],
    },
    {
      name: 'Black Bottle',
      price: 109,
      imgSrc: '/images/b-bottle.png',
      types: ['Sport'],
    },
    {
      name: 'White Mug',
      price: 24,
      imgSrc: '/images/mug.png',
      types: ['Home', 'Best_Sellers', 'Office'],
    },
    {
      name: 'Black Notebook',
      price: 23,
      imgSrc: '/images/notebook.png',
      types: ['Home', 'Office'],
    },
    {
      name: 'White Bottle',
      price: 109,
      imgSrc: '/images/w-bottle.png',
      types: ['Sport'],
    },
    {
      name: 'Black Mouse Pad',
      price: 57,
      imgSrc: '/images/b-pad.png',
      types: ['Home', 'Best_Sellers', 'Office'],
    },
    {
      name: '2 Pens',
      price: 22,
      imgSrc: '/images/pens.png',
      types: ['Home', 'Office'],
    },
  ],
});
