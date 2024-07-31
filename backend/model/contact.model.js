import mongoose from "mongoose";
const contactSchema=new mongoose.Schema({
message:{
    type:String,
    required:true
},
companyName:{
    type:String,
    required:true
},

email:{
    type:String,
    required:true
},
subject:{
    type:String,
    required:true
}
},{timestamps:true})
const Contact=mongoose.model("Contact",contactSchema)
export default Contact