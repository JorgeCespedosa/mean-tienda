const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app=express();

app.set('port',process.env.PORT || 4000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api",require('./routes/productos.routes'));
app.use("/usuario",require('./routes/usuarios.routes'));
app.use("/carrito",require('./routes/carrito.routes'));

module.exports = app;