const todoRouter = require('express').Router();
const todoController = require('../controller/todocontroller');
todoRouter.get('/todos', todoController.getTodos);
todoRouter.post('/todos', todoController.setTodos);
todoRouter.put('/todos/:id', todoController.updateTodos);
todoRouter.delete('/todos/:id', todoController.deleteTodos);
todoRouter.patch('/todos/:id', todoController.completeTodos);
module.exports = todoRouter;