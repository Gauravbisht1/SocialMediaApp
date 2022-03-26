const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const multer = require('multer')
const userRoute = require('./routes/users')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const router = express.Router()
const path = require('path')
const connection = require('./db/db')
dotenv.config()
const port = process.env.PORT || 8800

app.use('/images', express.static(path.join(__dirname, 'public/images')))

//middleware
app.use(express.json())
app.use(helmet())
// app.use(morgan('common'))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name)
  },
})

const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    return res.status(200).json('File uploded successfully')
  } catch (error) {
    console.error(error)
  }
})

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)

const start = async () => {
  try {
    await connection(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Your App is listening on Port ${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
