const { usuarioSchema } = require('../schemas/usuario.schema');
const express = require('express');
//const { body } = require('express-validator');
const { check } = require('express-validator');
const Usuario = require('../models/usuarios.models');
const Role = require('../models/roles.models');


const validarCampos = async ( req, res, next ) => {

    try{
        await usuarioSchema.validateAsync(req.body);
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
    validarCampos,
    emailExiste,
    esRoleValido
]
