var express = require('express');
var router = express.Router();
const usuarios = require('../models/schemaUsuario');
var authenticate = require('../authenticate');
const cors = require('./cors');
const users = require('../models/schemaUsers');

router.route('/')
	.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); /* #swagger.ignore = true */ })
	.get(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
		/*  
		#swagger.tags = ['Usuario']
				#swagger.description = 'Retornar todos os usuários. A rota exige estar previamente autenticado.'
			#swagger.security = [{
				"bearerAuth": []
			}] 
			#swagger.responses[200] = { 
				description: 'Retorna todos os usuários salvos no Banco de Dados.',
				schema: { $ref: "#/definitions/usuarios" }
			}
			#swagger.responses[401]
		*/
		usuarios.find({})
			.then((usuariosBanco) => {
				console.log(usuariosBanco)
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(usuariosBanco);
			}, (err) => next(err))
			.catch((err) => next(err));
	})
	.post(cors.corsWithOptions, authenticate.verifyUser, async (req, res, next) => {
		/*  
		#swagger.tags = ['Usuario']
				#swagger.description = 'Registrar um novo perfil do usuário. A rota exige estar previamente autenticado.'
			
			#swagger.security = [{
				"bearerAuth": []
			}]

			#swagger.parameters['obj'] = {
				in: 'body',
				schema: {
					$matricula: "1843234BCC",
					$senha: "123456",
					$categoria: "bibliotecario",
					$nome: "Pablo Ricardo",
					$data_nasc: "26/03/1999",
					$email: "pablo@gmail.com",
					$telefone: "21 97548-5545",
					$cep: "20564-070",
					$bairro: "Centro",
					$cidade: "Rio",
					$complemento: "Apartamento 501",
					$logradouro: "Rua Presidente Vargas 232",
					data_excluido: "26/03/2021"
				}
			}
			#swagger.responses[200]
			#swagger.responses[401]
			#swagger.responses[500]
		*/

		const usuarioData = req.body;
		const usuario = await usuarios.create(usuarioData)
		const user = new users({
			username: usuarioData.matricula,
			categoria: usuarioData.categoria,
			usuario: usuario._id,
		})
		await users.register(user, usuarioData.senha);
		return res.json(usuario)

		// usuarios.create(req.body)
		// 	.then((usuario) => {
		// 		console.log('usuario criado', usuario);
		// 		res.statusCode = 200;
		// 		res.setHeader('Content-Type', 'application/json');
		// 		res.json(usuario);
		// 	}, (err) => next(err))
		// 	.catch((err) => next(err));

	})
router.route('/:id')
	.options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); /* #swagger.ignore = true */ })
	.get(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
		/*  
		#swagger.tags = ['Usuario']
				#swagger.description = 'Retorna o usuário que foi especificado na rota. A rota exige estar previamente autenticado.'
			#swagger.security = [{
				"bearerAuth": []
			}]
			#swagger.parameters['id'] = {
				description: "Id do usuário que deseja retornar.",
			}
			#swagger.responses[200] = {
				schema: { $ref: "#/definitions/usuario" }
			}
			#swagger.responses[401]
		*/
		usuarios.findById(req.params.id)
			.then((resp) => {
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(resp);

			}, (err) => next(err))
			.catch((err) => next(err));
	})
	.put(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
		/*  
		#swagger.tags = ['Usuario']
			#swagger.description = 'Rota para atualizar informações do usuário que foi especificado na rota. A rota exige estar previamente autenticado.'
			#swagger.security = [{
				"bearerAuth": []
			}]
			#swagger.parameters['id'] = {
				description: "Id do perfil usuário que deseja atualizar.",
			}
			#swagger.parameters['obj'] = {
				in: 'body',
				description: "É possivel passar no body apenas os campos que serão atualizados, pois todos os campos são opcionais.",
				schema: {
					matricula: "1843234BCC",
					senha: "123456",
					categoria: "bibliotecario",
					nome: "Pablo Ricardo",
					data_nasc: "26/03/1999",
					email: "pablo@gmail.com",
					telefone: "21 97548-5545",
					cep: "20564-070",
					bairro: "Centro",
					cidade: "Rio",
					complemento: "Apartamento 501",
					logradouro: "Rua Presidente Vargas 232",
					data_excluido: "26/03/2021"
				}
			}
			#swagger.responses[200]
			#swagger.responses[401]
			#swagger.responses[500]

		*/
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
