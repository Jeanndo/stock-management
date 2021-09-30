import express from 'express'
import {signin,signup,getUsers,deleteUser} from '../Controllers/userController.js'

const router = express.Router()

router.post('/signup',signup);
router.post('/signin',signin);
router.get('/',getUsers)
router.delete('/:id',deleteUser);

export default router;