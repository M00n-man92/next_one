import mongoose from "mongoose"
// const mongoose=require("mongoose")
const schema=new mongoose.Schema({
    title:{type:String,maxlength:60,required:true},
    discription:{type:String,maxlength:250},
    price:{type:[Number],required:true},
    img:{type:String,required:true},
    options:[{name:{type:String},price:{type:Number}}]

},{timestamps:true})
export default mongoose.models.product || mongoose.model("product",schema)