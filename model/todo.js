const mongoose=require('mongoose');
const todoSchema=new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    time:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    }
},{timestamps:true}
);
module.exports=mongoose.model('Todo',todoSchema);