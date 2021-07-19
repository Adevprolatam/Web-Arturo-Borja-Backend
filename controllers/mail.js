var express = require('express');
var app = express();
'use strict';
const nodemailer = require('nodemailer');
//token
var jwt = require('jsonwebtoken');
 
 
//Rutas
app.post('/cambiarPassword', (req, res) => {
 
 
 
    let body = req.body;
    let to = body.to;
 
    //Generar Token
    var token = jwt.sign({ to }, process.env.SEED, { expiresIn: 1800 }); //30 min
 
 
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
 
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'email@gmail.com', // generated ethereal user
            pass: 'pass' // generated ethereal password
        }
    });
 
    // setup email data with unicode symbols
    let mailOptions = {
        from: 'email@gmail.com', // sender address
        to: `${body.to}`, // list of receivers
        subject: 'Hello ✔', // Subject line
        text: '', // plain text body:
        html: '<b><br>Para restablecer tu contraseña, <br><br> ingresa el siguiente código: <br><div class="danger">' + token + '</div> <br><br> y tu nueva contraseña en: http://localhost:4200/#/resetpassword <br><br>  Gracias!  <br>  </b>' // html body
    };
 
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'Error correo no pudo ser enviado',
                errors: err
            });
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
 
        res.status(200).json({
            ok: true,
            message: 'El correo fue enviado correctamente',
            token: token
        });
 
         
    });
 
})
 
module.exports = app;