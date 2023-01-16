const usuarioController = {};

const Usuario = require('../models/Usuario');

usuarioController.createUsuario = async(req,res) =>{
    const newUsuario = new Usuario(req.body);

    await newUsuario.save();
    res.send({message: 'Usuario creado correctamente'});

};

usuarioController.getUsuario = async(req,res) =>{
    const unUsuario = await Usuario.find(req.params.email,req.params.password);
    res.send(unUsuario);
};
module.exports = usuarioController;
