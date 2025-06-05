import express from 'express';
import { getCurrentUser, updateCurrentUser, deleteCurrentUser } from '../../../controllers/userController.js';
import auth from '../../../middleware/authMiddleware.js';

const router = express.Router();

// GET /api/users/me
router.get('/me', auth, getCurrentUser);

// PUT /api/users/me
router.put('/me', auth, updateCurrentUser);

// DELETE /api/users/me
router.delete('/me', auth, deleteCurrentUser);

export default router;
