const { response } = require('express');

const Question = require('../models/questions');

const getQuestion= async(req, res = response) => {

    const desde = Number(req.query.desde) || 0;
    const page = Number(req.query.page) || 0;
    
    const [ question, total ] = await Promise.all([
    Question
    .find({}, 'title description date img enlace')
    .skip( page )
    .limit( desde ).sort({$natural:-1}),
    Question.countDocuments()
    ]);
    res.json({
        ok: true,
        question,
        total
    })
}
const getQuestionById = async(req, res = response) => {

    const id = req.params.id;

    try {
        const question = await Question.findById(id)
        res.json({
            ok: true,
            question
        })
        
    } catch (error) {
        console.log(error);
        res.json({
            ok: true,
            msg: 'Hable con el administrador'
        })
    }
}

const crearQuestion = async (req, res = response) => {

    const uid = req.uid;
    const question = new Question({
        usuario: uid,
        ...req.body
    });


    try {

        const questionDB = await question.save();

        
        res.json({
            ok: true,
            question: questionDB
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

const actualizarQuestion = async(req, res = response) => {
    
    const id  = req.params.id;
    const uid = req.uid;

    try {
        
        const question = await Question.findById( id );

        if ( !question ) {
            return res.status(404).json({
                ok: true,
                msg: 'Item no encontrado por id',
            });
        }

        const cambiosQuestion = {
            ...req.body,
            usuario: uid
        }

        const QuestionActualizado = await Question.findByIdAndUpdate( id, cambiosQuestion, { new: true } );


        res.json({
            ok: true,
            question: QuestionActualizado
        })

    } catch (error) {

        console.log(error);

        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}

const borrarQuestion = async (req, res = response) => {
   
    const id  = req.params.id;

    try {
        
        const question = await Question.findById( id );

        if ( !question ) {
            return res.status(404).json({
                ok: true,
                msg: 'Seccion no encontrado por id',
            });
        }

        await Question.findByIdAndDelete( id );

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
    getQuestion,
    crearQuestion,
    actualizarQuestion,
    borrarQuestion,
    getQuestionById
}