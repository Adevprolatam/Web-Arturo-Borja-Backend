const { response } = require('express');

const Item = require('../models/items');



const getItems = async(req, res = response) => {
    const desde = Number(req.query.desde) || 0;
    const page = Number(req.query.page) || 0;

    const [ items , total ] = await Promise.all([
    Item
    .find({}, 'title description img autor date')
    .skip( page )
    .limit( desde ).sort({$natural:-1}),
    Item.countDocuments()
    ]);


    res.json({
        ok: true,
        items,
        total
    })

}

const getItemsById = async(req, res = response) => {

    const id = req.params.id;

    try {
        const items = await Item.findById(id)
                                         .populate('Item','title description img autor date')
    
        res.json({
            ok: true,
            items
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            ok: true,
            msg: 'Hable con el administrador'
        })
    }
}

const crearItems = async (req, res = response) => {

    const uid = req.uid;
    const items = new Item({
        usuario: uid,
        ...req.body
    });


    try {

        const itemsDB = await items.save();

        
        res.json({
            ok: true,
            items: itemsDB
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }


}

const actualizarItem = async(req, res = response) => {
    
    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const item = await Item.findById( id );

        if ( !item ) {
            return res.status(404).json({
                ok: true,
                msg: 'Item no encontrado por id',
            });
        }

        const cambiosItem = {
            ...req.body,
            usuario: uid
        }

        const itemActualizado = await Item.findByIdAndUpdate( id, cambiosItem, { new: true } );


        res.json({
            ok: true,
            item: itemActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}

const borrarItem = async (req, res = response) => {
   
    const id  = req.params.id;

    try {
        
        const item = await Item.findById( id );

        if ( !item ) {
            return res.status(404).json({
                ok: true,
                msg: 'Item no encontrado por id',
            });
        }

        await Item.findByIdAndDelete( id );

        res.json({
            ok: true,
            msg: 'Item borrado'
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
    getItems,
    crearItems,
    actualizarItem,
    borrarItem,
    getItemsById
}