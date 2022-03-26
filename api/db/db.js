const moongoose = require('mongoose')

const connection = (url) => {
  return moongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
}

module.exports = connection
