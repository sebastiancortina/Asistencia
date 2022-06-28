const joi = require('joi');

const usuarioSchema = joi.object({
    nombre: joi.string().required(),
    correo: joi.string().email().required(),
    password: joi.string().required().min(6),
    img: joi.string(),
    rol: joi.string().required(),
    estado: joi.boolean(),
});


const usuarioSchemaM = joi.object({
    nombre: joi.string().required(),
    correo: joi.string().email().required(),
    password: joi.string(),
    img: joi.string(),
    rol: joi.string(),
    estado: joi.boolean(),
});


module.exports = { 
    usuarioSchema,
    usuarioSchemaM
}