const { Schema, model } = require('mongoose');

const NewShema = Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()  
    },
    autor: {
        type: String,
    },
    img: {
        type: String,
    },
    
});


NewShema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'News', NewShema );
