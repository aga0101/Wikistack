const express = require("express");
const addpage = require('../views/addPage.js')



const wikiRouter = express.Router();

wikiRouter.get('/', (req, res, next) => {
    res.redirect('/wiki/');
});

wikiRouter.post('/', (req, res, next) => {
    res.json(req.body);
});

wikiRouter.get('/add', (req, res, next) => {
    res.send(addpage());
});


module.exports = wikiRouter;

