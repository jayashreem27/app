const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add a name"],
        trim:true,
    },
    sku:{
        type:String,
        required:true,
        trim:true,
        default:'SKU',
    },
    category:{
        type:String,
        required:[true,"Please add a category"],
        trim:true,
    },
    brand:{
        type:String,
        required:[true,"Please add a brand"],
        trim:true,
    },
    color:{
        type:String,
        required:[true,"Please add a color"],
        trim:true,
        default:"As seen ",
    },
    quantity:{
        type:Number,
        required:[true,"Please add a quantity"],
        trim:true,
    },
    sold:{
        type:Number,
        default:0,
        trim:true,
    },
    regularPrice:{
        type:Number,
        //required:[true,"Please add a name"],
        trim:true,
    },
    price:{
        type:Number,
        required:[true,"Please add a price"],
        trim:true,
    },
    description:{
        type:String,
        required:[true,"Please add a description"],
        trim:true,
    },
    image:{
        type:[String],
    },
    ratings:{
        type:[Object],
    },
},
{
    timestamps:true,
})

const Product = mongoose.model("Product", productSchema);
module.exports = Product;