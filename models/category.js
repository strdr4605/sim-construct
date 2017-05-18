
var mongoose = require('mongoose'),
    Schema = mongoose.Schema


var CategoryScheme = new Schema({
  nameRo: {
    type: String,
    required: true,
    // index: {
    //   unique: true
    // }
  },
  nameRu: {
    type: String,
    required: true,
    // index: {
    //   unique: true
    // }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }}, {
    collection: 'categories'
  })

let Category = mongoose.model('Category', CategoryScheme)
module.exports = Category
