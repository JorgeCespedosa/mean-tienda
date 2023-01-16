const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tienda')
    .then((db) => console.log('Base de datos conectada'))
    .catch((err) => console.error(err));
