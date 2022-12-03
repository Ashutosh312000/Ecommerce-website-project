
const Product=require('../models/product');

exports.showallproducts=(req,res,next)=>{
    Product.findAll((products)=>{
        res.json(products);
    });
    
exports.addProduct=(req,res,next)=>{
    
}


}