import express from 'express';
import Usercontroller from '../controller/Authcontroller.js';
import Validator from '../middleware/validator.js';


 const router = express.Router();
 router.post('/auth/signup',Validator.newAccountRule(),Validator.validateInput , Usercontroller.Usercontroller.signup);
 router.post('/auth/signin',Validator.newRules(),Validator.validateInput, Usercontroller.Usercontroller.signin);



 export default router;