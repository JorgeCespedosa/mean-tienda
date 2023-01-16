const {Router} = require('express');
const usuarioController = require('../controllers/usuarios.controller');

const router = Router();


router.post('/', usuarioController.createUsuario);
router.get('/:id', usuarioController.getUsuario);


module.exports = router;