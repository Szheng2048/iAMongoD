const express = require("express")
const logger = require('morgan')
const productsRouter = require("./product/productsRouter")

const app = express()

app.use(logger('dev'))
app.use(express.json())

app.use("/api/products",productsRouter)


module.exports = app