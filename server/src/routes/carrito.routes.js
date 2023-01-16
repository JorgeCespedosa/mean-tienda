const {Router} = require('express');
const carritoController = require('../controllers/carrito.controller');

const router = Router();

router.get('/', carritoController.getCarritos);
router.post('/', carritoController.createCarrito);
router.get('/:id', carritoController.getCarrito);

module.exports = router;