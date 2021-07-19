const { Schema, model } = require('mongoose');

const DocenteShema = Schema({
    nombre: {
        type: String,
    },
    
    description: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()  
    },
    img: {
        type: String,
    },
    
});


DocenteShema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'News', DocenteShema );
