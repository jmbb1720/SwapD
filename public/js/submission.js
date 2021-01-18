// select document then fetch
//construct json object to be sent to app.post!
const form = document.getElementById('form')
const util = require("util");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");


// TODO: handle submission
form.addEventListener('submit', (e) => {
    e.preventDefault()

    const post = {
        firstName : document.getElementById('fname').value,
        lastName: document.getElementById('lname').value,
        dsonEmail: document.getElementById('email').value,
        title: document.getElementById('postTit').value,
        title_lower: document.getElementById('postTit').value.toLowerCase(),
        description: document.getElementById('desc').value,
        category: document.getElementById('categories').value,
        tags: document.getElementById('tags').value,
    }

    fetch('/posts', 
    {
        method: 'post', 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post)
    }).then((res) => {
        return res.json()
    }).then((response) => {
        console.log(response)
    }).catch((error) => {
        alert(error.message)
        console.log(error)
    })
}

/*const util = require("util");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
*/
//image gfs
var storage = new GridFsStorage({
    url: "mongodb://localhost:27017",
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
  module.exports = uploadFilesMiddleware;*/

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
)