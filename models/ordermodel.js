import mongoose from "mongoose"
const schema = new mongoose.Schema({
    username: { type: String, required: true },
    adress: { type: String, required: true },
    phonenumber: { type: Number, required: true },
    price: { type: Number, required: true },
    // quantity:{type:Number,required:true},
    
    method: { type: Number, required: true },
    prdoucts: [{title:{type:String,maxlength:60,required:true},
       
        itemPrice:{type:Number,required:true},
        
        quantity:{type:Number},
        extraItems:[{name:{type:String},price:{type:Number}}]}],
    isPreparing: {
        type: Number,
        default: 1
    },
    isOnTheWay: {
        type: Number,
        default: 0
    },
    isDeliverd: {
        type: Number,
        default: -1
    },
    whichisit:{type:String,default:"Is Preparing"}

        
})
export default mongoose.models.order || mongoose.model("order", schema)