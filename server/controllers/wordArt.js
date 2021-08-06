const WordArt = require('../models/wordArt')

module.exports = {
  index,
  create,
  show,
  update,
  delete: deleteOne,
}

async function create(req,res){
  req.body.user = req.user._id
  const wordArt = await WordArt.create(req.body)
  res.status(200).json(wordArt)
}

async function index(req,res){
  const wordArt = await WordArt.find({}).populate('user')
  res.status(200).json(wordArt)
}

async function show(req,res){
  const wordArt = await WordArt.findById(req.params.id).populate('user')
  res.status(200).json(wordArt)
}

async function update(req,res){
  const wordArt = await WordArt.findById(req.params.id).populate('user')
  if (wordArt.user._id.equals(req.user._id)){
    wordArt.text = req.body.text
    wordArt.font = req.body.font 
    wordArt.animations = req.body.animations 
    await wordArt.save()
  }
  res.status(200).json(wordArt)
}

async function deleteOne(req,res){
  await WordArt.deleteOne({ _id: req.params.id, user: req.user._id}) 
  res.status(200).json('deleted')
}