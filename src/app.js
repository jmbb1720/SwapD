const path = require('path')
const express = require('express')
const bodyParser= require('body-parser')
var multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });

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

app.post('/', upload.single('fileToUpload'), (req, res, next) => {
 
    var obj = {
        name: req.body.name,
        desc: req.body.desc,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        }
    }
    imgModel.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            res.redirect('/');
        }
    });
});

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})