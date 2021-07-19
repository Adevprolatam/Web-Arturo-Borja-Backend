var express = require('express');
var app = express();
const {validarJWT} = require('../middlewares/validar-jwt');
const bcrypt = require('bcrypt');
var jwt_decode = require('jwt-decode');
 
 
//
var Usuario = require('../models/usuario');
//
//Rutas
    app.put('/',  (req, res) => {
        
 
 
    var body = req.body;
    var token = req.query.token;
 
 
 
    var decoded = jwt_decode(token);
    var email = decoded.to;
 
    var usuario = new Usuario({
        password: bcrypt.hashSync(body.password, 10)
    });
 
 
    Usuario.findOne({ email }, (err, usuarioDB) => {
 
 
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error al buscar usuario',
                errors: err
            });
        }
 
        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Credenciales Incorrectas - email',
                errors: err
 
            });
        }
        usuarioDB.password = usuario.password;
        usuarioDB.save((err, usuarioGuardado) => {
 
 
            if (err) {
                return res.status(500).json({
                    ok: false,
                    mensaje: 'Error al actualizar usuario',
                    errors: err
                });
            }
 
            usuarioGuardado.password = ':)';
 
            res.status(200).json({
                ok: true,
                usuario: usuarioGuardado
            });
        })
 
    });
 
})
 
module.exports = app;