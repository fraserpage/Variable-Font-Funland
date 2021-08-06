const mongoose = require('mongoose')

const wordArtSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User'
  },
  text: {
    type: String, 
    required: true,
    maxLength:200
  },
  font: {
    type: String, 
    required: true,
    maxLength:30
  },
  animations : [{
    position : Number,
    easing : String,
    stylePoints: [{
      point: Number,
      fontSize: Number,
      letterSpacing: Number,
      lineHeight: Number,
      vars : [{
        var : String,
        val : Number,
        min : Number,
        max : Number,
        step : Number,
       }]
    }]
  }],
  
}, {
  timestamps: true
});

module.exports = mongoose.model('WordArt', wordArtSchema);