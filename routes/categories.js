const router = require('express').Router(),
      Category = require('../models/category')

// Start GET Section

router.get('/', (req, res) => {
  res.send({message: 'Hi from CategoryRoute'})
})

router.get('/getAllCategories', (req, res) => {
  Category.find({}, (err, doc) => {
    if (err) {
      res.json(err)
    } else {
      res.json(doc)
    }
  })
})

// End GET Section

// Start POST Section

router.post('/newCategory', (req, res) => {
  let newCategory = Category(req.body)
  newCategory.save((err) => {
    if (err) throw err
    res.send({message: 'new Category created'})
  })
})

// End POST Section

module.exports = router
