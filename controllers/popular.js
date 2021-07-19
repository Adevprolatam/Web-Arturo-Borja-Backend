const { response } = require('express');

const Section = require('../models/section');

const getSection = async(req, res = response) => {
    const desde = Number(req.query.desde) || 0;
    const [ sections, total ] = await Promise.all([
    Section
    .find({}, 'title description date autor img view')
    .skip( 0 )
    .limit( desde )
    .sort({view :-1}),                                                     
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



module.exports = {
    getSection,
    getSectionById
}