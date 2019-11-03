const  mongoose=require('mongoose')
const model=require('./models')
let Book=mongoose.model("book",model.BookSchema)
