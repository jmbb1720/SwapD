const path = require('path')
const express = require('express')
//const crypto = require('crypto')
//const mongoose = require('mongoose')
//const util = require("util");
//const multer = require('multer');
//const GridFsStorage = require('multer-gridfs-storage');
/*const Grid = require('grisfs-stream');
const methodOverride = require('method-override')*/

require('../db/mongoose.js')
const app = express()
const port = process.env.PORT
const postRouter = require('../routers/postRoutes.js')
const userRouter = require('../routers/userRoutes.js')

// define paths for express config
const publicDir =  path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')

app.set('view engine', 'pug')
app.set('views', viewsPath)
app.use(express.json())
app.use(express.static(publicDir))
app.use(postRouter)
app.use(userRouter)

//image gfs
/*var storage = new GridFsStorage({
    url: "mongodb://localhost:27017/swapd-posts",
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req, file) => {
      const match = ["image/png", "image/jpeg"];
  
      if (match.indexOf(file.mimetype) === -1) {
        const filename = `${Date.now()}-bezkoder-${file.originalname}`;
        return filename;
      }
  
      return {
        bucketName: "photos",
        filename: `${Date.now()}-bezkoder-${file.originalname}`
      };
    }
  });
  
  var uploadFile = multer({ storage: storage }).single("file");
  var uploadFilesMiddleware = util.promisify(uploadFile);
  module.exports = uploadFilesMiddleware;
  */

app.get('/', (req, res) => {
    res.sendFile(viewsPath + '/index.html')
})

app.get('/submit', (req, res) => {
    res.sendFile(viewsPath + '/submit-post.html')
})

app.get('/register', (req, res) => {
    res.sendFile(viewsPath + '/register.html')
})

app.get('/login', (req, res) => {
    res.sendFile(viewsPath + '/login.html')
})

app.get('/arts-studio', (req, res) => {
    res.sendFile(viewsPath + '/arts-studio.html')
})

app.get('/sports-tennis', (req, res) => {
    res.sendFile(viewsPath + '/sports-tennis.html')
})

app.get('/tech-program', (req, res) => {
    res.sendFile(viewsPath + '/tech-program.html')
})

app.get('/tennis', (req, res) => {
    res.sendFile(viewsPath + '/tennis.html')
})

app.get('/post', (req, res) => {
    res.sendFile(viewsPath + '/post.html')
})

app.get('/user-info', (req, res) => {
    res.sendFile(viewsPath + '/user-info.html')
})

app.get('/user-info-update', (req, res) => {
    res.sendFile(viewsPath + '/user-info-update.html')
})

//server.js
 
 
// SET STORAGE
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
   
  var upload = multer({ storage: storage })

  app.post('/uploadfile', upload.single('file'), (req, res, next) => {
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send(file)
    
  })

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})