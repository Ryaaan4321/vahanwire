import mongoose from "mongoose";
const userlogin=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
      type:String,
      required:true  
    },
    password:{
        type:String,
        required:true
    }
})
const user=mongoose.model('User',userlogin);
export default user;