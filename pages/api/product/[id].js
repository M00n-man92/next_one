import dbConnect from '../../../util/mongo'
import Product from '../../../models/productmodel'
export default async function handler(req, res) {
    // const {model}=req
    console.log("bearerer")
   const fucknickey=await dbConnect()
    // console.log(req)
    const { method, query:{id}} = req;
    console.log(method, id)
    
    if (method === "GET") {
        try {
            console.log("woemn who is solid")
            const result = await Product.findOne({_id:id})
            if (result) {
                console.log("herer is the cure the antidote")
                res.status(201).json({msg:"data recoverd successfully",success:true,data:result})
            }
            else if(!result){
                res.status(300).json({msg:"no data to display",success:false})
            }
        }
        catch (e) {
            res.status(500).json({ mag: "data recoverd unsuccessflully because " + e })
        }

    }
    else if (method === "PUT") {
        try {
            console.log("woemn who is solid")
            const result = await Product.findOneAndUpdate({_id:id},{$set:req.body}, {new: true} )
            if (result) {
                console.log("herer is the cure the antidote")
                res.status(201).json({msg:"data recoverd successfully",success:true,data:result})
            }
            else if(!result){
                res.status(300).json({msg:"no data to display",success:false})
            }
        }
        catch (e) {
            res.status(500).json({ mag: "data recoverd unsuccessflully because " + e })
        }

    }
    else if (method === "DELETE") {
        try {
            console.log("woemn who is solid")
            const result = await Product.findOneAndDelete({_id:id})
           
                res.status(201).json({msg:"data recoverd successfully",success:true,data:result})
            
           
        }
        catch (e) {
            res.status(500).json({ mag: "data recoverd unsuccessflully because " + e })
        }

    }
}
