
const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosPost, usuariosDelete, usuariosPatch } = require('../controllers/usuarios.controllers');
const  registrarusuario  = require('../middlewares/registrar.middlewares');
const  eliminarusuario  = require('../middlewares/eliminar.middlewares');
const  modificarusuario = require('../middlewares/modificar.middlewares');

const router = Router();

router.get('/', usuariosGet);
router.put('/:id', modificarusuario, usuariosPut);
router.post('/', registrarusuario, usuariosPost);
router.delete('/:id',eliminarusuario, usuariosDelete);

module.exports = router;