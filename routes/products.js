const router = require('express').Router(),
      Product = require('../models/product')

// Start GET Section

router.get('/', (req, res) => {
  res.send({message: 'Hi from ProductRoute'})
})

router.get('/getAllProducts', (req, res) => {
  Product.find({}, (err, doc) => {
    if (err) {
      res.json(err)
    } else {
      res.json(doc)
    }
  })
})

router.get('/findByCategoryId/:categoryId', (req, res) => {
  let categoryId = req.params.categoryId
  Product.find({categoryId: categoryId}, (err, doc) => {
    if (err) {
      res.json(err)
    } else {
      res.json(doc)
    }
  })
})

// End GET Section

// Start POST Section

router.post('/newProduct', (req, res) => {
  let newProduct = Product(req.body)
  newProduct.save((err) => {
    if (err) throw err
    res.send({message: "new Product created"})
  })
})

// End POST Section

module.exports = router
