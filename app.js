const express = require("express");
const path =require("path")
const app = express()

const rutaMain = require("./routes/mainRouters");



//Motor de plantillas
app.set("view engine","ejs")

app.listen(3000,()=> console.log("el servidor esta vivo en el puerto 3000"));

const publicFolder= path.resolve(__dirname,"./public")
app.use(express.static(publicFolder))

app.use("/",rutaMain)
