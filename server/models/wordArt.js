const mongoose = require('mongoose')

const wordArtSchema = new mongoose.Schema({
  text: {
    type: String, 
    required: true,
    maxLength:30
  },
  props : [{
    prop : String,
    val : Number
     }]
}, {
  timestamps: true
});

module.exports = mongoose.model('WordArt', wordArtSchema);