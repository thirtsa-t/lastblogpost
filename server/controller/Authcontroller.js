import { generateAuthToken } from "../helpers/token.js";
import UserData from '../model/UserModel.js';
import bcrypt from "bcrypt";


class Usercontroller {




    static signup = async(req, res) => {

        
        let {
            email,
            firstName,
            lastName,
            password,
            gender,
            rule,
            department,
            address

        } = req.body;
        password = bcrypt.hashSync(password, 10);

        const isEmailExist =await UserData.findOne({
            email:email,
        })
        req.body.password=password; 
        if (isEmailExist) {
            return res.status(409).json({ status: 409, error: "email is duplicated" });

        }
        const data = await UserData.create(req.body)
        

    

        
        if (!data) {
            return res.status(417).json({
                status: 417,
                message: "signup failed",
            })
            // else{
            //let{data,...datawithoutPassWord}=data

        }
        return res.status(201).json({
            status: 201,
            message: "account created succefully",
            data

        })
    }
    static signin =async (req, res) => {
        let {
            email,
            password
        } = req.body;

        const isUserExist = await UserData.findOne({
            email:email,
        });
        req.body.password=password;
        //const ispasswordExist= bcrypt.compareSync(password,isUserExist.password)  
        if (isUserExist && bcrypt.compareSync(password, isUserExist.password)) {
            const data = isUserExist;
            //  console.log(Users)
            const token = generateAuthToken({
                id: data.id,
                email: data.email,
                rule: data.rule,

            })

            let { password, ...datawithoutpassword } = data._doc

            return res.status(200).json({
                status: 200,
                message: "login is succefull",
                token: token,
                data: datawithoutpassword

            }

            )
        }
        return res.status(404).json({
            status: 404,
            message: "password failed",

        }

        )

    }



}


export default { Usercontroller};

