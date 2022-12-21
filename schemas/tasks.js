const mongoose = require("mongoose");


const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Name is required"],
        trim: true,
        maxlength: [20, "Name must be atleast 20 characters long"]
    },
    completed: {
        type: Boolean,
        default: false
    }
})

const Task = mongoose.model("Task", TaskSchema)

module.exports = Task;