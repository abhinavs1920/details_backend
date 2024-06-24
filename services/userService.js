// services/userService.js
const User = require('../models/user');

const registerUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
};

const loginUser = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) throw new Error('User not found');
    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw new Error('Invalid password');
    return user;
};

module.exports = { registerUser, loginUser };
