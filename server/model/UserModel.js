import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
         type: String,
          required: [true, " an email is required"] 
        },
    password: { 
        type: String,
         required: [true, " password is required"]
         },
    gender: { 
        type: String, 
        enum: ["male", "female"] 
    },
    rule: {
         type: String,
          enum: ["user", "admin"], 
          required: [true, "role is required"] 
        },
    department: String,
    address: { 
        type: String, 
        default: "Rwanda" 
    }
});
const userInfo=mongoose.model("user",userSchema);
export default userInfo;
