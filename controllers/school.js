
const { response } = require('express');
const School = require('../models/school');

const getSchool = async(req, res = response) => {
    const desde = Number(req.query.desde) || 0;
    const school = await School.find()
    res.json({
        ok: true,
        school
    })
}
const getShoolById = async(req, res = response) => {

    const id = req.params.id;

    try {
        const school = await School.findById(id)
        res.json({
            ok: true,
            school
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            ok: true,
            msg: 'Hable con el administrador'
        })
    }
}


const crearSchool = async (req, res = response) => {

    const uid = req.uid;
    const school = new School({
        usuario: uid,
        ...req.body
    });


    try {

        const schoolDB = await school.save();

        
        res.json({
            ok: true,
            section: schoolDB
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador '
        })
    }


}

const putSchool = async(req, res = response) => {
    
    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const school = await School.findById( id );

        if ( !school ) {
            return res.status(404).json({
                ok: true,
                msg: 'News no encontrado por id',
            });
        }

        const cambiosSchool = {
            ...req.body,
            usuario: uid
        }

        const SchoolActualizado = await School.findByIdAndUpdate( id, cambiosSchool, { new: true } );


        res.json({
            ok: true,
            School: SchoolActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
}
}
module.exports = {
    getSchool,
    crearSchool,
    getShoolById,
    putSchool,
}