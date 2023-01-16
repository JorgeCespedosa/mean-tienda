const productoController = {};

const Producto = require('../models/Producto');

productoController.getProductos = async (req,res) =>{
   const productos= await Producto.find();
   res.json(productos);
};
productoController.createProducto = async (req,res) =>{
    const newProducto = new Producto(req.body);
    
    await newProducto.save();
    res.send({message: 'Producto creado'});
};
productoController.getProducto = async (req,res) =>{
     const unProducto = await Producto.findOne(req.params.id);
     res.send(unProducto);
};
productoController.editProducto = async (req,res) =>{
   await Producto.findByIdAndUpdate(req.params.id,req.body);
   res.json({status: 'Producto actualizado'});
};
productoController.deleteProducto = async (req,res) =>{
   await Producto.findByIdAndDelete(req.params.id);
   res.json({status: 'Producto eliminado'});

};

module.exports = productoController;