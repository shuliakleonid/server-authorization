require('dotenv').config()
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router')

const port = process.env.PORT || 5000
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewParser: true,
      useUnifiedTopology: true
    })
    app.listen(port, () => console.log(`Server start at ${port}`))

  } catch (e) {
    console.error(e)
  }
}

start()
