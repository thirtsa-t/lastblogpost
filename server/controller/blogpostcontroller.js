
import blogInfo from '../model/blogpostmodel.js';
import postData from '../model/blogpostmodel.js';

class blogpostcontroller {

    static blogpost = async(req, res) => {
        
         const data=await postData.create(req.body);
        if (!data) {
            return res.status(417).json({
                status: 417,
                message: "blog failed",


            })

        }
        return res.status(201).json({
            status: 201,
            message: "blog created successful",
            data:data._doc
        })
    }

    static getAllBlog = async(req, res) => {
        const data = await postData.find();
        return res.status(200).json({
            status: 200,
            message: "getallblog",
            data:data
        })
     }
     static getOneBlog = async(req, res) => {
         const blogId = req.params.id;
        const datas =await postData.findById(blogId);
        
        
       if (!datas) {
           return res.status(401).json({
               status:401,
               message:"we don't have that blog"
           })
       }
       return res.status(200).json({
           status:200,
           message:"sucessful done",
           data:datas
       })
    }
    

    
         static deleteallpost = async (req, res) => {
         const blogId = req.params.blogId;
        const data = await blogInfo.findByIdAndDelete(blogId);
        
        if (!data) {
            return res.status(401).json({
                status:401,
                message:"doesn't get it"
            })
        }
        return res.status(200).json({
            status:200,
            message:"sucessful done"
        })
    }




    // }
    // static deleteOnepost = (req, res) => {
    //     const blogId = req.params.id;
    //     const data = posts.findIndex(post => post.blogId === parseInt(blogId));


    //     if (data === -1) {
    //         return res.status(417).json({
    //             status: 417,
    //             message: "post failed to delete",
    //         })

    //     }
    //     posts.splice(data, 1)
    //     return res.status(200).json({
    //         status: 200,
    //         message: "post successfully deleted",
    //         data
    //     })


    // }
    // static deletallBlog = (req, res) => {

    //     const data = posts.splice
    //     return res.status(200).json({
    //         status: 200,
    //         message: "deletepost",
            
    //     })
    // }
  static updateOneBlog = async(req,res)=>{
         const blogId = req.params.id;
         
        
        //  if(dataIndex ===-1){
        //      return res.status(404).json({
        //           status:404,
        //           message:"not found",
        //          data
            //   });
        //  }
     let {
         title,
        content,
         timestamp,
         userid
        }=req.body;
    //  const post = new postData(blogId,title,content,timestamp,userid);
    //  posts[dataIndex]=post;
     const data = await blogInfo.findByIdAndUpdate(blogId,{
        title:title,
        content:content
     
    });
    if(!data){
         return res.status(417).json(
             {
                status:417,
               message:"post failed to be updated",
                data
             }
         )
     }
     const dataUpdated= await blogInfo.findById(blogId);
     return res.status(200).json(
         {
             status:200,
            message:"post updated is successfull",
             data:dataUpdated
         })
     }
}
    



    






export default blogpostcontroller;

