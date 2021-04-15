var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const usuarios = require('../models/schemaUsuario');

router.route('/')
  .get((req, res, next) => {
    usuarios.find({})
      .then((usuariosBanco) => {
        console.log(usuariosBanco)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(usuariosBanco);
      }, (err) => next(err))
      .catch((err) => next(err));
  })
  .post((req, res, next) => {
    usuarios.create(req.body)
      .then((usuario) => {
        console.log('usuario criado', usuario);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(usuario);
      }, (err) => next(err))
      .catch((err) => next(err));

  })
router.route('/:id')
  .get((req, res, next) => {
    usuarios.findById(req.params.id)
      .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);

      }, (err) => next(err))
      .catch((err) => next(err));
  })
  .put((req, res, next) => {
    usuarios.findByIdAndUpdate(req.params.id, {
      $set: req.body
    }, { new: true })
      .then((usuario) => {
        console.log(usuario);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(usuario);
      }, (err) => next(err))
      .catch((err) => next(err));

  })

module.exports = router;