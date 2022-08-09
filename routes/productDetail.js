const express= require("express")
const router = express.Router()
const principalControlador = require("../controllers/maincontroller.js")

router.get("/",principalControlador.productDetail)


module.exports = router;