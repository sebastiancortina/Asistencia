const Usuario = require('../models/usuarios.models');
const { usuarioSchemaM } = require('../schemas/usuario.schema');

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

const validarCampos = async ( req, res, next ) => {

    try{
        await usuarioSchemaM.validateAsync(req.body);
        next();
    } catch(err){
        return res.status(400).json(err);
    }
}

const emailExiste = async ( req, res, next ) => {

    const { correo } = req.body;

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });

    if ( existeEmail ) {
        return res.status(400).json({
            msg: `el ${correo} ya existe en la BD`
        });
    }

    next();
}

const esRoleValido = async(req, res, next) => {

    const { rol } = req.body;

    const existeRol = await Role.findOne({ rol });

    if ( !existeRol ) {
        return res.status(400).json({
            msg: `El rol ${ rol } no está registrado en la BD`
        });
    }

    next();
}



module.exports = [
    idExiste,
    validarCampos,
    emailExiste,
    esRoleValido

]