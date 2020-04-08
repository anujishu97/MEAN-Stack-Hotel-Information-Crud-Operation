const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define  Collection and schema for customer.

let Customer= new Schema({
    c_name:{
        type:String
    },
    c_emailid:{
        type:String
    },
    c_address:{
        type:String
    },
    occupation:{
        type:String
    },
    c_mobileno:{
        type:Number
    },
    numbers_of_adult:{
        type:Number
    },
    numbers_of_child:{
        type:Number
    },
    room_no:{
        type:String
    }
},{
    collection: 'customers'
});

module.exports=mongoose.model('Customer',Customer);