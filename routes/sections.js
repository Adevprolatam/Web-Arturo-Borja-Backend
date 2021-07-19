/*
    Medicos
    ruta: '/api/section'
*/
const { Router } = require('express');

const { validarJWT } = require('../middlewares/validar-jwt');

const {
    getSection,
    crearSection,
    actualizarSection,
    borrarSection,
    getSectionById
} = require('../controllers/section')


const router = Router();

router.get( '/', getSection );

router.post( '/',  crearSection );

router.put( '/:id', validarJWT ,actualizarSection);

router.delete( '/:id',validarJWT, borrarSection);

router.get( '/:id', getSectionById);



module.exports = router;



