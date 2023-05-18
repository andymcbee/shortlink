const express = require('express');
const shortlinkController = require('../controller/shortlinkController');
const api = express.Router();

const use = fn => (req, res, next) => 
  Promise.resolve(fn(req, res, next)).catch(next);


api.post('/api/shortlink', use(shortlinkController.create));

api.get('/api/shortlink/:id', use(shortlinkController.get));

api.delete('/api/shortlink', use(shortlinkController.close));

module.exports = api;