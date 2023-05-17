const express = require('express');
const shortlinkController = require('../controller/shortlinkController');
const api = express.Router();


api.post('/api/shortlink', shortlinkController.create);

api.get('/api/shortlink/:id', shortlinkController.get);

api.delete('/api/shortlink', shortlinkController.close);

module.exports = api;