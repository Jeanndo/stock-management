import express from 'express'
import {getAllProducts,createProduct,updateProduct,deleteProduct,approveProduct}from '../Controllers/productController.js'
import auth from '../middlewares/auth.js'

const router = express.Router();

router.get('/',auth,getAllProducts);
router.post('/',auth,createProduct);
router.patch('/:id',auth,updateProduct);
router.delete('/:id',auth,deleteProduct);
router.post('/:id/emails',auth,approveProduct)


export default router;