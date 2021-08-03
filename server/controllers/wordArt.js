const WordArt = require('../models/wordArt')

module.exports = {
  index,
  create
}

async function create(req,res){
  // try{
    const wordArt = await WordArt.create(req.body)
    res.status(200).json(wordArt)
  // }
  // catch(err){
  //   res.status(400).json('Could not save')
  // }
}

async function index(req,res){
  const wordArt = await WordArt.find({})
  res.status(200).json(wordArt)
}