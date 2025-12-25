const todoModel=require('../model/todo');
exports.getTodos = (req, res) => {
    todoModel.find()
    .then((results)=>{
        res.status(200).json(results);
    })
    .catch((err)=>{
        res.status(500).json({error:err.message});
    });
};
exports.setTodos= (req, res) => {
    const {task,date,time}=req.body;
    const todo=new todoModel({task,date,time});
    todo.save()
    .then((result)=>{
        res.status(201).json(result);
    })
    .catch((err)=>{
        res.status(400).json({error:err.message});
    });
};
exports.updateTodos= (req, res) => {
    const id=req.params.id;
    const {task,date,time}=req.body;
    todoModel.findByIdAndUpdate(id,{task,date,time})
    .then((result)=>{
        res.status(200).json(result);
    })
    .catch((err)=>{
        res.status(500).json({error:err.message});
    });
};
exports.deleteTodos= (req, res) => {
   const id=req.params.id;
   todoModel.findByIdAndDelete(id)
   .then((result)=>{
       res.status(200).json({message:"Todo deleted successfully"});
   })
   .catch((err)=>{
       res.status(500).json({error:err.message});
   });
};
exports.completeTodos= (req, res) => {
    const id=req.params.id;
    todoModel.findByIdAndUpdate(id,{completed:true})
    .then((result)=>{
        res.status(200).json({message:"Todo marked as completed"});
    })
    .catch((err)=>{
        res.status(500).json({error:err.message});
    });
};