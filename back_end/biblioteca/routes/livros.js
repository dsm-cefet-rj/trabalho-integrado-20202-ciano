var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const livros = require('../models/schemaLivro');
var authenticate = require('../authenticate');
const cors = require('./cors');

/* GET users listing. */

router.route('/')
  .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); /* #swagger.ignore = true */ })
  .get(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    /*  
    #swagger.tags = ['Livro']
      #swagger.description = 'texto do livro.'

    #swagger.security = [{
        "bearerAuth": []
	}] 
        */
    livros.find({})
      .then((livrosBanco) => {
        console.log(req.user)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(livrosBanco);
      }, (err) => next(err))
      .catch((err) => next(err));
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    /*  
    #swagger.tags = ['Livro']
      #swagger.description = 'texto do livro.'

	#swagger.security = [{
        "bearerAuth": []
	}]  
    */
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
  .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); /* #swagger.ignore = true */ })
  .get(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    /*  
    #swagger.tags = ['Livro']
      #swagger.description = 'texto do livro.'

	#swagger.security = [{
        "bearerAuth": []
	}]
    */
    livros.findById(req.params.id)
      .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
      }, (err) => next(err))
      .catch((err) => next(err));
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    /*  
    #swagger.tags = ['Livro']
      #swagger.description = 'texto do livro.'

	#swagger.security = [{
        "bearerAuth": []
	}]
    */
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
