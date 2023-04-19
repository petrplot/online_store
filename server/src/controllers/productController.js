const { Product } = require("../models/Product")

module.exports.getByIdProduct = async (req, res)=>{
    try {

        const {id} = req.params

        if (id) {

           const product = await Product.findOne({where:{id}}) 

           if(product){

               return res.json(product)

           } else {

            return res.json('Запись не существует')

           }

        } else {

            return res.json('Неверный параметр')

        }
    
    } catch (error) {
        console.log(error);
    }
    
}

module.exports.getAllProducts = async (req, res)=>{
    try {

        const products = []
        products = await Product.findAll()
        return res.json(products)
        
    } catch (error) {
        console.log(error);
    }
}

module.exports.createProduct = async (req, res)=>{
    try {

        const {
            nameProduct, 
            linkToImage, 
            productDescription, 
            priceProduct
        } = req.body

        const product = await Product.create({
            nameProduct, 
            linkToImage, 
            productDescription, 
            priceProduct
        }) 

        return res.json(product)
        
    } catch (error) {
        console.log(error);
    }
}

module.exports.removeProduct = async (req, res)=>{
    try {

        const {id} = req.params

        const product = await Product.destroy({where:{id}})

        return res.status().json(product)
        
    } catch (error) {
        console.log(error);
    }
}

module.exports.updateProduct = async(req, res)=>{
    try {

        const {
            nameProduct, 
            linkToImage, 
            productDescription, 
            priceProduct
        } = req.body

        const { id } = req.params;

        await Product.update({ 
            nameProduct, 
            linkToImage, 
            productDescription, 
            priceProduct
        }, { 
            where: { id } 
        })

        const product = await Product.findOne({ where: { id } })

        return res.json(product)

    } catch (error) {
        console.log(error);
    }
}