'use strict'

const express = require ('express');
const api = express.Router();
const encoderRoutes = require ('../controllers/encoder');

//Endpoints
api.post('/:id', encoderRoutes.getHash);

module.exports = api;
