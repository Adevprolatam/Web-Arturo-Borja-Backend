/*
    Medicos
    ruta: '/api/item'
*/
const { Router } = require('express');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getItems,
    crearItems,
    actualizarItem,
    borrarItem,
    getItemsById
} = require('../controllers/item')


const router = Router();

router.get( '/', getItems );

router.post( '/', validarJWT , crearItems );

router.put( '/:id', validarJWT ,actualizarItem);

router.delete( '/:id',validarJWT, borrarItem);

router.get( '/:id', getItemsById);



module.exports = router;



