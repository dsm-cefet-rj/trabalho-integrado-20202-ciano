var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const emprestimos = require('../models/schemaEmprestimo');

router.route('/')
  .get((req, res, next) => {
    emprestimos.find({})
      .then((emprestimosBanco) => {
        console.log(emprestimosBanco)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(emprestimosBanco);
      }, (err) => next(err))
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    emprestimos.create(req.body)
      .then((emprestimo) => {
        console.log('emprestimo criado', emprestimo);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(emprestimo);
      }, (err) => next(err))
      .catch((err) => next(err));

  })
router.route('/:id')
  .get((req, res, next) => {
    emprestimos.findById(req.params.id)
      .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);

      }, (err) => next(err))
      .catch((err) => next(err));
  })
  .put((req, res, next) => {
    emprestimos.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true })
      .then((emprestimo) => {
        console.log(emprestimo);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(emprestimo);
      }, (err) => next(err))
      .catch((err) => next(err));

  })

module.exports = router;
