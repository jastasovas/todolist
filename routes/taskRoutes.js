const express = require("express");
const router = express.Router();

const {
  createTodo,
  getAllTodos,
  updateTodoById,
  deleteTodoById,
} = require("../controlers/taskControler.js");

// @ /api/toDo

router.post("/", createTodo);
router.get("/", getAllTodos);
router.put("/:id", updateTodoById);
router.delete("/:id", deleteTodoById);

module.exports = router;
