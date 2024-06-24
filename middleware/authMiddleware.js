const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const auth = (req, res, next) => {
    // Check if Authorization header is present
    const authHeader = req.header('Authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized: Missing or invalid token' });
    }

    // Extract the token part from the Authorization header
    const token = authHeader.split(' ')[1];

    try {
        // Verify and decode the token
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Attach decoded user information to request object
        next(); // Pass control to the next middleware
    } catch (err) {
        console.error('JWT Verify Error:', err);
        res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }
};

module.exports = auth;
