
const { Router } = require('express');


const {
    getSection,
    getSectionById
}
= require('../controllers/popular')


const router = Router();

router.get( '/', getSection );
router.get( '/:id', getSectionById );



module.exports = router;



