// const express = require("express")
// const app= express()

// app.get('/api/v1/movies', (req, res) => {
    
// })

// app.listen(port, () => {
//     console.log(`server is listeing on port:${port}`);
// })













































// const express = require ("express")
// const { default: mongoose } = require("mongoose")
// const port = 2000
// const app = express();
// app.use(express.json())
// const studentSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         require: [true, "names is required"],
//     },
//     class: {
//         type: String,
//         require:[true, "class is required"],
//     },
//     userName: {
//         type: String,
//          unique :[true, "userename is required"],
//        require:[true,"input username"],
   
//     },
//     age: {
//         type: Number,
//         require:[true, "age is required"],
//     },
//     scores: {
//         type: String,
//         require:[true," enter your scoreds"],
//     },
//     isMarried:{type:Boolean},
//       subject: {
//       type: Array,
//       require:[true, " tis is reuired"],
//   }, 


// }, { timestamps: true })



// const studentModel = mongoose.model("students", studentSchema)

// app.get("/", (req, res) => {
//     res.send("<h1>welcome to my website</h1><p><this is a simple website created using  nodejs and mongoDB</p>")
// })


// // created a user

// app.post("/createstudent", async (req, res) => {
//     try {
//         const newUser = await studentModel.create(req.body)
//         if (!newUser) {
//             res.status(400).json("unaable to create user")
            
//         } else {
//             res.status(201).json({
//                 message: `user ${newUser.name} has been created successfully`,
//                 data: newUser
//             })
//         }
//     } catch (error) {
//         res.status(400).json(error.message)
//     }
// })

// app.get("/student/allUser", async (req, res) => {
//     try {
//         const allUser= await studentModel.find()
//         if (allUser.length === 0) {
//             res.status(200).json(`no user has been created yet` )
//         } else {
//             res.status(200).json({
//                  message: `there are ${allUser.length}.user  and they are listed `,
//                 allUser
//             })
//         }
//     } catch (error) {
//         res.status(400).json(error.message)
//     }
// })

// app.get("/getoneuser/:id", async (req, res) => {
//     const userId = req.params.id
   
//     try {
//         const user = await studentModel.findById(userId).select(["name", "username" ,"age","isMarried"])

//         if (!user) {
//             res.status(404).json({
//             message: `not found`
//             })
//         }else{
//             res.status(200).json({user})
//         }
//     } catch (error) {
//         res.status(500).json({message:`internal error`})
//     }

// })

// app.get("/getusername/:username", async (req, res) => {
//     const username = req.params.username
    
//     try {
//         const user = await studentModel.findOne({username}).select(["name", "username" ,"age","isMarried"])

//         if (!user) {
//             res.status(404).json({
//             message: `not found`
//             })
//         }else{
//             res.status(200).json({user})
//         }
//     } catch (error) {
//         res.status(500).json({message:`internal error`})
//     }

// })



// app.put("/updateuser/:id", async (req, res) => {
    
//     try {
//     const id=req.params.id
//         const updateuser = await studentModel.findByIdAndUpdate(id, req.body, { new: true })
//         res.status(200).json({
//             message: "updated successfully",
//             updateuser
//         })
    
//     }
//     catch (error) {
//         res.json(error.message)
//     } {
    
// }
// })

// app.delete("/deleteuser/:id ", async (req, res) => {
//     try {
//         const id = req.params.id
//         const deluser = await studentModel.findByIdAndDelete(id)
//         const allUser = await studentModel.find()
//         res.json({message:`${deluser.userName} has been deleted successfully`, deluser,allUser})
//     } catch (error){res.json(error.message)} {
        
//     }
// })
    

// mongoose.connect("mongodb+srv://obinnpatrick301:paHqgQ8fgbTBYYdJ@cluster0.3go4clk.mongodb.net/").then(() => {
//     console.log(`database is connected successfully`);
// }).catch((err) => {
//     console.log(` unable to connect ${err}`);
// })


    
// app.listen(port, () => {
//     console.log(`server is listening ${port}`);
// })

