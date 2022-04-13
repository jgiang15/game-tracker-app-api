const mongoose = require('mongoose')

const gameSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    developer: {
      type: String,
      required: true
    },
    rating: {
      type: String,
      required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Games', gameSchema)
