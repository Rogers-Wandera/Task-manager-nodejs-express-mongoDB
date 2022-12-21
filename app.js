const express = require("express");
const taskRouter = require("./routes/tasks");
const connectDB = require("./db/connection");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(express.static("./public"))
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get("/", (req,res) => {
    res.send("Home page")
})

app.use("/api/v1/tasks", taskRouter)

const startServer = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`app running on port ${port}`)
        })
    } catch (err) {
        console.log(err)
    }
}

startServer();
