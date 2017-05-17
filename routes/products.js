const router = require('express').Router(),
      Product = require('../models/product')
var multer = require('multer')
var path = require('path')
var imageUrl ='public/images'
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imageUrl)
  },
  filename: (req, file, cb) => {
      let name = req.body.nameRo + '-' + Date.now() +  path.extname(file.originalname)
      imageUrl += '/' + name
      cb(null, name)
  }
})

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
  let reqProd = req.body
  let newProduct = Product(reqProd)
  newProduct.save((err) => {
    if (err) throw err
    res.send({message: "new Product created"})
  })
})


router.post('/uploadImage', (req, res) => {
  var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      var ext = path.extname(file.originalname)
      var allowedExt = ['.png','.jpg','.gif','.jpeg','.PNG','.JPG','.GIF','.JPEG']
      if (allowedExt.indexOf(ext) == -1){
        return cb(res.send('Only images are allowed'), null)
      }
      cb(null, true)
    }
  }).single('userFile')
  upload(req, res, (err) => {
    if (err) throw err

    let reqProd = req.body
    reqProd.price = parseFloat(reqProd.price)
    reqProd.imageUrl = imageUrl
    delete reqProd.submit
    console.log(reqProd)
    let newProduct = Product(reqProd)
    newProduct.save((err) => {
      if (err) throw err
    })

		res.send('File is uploaded, new Product created')
    imageUrl = 'public/images'
	})
})
// End POST Section

module.exports = router
