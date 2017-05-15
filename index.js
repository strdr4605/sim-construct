const express = require('express'),
      app = express(),
      config = require('./config'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser')
      categoryRoutes = require('./routes/categories')

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

mongoose.connect(config.database, (err) => {
  console.log('Successfuly connected to ' + config.database)
})
mongoose.Promise = global.Promise

app.use('/api/v1/category', categoryRoutes)

app.get('/', (req, res) => {
  res.send({message: 'Hi'})
})

app.listen(config.port, () => {
  console.log('Application is running on port ' + config.port)
})
