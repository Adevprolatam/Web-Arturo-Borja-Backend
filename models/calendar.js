const { Schema, model } = require('mongoose');

const CalendarShema = Schema({
    title: {
    type: String,
    },
    
    description: {
        type: String,
    },
    year: {
        type:String,
    },
    month:{
        type:String,
    },
    day:{
        type:String,
    } 
    
});


CalendarShema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})



module.exports = model( 'Calendar', CalendarShema );










Model: {
   
  }