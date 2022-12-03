const express=require('express');

const router=express.Router();

const adminControllers=require('../controllers/admin')

router.get('/',adminControllers.showallproducts);

router.get('/addproduct',adminControllers.addProduct)

module.exports=router;