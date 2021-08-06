const mongoose = require('mongoose')

const wordArtSchema = new mongoose.Schema({
  text: {
    type: String, 
    required: true,
    maxLength:30
  },
  font: {
    type: String, 
    required: true,
    maxLength:30
  },
  vars : [{
    var : String,
    val : Number
     }]
}, {
  timestamps: true
});

module.exports = mongoose.model('WordArt', wordArtSchema);