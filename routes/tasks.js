const express = require("express");
const { getTasks,
    upDateTask,
    getSingleTask,
    deleteTask,
    createTask
 } = require("../utils/task");

const taskRouter = express.Router();

taskRouter.get("/", getTasks);
taskRouter.post("/", createTask)
taskRouter.get("/:id", getSingleTask).patch("/:id", upDateTask).delete("/:id", deleteTask);

module.exports = taskRouter;