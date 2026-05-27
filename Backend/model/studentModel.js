import  mongoose from 'mongoose'


const studentSchema =new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    rollNo:{type:String,required:true},
    className:{type:String,required:true},
    contact:{type:String,required:true},



},{timestamps:true})


export const
