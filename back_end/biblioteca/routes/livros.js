var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const livros = require('../models/schemaLivro');

/* GET users listing. */

router.route('/')
  .get((req, res, next) => {
    livros.find({})
      .then((livrosBanco) => {
        console.log(livrosBanco)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(livrosBanco);
      }, (err) => next(err))
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    livros.create(req.body)
      .then((livro) => {
        console.log('livro criado', livro);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(livro);


      }, (err) => next(err))
      .catch((err) => next(err));

  })
router.route('/:id')
  .get((req, res, next) => {
    livros.findById(req.params.id)
      .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
      }, (err) => next(err))
      .catch((err) => next(err));
  })
  .put((req, res, next) => {
    livros.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true })
      .then((livro) => {
        console.log(livro);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(livro);
      }, (err) => next(err))
      .catch((err) => next(err));

  })

module.exports = router;
