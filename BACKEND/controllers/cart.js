const CartSchema = require('../models/cart');
const addItemToCart = async (req, res, next) => {
  const { userId, productObj } = req.body;
  const carts = await CartSchema.find();
  let cartItems = [];
  for (let cart of carts) {
    if (cart.cartId === userId) {
      let totalCartPrice = cart.totalPrice;
      cartItems = [...cart.items];
      const exitingItem = cartItems.find(
        (item) => item.name === productObj.name
      );
      if (exitingItem) {
        exitingItem.cartQty++;
        totalCartPrice += exitingItem.price;
      } else {
        productObj.cartQty = 1;
        totalCartPrice += productObj.price;

        cartItems.push(productObj);
      }
      const { items, totalPrice } = cart;
      await CartSchema.updateOne(
        { cartId: userId },
        { $set: { totalPrice: totalCartPrice } }
      );
      await CartSchema.updateOne(
        { cartId: userId },
        { $set: { items: cartItems } }
      );
      res.json({ cartItems: cartItems, totalPrice: totalCartPrice });
    }
  }
};

const getCartByUserId = async (req, res, next) => {
  const { userId } = req.params;
  const carts = await CartSchema.find();
  for (let cart of carts) {
    if (cart.cartId === userId) {
      const { items } = cart;
      let totalPrice = 0;
      for (let item of cart.items) {
        totalPrice += item.cartQty * item.price;
      }

      return res.json({ items, items, totalPrice: totalPrice });
    }
  }
  return res.json({ messageError: 'Not found' });
};

const increseItemByOne = async (req, res, next) => {
  const { userId } = req.params;
  const { productObj, totalPrice, itemsInCart } = req.body;
  const carts = await CartSchema.find();
  // let cartItems = [];
  for (let cart of carts) {
    if (cart.cartId === userId) {
      await CartSchema.updateOne(
        { cartId: userId },
        { $set: { totalPrice: totalPrice } }
      );
      await CartSchema.updateOne(
        { cartId: userId },
        { $set: { items: itemsInCart } }
      );
    }
    //     // let totalCartPrice = cart.totalPrice;
    //     // cartItems = [...cart.items];
    //     const exitingItem = itemsInCart.find(
    //       (item) => item.name === productObj.name
    //     );
    //     // if (exitingItem) {
    //     //   exitingItem.cartQty++;
    //     //   totalCartPrice += exitingItem.price;
    //     // }
    //     const { items } = cart;
  }
};
const decreseItemByOne = async (req, res, next) => {
  const { userId } = req.params;
  const { productObj, totalPrice, itemsInCart } = req.body;
  const carts = await CartSchema.find();
  // let cartItems = [];
  for (let cart of carts) {
    if (cart.cartId === userId) {
      await CartSchema.updateOne(
        { cartId: userId },
        { $set: { totalPrice: totalPrice } }
      );
      await CartSchema.updateOne(
        { cartId: userId },
        { $set: { items: itemsInCart } }
      );
    }
    // const { userId } = req.params;
    // const { productObj } = req.body;
    // const carts = await CartSchema.find();
    // let cartItems = [];
    // for (let cart of carts) {
    //   if (cart.cartId === userId) {
    //     let totalCartPrice = cart.totalPrice;
    //     cartItems = [...cart.items];
    //     const exitingItem = cartItems.find(
    //       (item) => item.name === productObj.name
    //     );
    //     if (exitingItem) {
    //       if (exitingItem.cartQty === 1) {
    //         cartItems = cartItems.filter((item) => item !== exitingItem);
    //       }
    //       exitingItem.cartQty--;
    //       totalCartPrice -= exitingItem.price;
    //     }
    //     const { items, totalPrice } = cart;
    //     await CartSchema.updateOne(
    //       { cartId: userId },
    //       { $set: { totalPrice: totalCartPrice } }
    //     );
    //     await CartSchema.updateOne(
    //       { cartId: userId },
    //       { $set: { items: cartItems } }
    //     );
    //     res.json({ cartItems: cartItems, totalPrice: totalCartPrice });
    //   }
  }
};
const deleteItemById = async (req, res, next) => {
  const { userId } = req.params;
  const { productObj } = req.body;
  const carts = await CartSchema.find();
  let cartItems = [];
  for (let cart of carts) {
    if (cart.cartId === userId) {
      let totalCartPrice = cart.totalPrice;
      cartItems = [...cart.items];
      const exitingItem = cartItems.find(
        (item) => item.name === productObj.name
      );
      if (exitingItem) {
        cartItems = cartItems.filter((item) => item !== exitingItem);
        console.log(
          'total' + totalCartPrice,
          exitingItem.price + '$' + exitingItem.cartQty
        );
        totalCartPrice =
          totalCartPrice - exitingItem.price * exitingItem.cartQty;
        exitingItem.cartQty = 0;
      }
      const { items, totalPrice } = cart;
      await CartSchema.updateOne(
        { cartId: userId },
        { $set: { totalPrice: totalCartPrice } }
      );
      await CartSchema.updateOne(
        { cartId: userId },
        { $set: { items: cartItems } }
      );
      return res.json({ cartItems: cartItems, totalPrice: totalCartPrice });
    }
  }
};

exports.addItemToCart = addItemToCart;
exports.getCartByUserId = getCartByUserId;
exports.deleteItemById = deleteItemById;
exports.increseItemByOne = increseItemByOne;
exports.decreseItemByOne = decreseItemByOne;
