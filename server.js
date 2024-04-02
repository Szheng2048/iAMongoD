const mongoose = require('mongoose')
const app = require('./app')

mongoose
    .connect("mongodb://localhost:27017/express-mongodb-intro")
    .then(()=>{
        app.listen(3000,()=>{
            console.log("MONGO DB CONNECTED")
            console.log("server started on port 3000")
        })
    }).catch((error)=>{
        console.log(error)
    })