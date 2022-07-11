const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  isloggedIn: { type: Boolean },
  manager:{type:Boolean}
});
module.exports = mongoose.model('Users', UserSchema);
