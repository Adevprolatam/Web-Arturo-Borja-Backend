const { response } = require('express');

const News = require('../models/news');

const getNews = async(req, res = response) => {

    const desde = Number(req.query.desde) || 0;
    const page = Number(req.query.page) || 0;

    const [ news, total ] = await Promise.all([
    News
    .find({}, 'title description img autor date')
    .skip( page )
    .limit( desde ).sort({$natural:-1}),
    News.countDocuments()
    ]);
    res.json({
        ok: true,
        news,
        total
    })
}



const getNewsById = async(req, res = response) => {

    const id = req.params.id;

    try {
        const news = await News.findById(id)
                                         .populate('News','title description img autor date')
    
        res.json({
            ok: true,
            news
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            ok: true,
            msg: 'Hable con el administrador'
        })
    }
}

const crearNews = async (req, res = response) => {

    const uid = req.uid;
    const news = new News({
        usuario: uid,
        ...req.body
    });


    try {

        const newsDB = await news.save();

        
        res.json({
            ok: true,
            news: newsDB
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


}

const actualizarNews = async(req, res = response) => {
    
    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const news = await News.findById( id );

        if ( !news ) {
            return res.status(404).json({
                ok: true,
                msg: 'News no encontrado por id',
            });
        }

        const cambiosNew = {
            ...req.body,
            usuario: uid
        }

        const NewActualizado = await News.findByIdAndUpdate( id, cambiosNew, { new: true } );


        res.json({
            ok: true,
            News: NewActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}

const borrarNews = async (req, res = response) => {
   
    const id  = req.params.id;

    try {
        
        const news = await News.findById( id );

        if ( !news ) {
            return res.status(404).json({
                ok: true,
                msg: 'Noticia no encontrado por id',
            });
        }

        await News.findByIdAndDelete( id );

        res.json({
            ok: true,
            msg: 'Noticia borrada'
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
    getNews,
    crearNews,
    actualizarNews,
    borrarNews,
    getNewsById
}