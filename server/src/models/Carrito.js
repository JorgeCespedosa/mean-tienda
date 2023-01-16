const {Schema, model} = require('mongoose')

const carritoSchema = new Schema({
    idUsuario: {type: String, required:true},
    nombreProducto: {type: [], required:true},
    cantidad: {type: [], required:true},

    
},{
    timestamps:true,
    versionKey:false,

});

module.exports = model("Carrito",carritoSchema);