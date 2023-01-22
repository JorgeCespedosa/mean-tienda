const {Schema, model} = require('mongoose')

const carritoSchema = new Schema({
    idUsuario: {type: String, required:true},
    producto: {type: [], required:true},
    total: {type: Number, required:true},
    

    
},{
    timestamps:true,
    versionKey:false,

});

module.exports = model("Carrito",carritoSchema);