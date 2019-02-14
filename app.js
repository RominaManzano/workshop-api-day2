require('app-module-path').addPath(__dirname)

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const express = require('express')
const multer = require('multer')
const path = require('path')
const env = require('dotenv').config()

const app = express()

global.__config = require('konphyg')('config')('main')
global.__logger = require('middleware/logger.middleware.js')
global.__temp = path.join(__dirname, 'uploads')

console.log('NODE_ENV: ' + process.env.NODE_ENV)

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ 'extended': false }))
app.use(cookieParser())


require('routes/routes')(app)

module.exports = app
