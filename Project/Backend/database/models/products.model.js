const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    productName:{
        type:String,
        required:true,
        minLength:2,
        maxLength:120,
        trim:true
       },
    description:{
        type:String,
        required:true,
        minLength:7,
        maxLength:130,
        trim:true
    },

    image:{
        type:String,
        trim:true
    },

    category:{
        type:String,
        trim:true,
        enum:["family", "cook","economic"],
        required:true

    },
    dOfArrive:{
        type:Date,
        max:new Date,
        min:"2015-1-1",
        required:true
    },
    price:{
        type:Number,
        required:true
    }


},

{
    timestamps : true
}
)




const productModel = new mongoose.model("product", productSchema)
module.exports = productModel
