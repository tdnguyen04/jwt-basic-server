require('dotenv').config()
require('express-async-errors');
const cors = require('cors')

const express = require('express');
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const app = express()
const mainRouter = require('./routes/main')

app.use(cors())
app.use(express.json())
app.use('/api/v1', mainRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 8020

const start = async() => {
  try {
    app.listen(port, () => console.log(`Server is listening on port ${port}...`))
  } catch (error) {
    console.log(error)
  }
}

start()

