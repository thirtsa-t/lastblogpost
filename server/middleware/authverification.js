import  {datafromtoken} from "../helpers/token.js";
import usercontroller from "../controller/Authcontroller.js";
import UserData from "../model/UserModel.js"; 

 export const verifyAuth=(req,res,next)=>{
    const token=req.header("x-auth-token");
    if(!token ){
        return res.status(404).json({
          status:404,
            message:"no token provided",
        })
    }
    try{
    const user =datafromtoken(token).payload;


 
    const isDataExist=UserData.findOne({email:user.email});
    if(!isDataExist){
    return res.status(404).json({
        status:404,
        message:"user not found",

        
    })
}
req.body.userid=user.id;
return next();   
} 
catch(e){
   return res.status(404).json({
       status:404,
       message: "token is not valid"
       })
}
}




