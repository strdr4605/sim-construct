const router = require('express').Router(),
      Category = require('../models/category')
var mkdirp = require('mkdirp')
var path = require('path')

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
    categoryImageDir = 'public/images/' + newCategory._id.toString()
    mkdirp(categoryImageDir, function (err) {
      if (err) console.error(err)
      else console.log('pow!')
    })
    res.sendFile(path.resolve('views/newCategoryView.html'))
  })
})

router.post('/deleteCategory', (req, res) => {
  let categoryToDeleteId = req.body.categoryId
  Category.remove({ _id: categoryToDeleteId}, (err, doc) => {
    console.log(doc);
  });
  res.json({success: true})
})

// End POST Section

module.exports = router
