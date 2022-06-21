const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/users/user');
const app = express();
app.use(
  cors({
    origin: '*',
    methods: '*',
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/auth', userRoutes);
const url = `mongodb+srv://adhtcrah:akuorc1010@cluster0.fsvsblk.mongodb.net/users?retryWrites=true&w=majority`;
mongoose
  .connect(url)
  .then(() => {
    console.log('connected to db');
  })
  .then(() =>
    app.listen(5500, () => {
      console.log('listen on port 5500');
    })
  )
  .catch((err) => {
    console.log(err + 'cannot connect to db !');
  });
