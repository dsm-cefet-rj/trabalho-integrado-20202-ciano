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
			#swagger.description = 'Retornar todos os livros. A rota exige estar previamente autenticado.'
			#swagger.security = [{
				"bearerAuth": []
			}] 
			#swagger.responses[200] = { 
				description: 'Retorna todos os livros salvos no Banco de Dados.',
				schema: { $ref: "#/definitions/livros" }
			}
			#swagger.responses[401]
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
			#swagger.description = 'Registrar um novo livro. A rota exige estar previamente autenticado.'
			#swagger.security = [{
				"bearerAuth": []
			}]  
			#swagger.parameters['obj'] = {
				in: 'body',
				schema: {
					$isbn: "9788540701694",
					$titulo: "Livro1",
					$autores: ["Autor1", "Autor2"],
					$edicao: "3ª",
					$cod_localizacao: "S15P7-7",
					$qtd_total: 10,
					data_excluido: "26/03/2021"
				}
			}
			#swagger.responses[200]
			#swagger.responses[401]
			#swagger.responses[500]
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
			#swagger.description = 'Retorna o livro que foi especificado na rota. A rota exige estar previamente autenticado.'
			#swagger.security = [{
				"bearerAuth": []
			}]
			#swagger.parameters['id'] = {
				description: "Id do livro que deseja retornar.",
			}
			#swagger.responses[200] = {
				schema: { $ref: "#/definitions/livro" }
			}
			#swagger.responses[401]
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
			#swagger.description = 'Rota para atualizar informações do livro que foi especificado na rota. A rota exige estar previamente autenticado.'
			#swagger.security = [{
				"bearerAuth": []
			}]
			#swagger.parameters['id'] = {
				description: "Id do livro que deseja atualizar.",
			}
			#swagger.parameters['obj'] = {
				in: 'body',
				description: "É possivel passar no body apenas os campos que serão atualizados, pois todos os campos são opcionais.",
				schema: {
					isbn: "9788540701694",
					titulo: "Livro1",
					autores: ["Autor1", "Autor2"],
					edicao: "3ª",
					cod_localizacao: "S15P7-7",
					qtd_total: 10,
					data_excluido: "26/03/2021"
				}
			}
			#swagger.responses[200]
			#swagger.responses[401]
			#swagger.responses[500]
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
