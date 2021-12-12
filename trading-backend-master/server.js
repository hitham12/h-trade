const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose');

app.use(express.json())
app.use(cors());

app.use('/trading/api', require('./route/users.route'));

mongoose.connect(`${process.env.DB_URL}`, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB');
});

app.listen(4001, () => console.log(`Listening on port 4001`));