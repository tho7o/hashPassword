'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

// ** PATH
const encoderRoutes = require('./routes/encoder');

app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
app.use(bodyParser.json({ limit: '1mb' }));
app.use(cors());

// ** PREFIX
app.use('/v1/hash', encoderRoutes);

//  ** EXPORT
module.exports = app;
