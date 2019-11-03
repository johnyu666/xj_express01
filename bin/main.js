const mongoose=require('mongoose')
const mongo=require('../mongo')
const app=require('../app')
const http=require('http')

let mongoUrl='mongodb://localhost:27017/test12'
let httpPort=3000
let server=http.createServer(app)
mongoose.connect(mongoUrl,err=>{
    server.listen(httpPort)
})
server.on('listening',()=>{
    console.log(`express start at ${server.address().host} :${server.address().port}`)
})
server.on('error',(err)=>console.log("express error"))
    mongoose.connection.on('open',function () {
})

mongoose.connection.on('open',function () {
    console.log(`mongoose connected in ${mongoose.connection.host}:${mongoose.connection.port}`)
})

mongoose.connection.on('error',function (err) {
    console.log("mongoose connection error")
})