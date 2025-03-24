import express from 'express';
import { authenticateUser } from '../middleware/authhMiddlleware.js';
import { authorizeRoles } from '../middleware/authhMiddlleware.js';
import { deleteUser, getAllUsers, getUserProfile, updateUserProfile } from '../controllers/UserController.js';

export const router = express.Router();

// user profile routes
router.get('/profile', authenticateUser, getUserProfile)
router.put('/profile/edit',authenticateUser,updateUserProfile)




//admin roles
router.get("/admin/users", authenticateUser,authorizeRoles("admin"),getAllUsers);
router.delete("/admin/user/:id",authenticateUser,authorizeRoles("admin"),deleteUser)


