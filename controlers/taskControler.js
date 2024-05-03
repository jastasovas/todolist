const Todo = require("../models/task");

class TodoService {
  async createTodo(task, when) {
    if (!task || !when) {
      throw new Error("");
    }

    const toDo = await Todo.create({
      task: task,
      when: when,
    });

    return toDo;
  }

  async getAllTodos() {
    const toDos = await Todo.find();
    return toDos;
  }

  async updateTodoById(id, updates) {
    const toDo = await Todo.findById(id);
    if (!toDo) {
      throw new Error("");
    }

    if (updates.task) {
      toDo.task = updates.task;
    }

    if (updates.when) {
      toDo.when = updates.when;
    }

    const result = await toDo.save();
    return result;
  }

  async deleteTodoById(id) {
    const result = await Todo.deleteOne({ _id: id });
    return result;
  }
}

module.exports = new TodoService();
