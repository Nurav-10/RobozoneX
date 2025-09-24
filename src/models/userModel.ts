import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
   username:{type:String,unique:true,required:true},
   clerkId:{type:String,unique:true,required:true},
   email:{type:String,required:true},
   age:{type:Number},
   college:{type:String},
   posts:[{type:mongoose.Schema.Types.ObjectId,ref:'Post'}],
   drafts:[{type:mongoose.Schema.Types.ObjectId,ref:'Post'}],
   role:{
      type:String,
      deafult:"user"
   }
},{timestamps:true})

const User=mongoose.model('User',userSchema)
export default User;