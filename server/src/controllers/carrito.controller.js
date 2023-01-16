const carritoController = {};

const Carrito = require('../models/Carrito');


carritoController.createCarrito = async(req,res) =>{
    const newCarrito = new Carrito(req.body);

    await newCarrito.save();
    res.send({message: 'Listado creado correctamente'});

};

carritoController.getCarrito = async(req,res) =>{
    const unCarrito = await Carrito.find(req._id);
    res.send(unCarrito);
};

carritoController.getCarritos = async (req,res) =>{
    const carritos= await Carrito.find();
    res.json(carritos);
 };


module.exports = carritoController;
