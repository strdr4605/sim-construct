const router = require('express').Router(),
      Product = require('../models/product')
var multer = require('multer')
var path = require('path')
var mkdirp = require('mkdirp')
var fs = require('fs')
var imageUrl ='public/images/'

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
  let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      mkdirp(imageUrl, function (err) {
        if (err) console.error(err)
        else console.log('pow!')
      })
      imageUrl += req.body.categoryId.toString() + '/'
      cb(null, imageUrl)
    },
    filename: (req, file, cb) => {
        let name = req.body.nameRo + '-' + Date.now() +  path.extname(file.originalname)
        mkdirp(imageUrl, function (err) {
          if (err) console.error(err)
          else console.log('pow!')
        })
        imageUrl += name
        cb(null, name)
    }
  })
  let upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
      let ext = path.extname(file.originalname)
      let allowedExt = ['.png','.jpg','.gif','.jpeg','.PNG','.JPG','.GIF','.JPEG']
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
    reqProd.imageUrl = imageUrl == 'public/images/' ? 'public/images/no-image.png' : imageUrl
    console.log(reqProd)
    let newProduct = Product(reqProd)
    newProduct.save((err) => {
      if (err) throw err
    })

		res.send('Succesufully created Product')
    imageUrl = 'public/images/'
	})
})

router.post('/deleteProduct', (req, res) => {
  let productToDeleteId = req.body.productId
  Product.findOne({ '_id': productToDeleteId}, (err, doc) => {
    if (err) throw  error
    let imageToDelete = doc.imageUrl
    if (imageToDelete != 'public/images/no-image.png') {
      fs.unlink(imageToDelete, (err) => {
        if (err) throw err
        console.log('successfully deleted file ' + imageToDelete)
      })
    } else {
      console.log('public/images/no-image.png ' + 'not deletable')
    }
    Product.remove({ _id: productToDeleteId}, (err, doc) => {
      if (err) throw err
    })
  })
  res.send('success deletion')
})


// End POST Section

module.exports = router
