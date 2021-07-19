/*
    Ruta: /api/usuarios
*/
const { Router } = require('express');


const { getSchool, crearSchool , getShoolById , putSchool} = require('../controllers/school');
const { 
    validarJWT, 
 } = require('../middlewares/validar-jwt');


const router = Router();

router.get( '/', getSchool);
router.post( '/',validarJWT, crearSchool);
router.get( '/:id',getShoolById);
router.put( '/:id',validarJWT,putSchool);


module.exports = router;