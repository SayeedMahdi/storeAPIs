const mongoose = require("mongoose");
const modelSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"you must enter a name"]
    },
    price:{
        type: Number,
        required:[true,"enter a price"]
    },
    featured:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
    enum:{
        values:["marcos","liddy","ikea","caressa",],
        message:"{VALUE} is not supported"
    }
},
    reting:{
        type:Number,
        default:4.5
    }
})
module.exports =mongoose.model("products",modelSchema);