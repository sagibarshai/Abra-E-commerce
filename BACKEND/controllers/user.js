const UserSchema = require('../models/user');
const CartSchema = require('../models/cart');
const { validationResult } = require('express-validator');

const signup = async (req, res, next) => {
  const errorsObj = validationResult(req);
  const { username, email, password, isloggedIn } = req.body;
  const users = await UserSchema.find();
  const emailAlreadyExists = users.find((user) => user.email === email);
  if (emailAlreadyExists) {
    return res.json({
      errorMessage: 'this email is already exists the system , try anothor one',
    });
  } else if (!errorsObj.isEmpty()) {
    return res.json({ errorMessage: 'invalid inputs' });
  }
  const newUser = new UserSchema({
    username,
    email,
    password,
    isloggedIn,
    manager:false
  });
  const userResult = await newUser.save();
  const newCart = new CartSchema({
    cartId: userResult.id,
    items: [],
    totalPrice: 0,
  });
  const cartResult = await newCart.save();

  return res.json({ createdUser: userResult, createdCart: cartResult });
};

const login = async (req, res, next) => {
  const errorsObj = validationResult(req);
  const { email, password, isloggedIn } = req.body;
  if (!errorsObj.isEmpty()) {
    return res.json({ errorMessage: 'invalid inputs' });
  }
  const users = await UserSchema.find();
  for (let user of users) {
    let userData = { email, isloggedIn, password };
    if (user.email === email && user.password === password) {
      user.isloggedIn = true;
      UserSchema.updateOne({ email: email }, { $set: { isloggedIn: true } })
        .then((doc) => {
          console.log(doc);
        })
        .catch((err) => console.log(err));
      return res.json({ message: user });
    }
  }
  return res.json({ errorMessage: 'not found ' });
};
const logout = async (req, res, next) => {
  const { userId, email } = req.body;
  const users = await UserSchema.find();
  for (let user of users) {
    UserSchema.updateOne({ email: email }, { $set: { isloggedIn: false } })
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => console.log(err));
    return res.json({
      message: 'Logged out!',
    });
  }
  return res.json({ errorMessage: 'cannot logout' });
};

exports.login = login;
exports.logout = logout;
exports.signup = signup;
