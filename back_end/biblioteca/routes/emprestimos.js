var express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
const emprestimos = require('../models/schemaEmprestimo');
var authenticate = require('../authenticate');
const cors = require('./cors');

router.route('/')
  .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); /* #swagger.ignore = true */ })
  .get(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    /*  
    #swagger.tags = ['Emprestimo']
      #swagger.description = 'texto do emprestimo.'

	#swagger.security = [{
        "bearerAuth": []
	}]
    */
    emprestimos.find({}).populate('livro').populate('usuario')
      .then((emprestimosBanco) => {
        console.log(emprestimosBanco)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(emprestimosBanco);
      }, (err) => next(err))
      .catch((err) => next(err));
  })
  .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    /*  
    #swagger.tags = ['Emprestimo']
      #swagger.description = 'texto do emprestimo.'

    #swagger.security = [{
        "bearerAuth": []
	}]
    */
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
  .options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); /* #swagger.ignore = true */ })
  .get(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    /*  
    #swagger.tags = ['Emprestimo']
      #swagger.description = 'texto do emprestimo.'

	#swagger.security = [{
        "bearerAuth": []
	}]
    */
    emprestimos.findById(req.params.id).populate('livro').populate('usuario')
      .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);

      }, (err) => next(err))
      .catch((err) => next(err));
  })
  .put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
    /*  
    #swagger.tags = ['Emprestimo']
      #swagger.description = 'texto do emprestimo.'

	#swagger.security = [{
        "bearerAuth": []
	}]
    */
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
