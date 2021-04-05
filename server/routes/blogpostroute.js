import express from 'express';
import { verifyAuth } from '../middleware/authverification.js';
import blogpostcontroller from '../controller/blogpostcontroller.js';

import Validator from '../middleware/validator.js';
 const blogrouter = express.Router();
 blogrouter.post('/blog/create',verifyAuth,blogpostcontroller.blogpost);
 blogrouter.get('/blog/getall' ,verifyAuth, blogpostcontroller.getAllBlog);
  blogrouter.get('/blog/getone/:id', verifyAuth,blogpostcontroller.getOneBlog);
  blogrouter.patch ('/blog/updateOneBlog/:id',verifyAuth, blogpostcontroller.updateOneBlog);
  //blogrouter.patch ('/blog/updateOneBlog/:id',verifyAuth, blogpostcontroller.updateOneBlog);
  //blogrouter.get ('/blog/deleteone/:id',verifyAuth,blogpostcontroller.deleteOnepost);                                        
 //blogrouter.get ('/blog/deleteall',verifyAuth,Validator.verifyAccess,Validator.validateInput, blogpostcontroller.deleteallpost);
  blogrouter.patch ('/blog/updateOneBlog/:id',verifyAuth, blogpostcontroller.updateOneBlog);


 



 export default blogrouter;