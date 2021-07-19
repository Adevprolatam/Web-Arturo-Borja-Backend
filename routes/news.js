/*
    Medicos
    ruta: '/api/item'
*/
const { Router } = require('express');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getNews,
    crearNews,
    actualizarNews,
    borrarNews,
    getNewsById
} = require('../controllers/news')


const router = Router();

router.get( '/',  getNews);

router.post( '/',  crearNews );

router.put( '/:id', validarJWT , actualizarNews);

router.delete( '/:id',validarJWT, borrarNews);

router.get( '/:id', getNewsById);



module.exports = router;



