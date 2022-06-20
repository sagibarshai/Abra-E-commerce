const UserSchema = require('../models/user');
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
  });
  const result = await newUser.save();
  return res.json({ createdUser: result });
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
  const { userId } = req.body;
  const users = await UserSchema.find();
  for (let user of users) {
    UserSchema.updateOne({ id: userId }, { $set: { isloggedIn: false } })
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

const addItemToCart = async (req, res, next) => {
  const { userId, productObj } = req.body;
  // const { name } = productObj;
  const users = await UserSchema.find();
  for (let user of users) {
    UserSchema.updateOne({ id: userId }, { $set: { username: 1 } })
      .then((doc) => {
        console.log(doc);
      })
      .catch((err) => console.log(err));
    return res.json({
      message: 'updated!',
    });
  }
};

exports.login = login;
exports.logout = logout;
exports.signup = signup;
exports.addItemToCart = addItemToCart;
