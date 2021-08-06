const WordArt = require('../models/wordArt')

module.exports = {
  index,
  create,
  show,
  delete: deleteOne
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

async function show(req,res){
  const wordArt = await WordArt.findById(req.params.id)
  res.status(200).json(wordArt)
}

async function deleteOne(req,res){
  await WordArt.deleteOne({ _id: req.params.id, user: req.user._id} )
  res.status(200).json('deleted')
}