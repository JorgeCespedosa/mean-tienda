const {Schema, model} = require('mongoose')

const productoSchema = new Schema({
    foto: {type: String, required:true},
    nombre: {type: String, required:true},
    descripcion: {type: String, required:true},
    categoria: {type: String, required:true},
    precio: {type: Number, required:true},
    cantidad: {type: Number},
    stock: {type: Number},
    
},{
    timestamps:true,
    versionKey:false,

});

module.exports = model("Producto",productoSchema);