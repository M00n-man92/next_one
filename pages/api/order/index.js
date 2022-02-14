import dbConnect from '../../../util/mongo'
import Order from '../../../models/ordermodel'
export default async function handler(req, res) {
    // const {model}=req
    // console.log("bearerer")
   const fucknickey=await dbConnect()
    // console.log(req)
    const { method } = req;
    // console.log(method, url)
    if (method === "POST") {
        // console.log("heoolwor;d")
        // console.log(id)
        try {
            console.log(req.body)
            const newprodut = await Order.create(req.body)
            console.log(req.body)
            if (newprodut) {
                res.status(201).json({ msg: "creation is successful", success: true, data: newprodut })
            }
            else if (!newprodut) {
                res.stauts(300).json({ msg: "hey maybe you fed up" })
            }
        }
        catch (e) {
            res.status(500).json({ msg: "error is prominent on" + e })
        }
    }
    else if (method === "GET") {
        try {
            // console.log("woemn who is solid")
            const result = await Order.find()
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
}