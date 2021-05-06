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
			#swagger.description = 'Retorna todos os empréstimos salvos no Banco de Dados. A rota exige estar previamente autenticado.'
			#swagger.security = [{
				"bearerAuth": []
			}]
			#swagger.responses[200] = { 
				description: 'Retorna todos os empréstimos salvos no Banco de Dados.',
				schema: { $ref: "#/definitions/emprestimos" }
			}
			#swagger.responses[401]
		*/
		emprestimos.find({}).populate('livro').populate('usuario')
			.then((emprestimosBanco) => {
				console.log(emprestimosBanco);
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(emprestimosBanco);
			}, (err) => next(err))
			.catch((err) => next(err));
	})
	.post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
		/*  
		#swagger.tags = ['Emprestimo']
				#swagger.description = 'Registrar um novo empréstimo. A rota exige estar previamente autenticado.'
			#swagger.security = [{
				"bearerAuth": []
			}]
	
			#swagger.parameters['obj'] = {
				in: 'body',
				schema:{
					$data_emprestimo: "15/04/2021",
					$data_devolucao: "29/06/2021",
					$livro: "6078c204fa3b833af441cdf8",
					$usuario: "6078ac02c2c8e00c6cfdeb55",
				}
			}
			#swagger.responses[200]
			#swagger.responses[401]
			#swagger.responses[500]
		*/
		console.log(req.body);
		emprestimos.create(req.body)
			.then((emprestimo) => {
				console.log('Emprestimo criado', emprestimo);
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
		  	#swagger.description = 'Retorna o empréstimo que foi especificado na rota. A rota exige estar previamente autenticado.'
			#swagger.security = [{
				"bearerAuth": []
			}]
			#swagger.parameters['id'] = {
				description: "Id do empréstimo que deseja retornar.",
			}
			#swagger.responses[200] = { 
				description: 'Retorna o empréstimo e o usuário e livro relacionados a ele.',
				schema: { $ref: "#/definitions/emprestimoPopulado" }
			}
			#swagger.responses[401]
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
		  	#swagger.description = 'Rota para atualizar informações do empréstimo que foi especificado na rota. A rota exige estar previamente autenticado.'
			#swagger.security = [{
				"bearerAuth": []
			}]
			#swagger.parameters['obj'] = {
				in: 'body',
				description: "É possivel passar no body apenas os campos que serão atualizados, pois todos os campos são opcionais.",
				schema:{
					qtd_renovacoes: 1,
					data_emprestimo: "15/04/2021",
					data_devolucao: "29/06/2021",
					data_devolvido: "26/03/2021",
					data_excluido: "30/04/2021",
					livro: "6078c204fa3b833af441cdf8",
					usuario: "6078ac02c2c8e00c6cfdeb55",
				}
			}
			#swagger.responses[200]
			#swagger.responses[401]
			#swagger.responses[500]
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
