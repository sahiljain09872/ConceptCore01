import express from 'express';
import { register, login } from '../../../controllers/authController.js';
import authMiddleware from '../../../middleware/authMiddleware.js';

const router = express.Router();

// POST /api/auth/register
router.post('/register', register);

// POST /api/auth/login
router.post('/login', login);

router.get('/profile' , authMiddleware , (req , res) => {
    console.log('User profile accessed:', req.user);
    res.status(200).json({
        user: {
            id: req.user._id,
            name: req.user.name,
            email: req.user.email
        }
    });
  })

export default router;
