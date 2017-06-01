const router = require('express').Router(),
      Category = require('../models/category')
var mkdirp = require('mkdirp')
var path = require('path')
var mv = require('mv')

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
  }).sort({createdAt: -1})
})

// End GET Section

// Start POST Section

router.post('/newCategory', (req, res) => {
  let newCategory = Category(req.body)
  console.log(newCategory)
  newCategory.save((err) => {
    if (err) {
      if (err.code == 11000) res.send('Dublicated category name')
      else throw err
    }
    categoryImageDir = 'public/images/' + newCategory._id.toString()
    mkdirp(categoryImageDir, function (err) {
      if (err) console.error(err)
      else console.log('pow!')
    })
  })
  res.send('Succesufully createad Category')
})

router.post('/deleteCategory', (req, res) => {
  let categoryToDeleteId = req.body.categoryId
  let folderToRename = 'public/images/' + categoryToDeleteId
  mv(folderToRename, folderToRename + '-Removed', {mkdirp: true}, function(err) {
  // done. it first created all the necessary directories, and then
  // tried fs.rename, then falls back to using ncp to copy the dir
  // to dest and then rimraf to remove the source dir
  })
  Category.remove({ _id: categoryToDeleteId}, (err, doc) => {
    console.log(doc);
  });
  res.send('success deletion')
})

// End POST Section

module.exports = router