// const express = require ("express")
// const { default: mongoose } = require("mongoose")
// const port = 2000
// const app = express();
// app.use(express.json())
// const studentSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         require: [true, "names is required"],
//     },
//     class: {
//         type: String,
//         require:[true, "class is required"],
//     },
//     userName: {
//         type: String,
//          unique :[true, "userename is required"],
//        require:[true,"input username"],
   
//     },
//     age: {
//         type: Number,
//         require:[true, "age is required"],
//     },
//     scores: {
//         type: String,
//         require:[true," enter your scoreds"],
//     },
//     isMarried:{type:Boolean},
//       subject: {
//       type: Array,
//       require:[true, " tis is reuired"],
//   }, 


// }, { timestamps: true })



// const studentModel = mongoose.model("students", studentSchema)

// app.get("/", (req, res) => {
//     res.send("<h1>welcome to my website</h1><p><this is a simple website created using  nodejs and mongoDB</p>")
// })


// // created a user

// app.post("/createstudent", async (req, res) => {
//     try {
//         const newUser = await studentModel.create(req.body)
//         if (!newUser) {
//             res.status(400).json("unaable to create user")
            
//         } else {
//             res.status(201).json({
//                 message: `user ${newUser.name} has been created successfully`,
//                 data: newUser
//             })
//         }
//     } catch (error) {
//         res.status(400).json(error.message)
//     }
// })

// app.get("/student/allUser", async (req, res) => {
//     try {
//         const allUser= await studentModel.find()
//         if (allUser.length === 0) {
//             res.status(200).json(`no user has been created yet` )
//         } else {
//             res.status(200).json({
//                  message: `there are ${allUser.length}.user  and they are listed `,
//                 allUser
//             })
//         }
//     } catch (error) {
//         res.status(400).json(error.message)
//     }
// })

// app.get("/getoneuser/:id", async (req, res) => {
//     const userId = req.params.id
   
//     try {
//         const user = await studentModel.findById(userId).select(["name", "username" ,"age","isMarried"])

//         if (!user) {
//             res.status(404).json({
//             message: `not found`
//             })
//         }else{
//             res.status(200).json({user})
//         }
//     } catch (error) {
//         res.status(500).json({message:`internal error`})
//     }

// })

// app.get("/getusername/:username", async (req, res) => {
//     const username = req.params.username
    
//     try {
//         const user = await studentModel.findOne({username}).select(["name", "username" ,"age","isMarried"])

//         if (!user) {
//             res.status(404).json({
//             message: `not found`
//             })
//         }else{
//             res.status(200).json({user})
//         }
//     } catch (error) {
//         res.status(500).json({message:`internal error`})
//     }

// })



// app.put("/updateuser/:id", async (req, res) => {
    
//     try {
//     const id=req.params.id
//         const updateuser = await studentModel.findByIdAndUpdate(id, req.body, { new: true })
//         res.status(200).json({
//             message: "updated successfully",
//             updateuser
//         })
    
//     }
//     catch (error) {
//         res.json(error.message)
//     } {
    
// }
// })

// app.delete("/deleteuser/:id ", async (req, res) => {
//     try {
//         const id = req.params.id
//         const deluser = await studentModel.findByIdAndDelete(id)
//         const allUser = await studentModel.find()
//         res.json({message:`${deluser.userName} has been deleted successfully`, deluser,allUser})
//     } catch (error){res.json(error.message)} {
        
//     }
// })
    

// mongoose.connect("mongodb+srv://obinnpatrick301:paHqgQ8fgbTBYYdJ@cluster0.3go4clk.mongodb.net/").then(() => {
//     console.log(`database is connected successfully`);
// }).catch((err) => {
//     console.log(` unable to connect ${err}`);
// })


    
// app.listen(port, () => {
//     console.log(`server is listening ${port}`);
// })

// const register = async (req, res) => {
//     try {
//         const { name, email, password, role } = req.body
//         const salt = bcrypt.genSaltSync(10)
//         const hashpassword= bcrypt.hashSync(password, salt)

//         const user = new regModel({
            
//         })
  


//     } catch (error) {
        
//     }
// }