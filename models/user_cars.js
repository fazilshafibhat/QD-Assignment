const mongoose= require('mongoose');

const carSchema= new mongoose.Schema({
    regdnum:{
        type: String,
        required: true,
    },
   
    power:{
        type: String,
        required: true,
    },
    
    torque:{
        type: String,
        required: true,
    },
    
    range:{
        type: String,
        required: true,
    },

    topspeed:{
        type: String,
        required: true,
    },

    carname:{
        type: String,
        required: true,
    }


},{
    timestamps:true
});

const Car= mongoose.model('Car', carSchema);
module.exports=Car;