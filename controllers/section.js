const { response } = require('express');

const Section = require('../models/section');

const getSection = async(req, res = response) => {
    const desde = Number(req.query.desde) || 0;
    const page = Number(req.query.page) || 0;

    const [ sections, total ] = await Promise.all([
    Section
    .find({}, 'title description date autor img')
    .skip( page )
    .limit( desde )
    .sort({$natural:-1}),

    Section.countDocuments()
]);

    res.json({
        ok: true,
        sections,
        total
    })
}

const getSectionById = async(req, res = response) => {

    
    const id = req.params.id;
    
    try {
        const sections = await Section.findById(id)

        sections.view = sections.view + 1;
        sections.save()
        res.json({
            ok: true,
            sections
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            ok: true,
            msg: 'Hable con el administrador'
        })
    }
}

const crearSection = async (req, res = response) => {

    const uid = req.uid;
    const sections = new Section({
        usuario: uid,
        ...req.body
    });


    try {

        const sectionsDB = await sections.save();

        
        res.json({
            ok: true,
            section: sectionsDB
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador ',
            error: '404 Not found error'
        })
    }


}

const actualizarSection = async(req, res = response) => {
    
    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const sections = await Section.findById( id );

        if ( !sections ) {
            return res.status(404).json({
                ok: true,
                msg: 'Item no encontrado por id',
            });
        }

        const cambiosSection = {
            ...req.body,
            usuario: uid
        }

        const SectionActualizado = await Section.findByIdAndUpdate( id, cambiosSection, { new: true } );


        res.json({
            ok: true,
            section: SectionActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}

const borrarSection = async (req, res = response) => {
   
    const id  = req.params.id;

    try {
        
        const sections = await Section.findById( id );

        if ( !sections ) {
            return res.status(404).json({
                ok: true,
                msg: 'Seccion no encontrado por id',
            });
        }

        await Section.findByIdAndDelete( id );

        res.json({
            ok: true,
            msg: 'Seccion borrado'
        }); 

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}



module.exports = {
    getSection,
    crearSection,
    actualizarSection,
    borrarSection,
    getSectionById
}