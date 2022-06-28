const Usuario = require('../models/usuarios.models');

const idExiste = async ( req, res, next ) => {

    const { id } = req.params;

    // Verificar si el id existe
    const existeId = await Usuario.findOne({ id });

    if ( !existeId ) {
        return res.status(400).json({
            msg: `${id} no existe en la BD`
        });
    }

    next();
}




module.exports = [
    idExiste
]