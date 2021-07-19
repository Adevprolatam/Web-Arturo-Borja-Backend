const { Schema, model } = require('mongoose');

const SectionSchema = Schema({
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
    autor:{
        type: String,
    },
    view:{
        type: Number,
        default: 0,
    },
    img: {
        type: String,
    }
});


SectionSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'Section', SectionSchema );
