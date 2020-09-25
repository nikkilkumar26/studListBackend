var express = require('express');
var router = express.Router();
let mongoose = require('mongoose')
const cors = require('cors')
const StudentModel = require('../models/Students')
let uri = "mongodb+srv://pswd123:wI8aD6bxgryMg0eg@zencluster.y8kfe.mongodb.net/zen?retryWrites=true&w=majority";

mongoose.connect(uri,{
  useNewUrlParser: true,
  useUnifiedTopology: true 
})


router.use(cors({
  origin: "*"
}));

router.use(express.json())


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/insert',async(req,res)=>{
  const Name = req.body.Name
  const Age = req.body.Age
  const food = new StudentModel({
      Name: Name,
      Age: Age
  })

  try{
      await food.save();
      res.send("inserted!")
      
  }
  catch(err){
      console.log(err)
  }
})

router.get('/read',async (req,res)=>{
  StudentModel.find({},(err,result)=>{
      if(err){
          res.send(err)
      }
      res.send(result)
  })
})







module.exports = router;
