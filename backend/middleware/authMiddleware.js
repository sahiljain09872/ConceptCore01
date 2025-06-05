import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const authMiddleware = async (req, res, next) => {
  // 1. Get token from header
  const authHeader = req.header('Authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  const token = authHeader.replace('Bearer ', '');
  // console.log('Received token:', token); // For debugging, remove in production

  try {
    // 2. Verify token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    // console.log('Decoded token:', decoded); // For debugging, remove in production

    // CRITICAL FIX: Use decoded.id (which is user._id) to find the user
    // Also, use findById or findOne to get a single user object, not an array.
    // And explicitly select to exclude the password.
    const user = await User.findById(decoded.id).select('-password');

    // 3. Check if user exists
    if (!user) {
      console.log('User not found for ID:', decoded.id);
      return res.status(404).json({ msg: 'User not found' });
    }

    // 4. Attach user object to request
    req.user = user;
    // console.log('User authenticated:', req.user._id); // For debugging, remove in production
    next(); // Proceed to the next middleware/route handler
  } catch (err) {
    // console.error('Token verification error:', err); // For debugging, remove in production
    if (err.name === 'TokenExpiredError') {
      return res.status(401).json({ msg: 'Token expired' });
    }
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

export default authMiddleware;