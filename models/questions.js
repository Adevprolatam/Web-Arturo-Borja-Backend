const { Schema, model } = require('mongoose');

const QuestionSchema = Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    date:{
        type: Date,
        default: Date.now()  
    },
    img: {
        type: String,
    },
    enlace: {
        type: String,
    }
});


QuestionSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'Question', QuestionSchema );
