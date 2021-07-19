const { Schema, model } = require('mongoose');

const ItemSchema = Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    img: {
        type: String,
    },
    autor: {
        type: String,
    },
    date:{
        type: Date,
        default: Date.now()  
    }
    
});


ItemSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'Item', ItemSchema );
