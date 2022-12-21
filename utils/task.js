const Tasks = require("../schemas/tasks");

const createTask = async (req, res) => {
   try {
    let task = await Tasks.create(req.body);
    res.status(201).json({ task })
   } catch (err) {
    let errorMsg = err.msg
    res.status(500).json({ errorMsg })
   }
}

const getTasks = async (req,res) => {
    try{
        let task = await Tasks.find({});
        res.status(200).json({ task })
    }catch(err){
        let errorMsg = err.msg
        res.status(500).json({ errorMsg })
    }
}

const upDateTask = async (req,res) => {
    try {
        const { id } = req.params;
        const task = await Tasks.findOneAndUpdate({ _id: id}, req.body, {
        new: true,
        runValidators: true
        }).exec();

    if(!task) {
        return res.status(404).json({ error: `No task found for ${id}` })
     }

     res.status(200).json({ task })

    } catch (error) {
        res.status(500).json({ errorMsg })
    }
}

const getSingleTask = async (req,res) => {
    try {
        const { id } = req.params;
        const task = await Tasks.findOneAndUpdate({ _id: id }, req.body, {
            new: true,
            runValidators: true
        })

        if(!task) {
            return res.status(404).json({ error: `No task found for ${id}` })
        }

        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const deleteTask = async (req,res) => {
    try {
        const { id } = req.params;
        console.log(id)
        const task = await Tasks.findOneAndDelete({ _id: id }).exec();
       if(!task) {
            return res.status(404).json({ error: `No task with id of ${id}` })
        }
        // res.status(200).json({ success: true, msg: `task with id ${id} is deleted` }) 
        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error }) 
    }
}


module.exports = {
    getTasks,
    upDateTask,
    getSingleTask,
    deleteTask,
    createTask
}