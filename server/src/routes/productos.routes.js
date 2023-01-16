const {Router} = require('express');
const productoController = require('../controllers/productos.controller');

const router = Router();

router.get('/', productoController.getProductos);
router.post('/', productoController.createProducto);
router.get('/:id', productoController.getProducto);
router.put('/:id', productoController.editProducto);
router.delete('/:id', productoController.deleteProducto);

module.exports = router;