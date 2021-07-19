/*
    Medicos
    ruta: '/api/section'
*/
const { Router } = require('express');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getQuestion,
    crearQuestion,
    actualizarQuestion,
    borrarQuestion,
    getQuestionById,
}
= require('../controllers/questions')


const router = Router();

router.get( '/', getQuestion );

router.post( '/',  crearQuestion );

router.put( '/:id', validarJWT , actualizarQuestion);

router.delete( '/:id',validarJWT, borrarQuestion);

router.get( '/:id', getQuestionById);



module.exports = router;



