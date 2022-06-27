const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users/user');
const cartRoutes = require('./routes/cart/cart');
const app = express();
app.use(
  cors({
    origin: '*',
    methods: '*',
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 5500;

app.use('/api/auth', userRoutes);
app.use('/api/users', cartRoutes);
const url = `mongodb+srv://adhtcrah:akuorc1010@cluster0.fsvsblk.mongodb.net/users?retryWrites=true&w=majority

`;
mongoose
  .connect(url)
  .then(() => {
    console.log('connected to db');
  })
  .then(() =>
    app.listen(port, () => {
      console.log(`listen on port ${port}`);
    })
  )
  .catch((err) => {
    console.log(err + ' cannot connect to db !');
  });
