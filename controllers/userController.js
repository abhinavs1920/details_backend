// controllers/userController.js
const userService = require('../services/userService');
const jwt = require('../utils/jwt');

const registerUser = async (req, res) => {
    try {
        const newUser = await userService.registerUser(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userService.loginUser(username, password);
        const token = jwt.signToken({ userId: user._id });
        res.json({ token });
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};

module.exports = { registerUser, loginUser };
