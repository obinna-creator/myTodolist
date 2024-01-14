const express= require("express")
const onboarding = require("./onboardingRouter/onboarding")
const tasksRouter = require("./tasksroutes/tasksRouter")
const statusroutes = require("./tasksroutes/statusroutes")
const  subtaskroutes= require("./tasksroutes/subtaskroutes")
require('./config')
const app = express()

const port = 3000


app.use(express.json())
app.use("/api/create/user",onboarding)
app.use("/api/task/user", tasksRouter)
app.use("/api/status/user", statusroutes)
app.use("/api/subtask/user",subtaskroutes)

app.listen(port, () => {
    console.log(`server is listening on port :${port}`)
})