const { Schema, model } = require('mongoose');

const SchoolSchema = Schema({

    nombre: {
        type: String,
    },
    email: {
        type: String,
    },
    education: {
        type: String,
    },
    phone: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()
    },
    codeP: {
        type: String,
    },
    country: {
        type: String,
    },
    street: {
        type: String,
    },
    
    
    
    
});


SchoolSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})



module.exports = model( 'School', SchoolSchema );
