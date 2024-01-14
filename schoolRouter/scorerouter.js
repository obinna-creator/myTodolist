const express = require("express")

const router = express.Router()
const scorerouter= require("../schoolCon/scorecontroler")
const { authenticate, Role}= require('../schoolAuth/schoolauth')
//router.post('/add-score', authenticate, Role, scorerouter.Addscore)

router.get('/add-score', scorerouter.Addscore)
router.get('/fetch-score/:studentId',scorerouter.getstudentscore)
router.put('/updateScore/:studentId',scorerouter.updateScore)
router.delete('/delete-user/:studentId',scorerouter.delete)
module.exports= router