const product = require("../models/product");
const Product = require("../models/product");

exports.createProducts = async (req, res) =>{
    try {
        let product;
        product = new Product(req.body);

        await product.save();
        res.send(product);
    } catch (error) {
        console.log(error);
        res.status(500).send('error');
    }
}

exports.getProducts = async (req, res)=>{
    try {
        const products = await Product.find();
        res.json(products);

    } catch (error) {
        console.log(error);
        res.status(500).send('error');
    }
}

exports.updateProducts = async (req, res ) => {

    try {
        const {name, category, price } = req.body;
        let product = await Product.findById(req.params.id);

        if(!product){
            res.status(404).json({message: 'cant find the product'})
        }

        product.name = name;
        product.category = category;
        product.price = price;

        product = await Product.findOneAndUpdate({_id: req.params.id},product, { new: true });
        res.json(product);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('error');       
    }
}

exports.getProduct = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);

        if(!product) {
            res.status(404).json({message: 'cant find the product'})
        }

        res.json(product);

    } catch (error) {
        console.log(error);
        res.status(500).send('error');
    }
}

exports.deleteProducts = async (req, res) => {
    try {
        let product = await Product.findById(req.params.id);

        if(!product) {
            res.status(404).json({message: 'cant find the product'})
        }
        await Product.findOneAndRemove({_id: req.params.id })
        res.json({mesasge: 'product deleted'});
        
    } catch (error) {
        console.log(error);
        res.status(500).send('error');       
    }
}