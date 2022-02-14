import cookie from 'cookie'
const handelr=(req,res)=>{
    if(req.method=="POST"){
        const {username,password}=req.body
    res.setHeaders("Set-Cookie",cookie.serialize("token",process.env.TOKEN,{maxAge:60*60,sameSite:"strickt",path:"/"}))
    res.status(201).json({success:true})
    }
}