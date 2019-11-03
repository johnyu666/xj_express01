var express = require('express');
var router = express.Router();

const  mongoose=require('mongoose')
let bookSchema={name:'String',price:Number,count:Number}
mongoose.model("book",bookSchema)
let Book=mongoose.model('book')


/* GET users listing. */
router.get('/', function(req, res, next) {
  Book.find({},function (err,newBook) {
    res.json(newBook);
  })
});
router.post('/',function (req,res) {
    Book.create(req.body,function (err,newBook) {
        res.json(newBook)
    })
})


module.exports = router;
