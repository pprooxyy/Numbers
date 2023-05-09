// userService.js

const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

class UserService {
  static async registerUser(name, email, password) {
    const user = await User.findOne({ where: { email } });
    if (user) {
      throw new Error('User already exists');
    }
    const hashPass = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashPass,
    });
    return newUser;
  }

  static async loginUser(email, password) {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error('User not found');
    }
    const passCheck = await bcrypt.compare(password, user.password);
    if (!passCheck) {
      throw new Error('Invalid password');
    }
    return user;
  }
}

module.exports = UserService;
