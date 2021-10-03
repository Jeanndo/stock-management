import express from 'express'
import {signin,signup,getUsers,deleteUser,forgotPassword,resetPassword} from '../Controllers/userController.js'

const router = express.Router()

router.post('/signup',signup);
router.post('/signin',signin);
router.get('/',getUsers)
router.delete('/:id',deleteUser);
router.patch('/forgot-password',forgotPassword)
router.patch('/reset-password',resetPassword)

export default router;