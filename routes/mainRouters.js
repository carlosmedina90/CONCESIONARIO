const express= require("express")
const router = express.Router()
const principalControlador = require("../controllers/maincontroller.js")



router.get("/",principalControlador.index)
router.get("/login",principalControlador.login)
router.get("/register",principalControlador.register)
router.get("/productCart",principalControlador.productCart)
router.get("/productDetail",principalControlador.productDetail)


module.exports = router;