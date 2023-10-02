const express = require("express");
const bodyParser=require("body-parser")

const {PORT}=require("./config/server-config")

const apiRoutes=require("./routes/index")

const app = express();


const startServer=()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    app.use("/api",apiRoutes)

    app.listen(PORT,()=>{
        console.log(`Server started at PORT : ${PORT}`);
    })
}

startServer();