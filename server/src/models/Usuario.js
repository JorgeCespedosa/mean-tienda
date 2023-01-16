const {Schema, model} = require('mongoose')

const usuarioSchema = new Schema({
    email: {type: String, required:true},
    password: {type: String, required:true},
    
},{
    timestamps:true,
    versionKey:false,

});

module.exports = model("Usuario",usuarioSchema);