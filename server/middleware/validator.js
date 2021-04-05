import { check, validationResult } from "express-validator"
import postData from '../model/blogpostmodel.js';
class Validator {
    static verifyAccess=async(req,res,next)=>{
        const useridfromtoken=req.body.userid;
       const blogId =req.params.id;
        const blog = await postData.findById(blogId);
        if(!blog){
            return res.status(404).json({
                status:404,
                message:"blog is not exist"
            })
        }
        else if(useridfromtoken ==blog.userid._Id){
            return next();
        }
        return res.status(401).json({
            status:401,
            message:"you are not authorised"
        }) 
    }

    static newAccountRule() {
        return [check("email", "email is not valid").isEmail(),
        check("firstName" , "firstName  must not cantain special character ").isAlpha(),
        check("password","password  must have 8 character ").isStrongPassword(),
        check("gender" ,"gender should be male or female ").isIn(["male","female"]),
        //check("rule", "rule must be admin or user").isIn(["admin,user"]),
        check("department","department must not contain special character").isAlpha(),
        check("address","address must not contain special character").isAlpha()
    ]
    };
    static newRules() {
        return [check("email","email invalid").isEmail(),
        check("password","password must be strong").isStrongPassword(),
    ]
    };
    static blogRules(){
        return [check("title","title.....").isLength({max:50})]
    }

    static validateInput = (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            const errorMessage = errors.errors.map(e => e.msg);
            return res.status(400).json({
                status: 400,
                error: errorMessage
            })
        }
        return next();

    }


}
export default Validator;