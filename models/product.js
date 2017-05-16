var mongoose = require('mongoose'),
    Schema = mongoose.Schema


var ProductScheme = new Schema({
  imageUrl: {
    type: String,
    required: false
  },
  categoryId: {
    type: Schema.Types.ObjectId,
    required: true
  },
  nameRo: {
    type: String,
    required: true
  },
  nameRu: {
    type: String,
    required: true
  },
  price:{
    type: Number,
    required: true
  },
  descriptionRo:{
    type: String,
    required: true
  },
  descriptionRu:{
    type: String,
    required: true
  },
  unitRo:{
    type: String,
    required: true
  },
  unitRu:{
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }}, {
    collection: 'products'
  })

let Product = mongoose.model('Product', ProductScheme)
module.exports = Product
