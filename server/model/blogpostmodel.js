// class postData {
//     constructor(blogId,title,content,timestamps,userId) {
//         this.blogId = blogId,
//         this.title = title,
//         this.content = content,
//         this.timestamps = timestamps,
//         this.userId = userId
//     }
// }
// export default postData;
    import mongoose from "mongoose";
    const blogSchema=new mongoose.Schema({
        title:{
            type:String,
            required:[true,"title is required"]
        },
        content:{
            type:String,
            require:[true, "content is required"]

        },
        userid:{
            type:mongoose.Schema.ObjectId,
            ref:"user",
            required:[true,"user is required"]
        },
        timestamp:{
            type:String,
            default:new Date(Date.now())
        }
    });
    blogSchema.pre(/^find/,function (next) {
        this.populate({
            path:"userid",
            select:"firstName email"
        })
        next();
        
    })
    const blogInfo=mongoose.model("blog",blogSchema);
    export default  blogInfo;