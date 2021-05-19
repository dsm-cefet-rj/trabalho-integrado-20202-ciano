var express = require('express');
var router = express.Router();

var User = require('../models/schemaUsers');
var passport = require('passport');
var authenticate = require('../authenticate');
const cors = require('./cors');

// router.route('/signup').options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); /* #swagger.ignore = true */ })
// router.post('/signup', cors.corsWithOptions, (req, res, next) => {
// 	/*  
// 	#swagger.tags = ['User']
// 		#swagger.description = 'Rota para a criação de um novo login do usuário.'
// 		#swagger.parameters['obj'] = {
// 				in: 'body',
// 				description: "Dados do login do usuário enviado no corpo da requisição.\n\n	O atributo \"categoria\" podem receber apenas um dos valores a seguir: \"aluno\", \"professor\" ou \"bibliotecario\".\n\n A categoria \"bibliotecario\" concede acesso privilegiado a todas as rotas presentes na API.",
// 				schema: { $ref: "#/definitions/user" }
// 		}
// 		#swagger.responses[200]
// 		#swagger.responses[500]
// 	*/
// 	console.log(req.body);
// 	User.register(new User(req.body), req.body.password,
// 		(err, user) => {
// 			if (err) {
// 				res.statusCode = 500;
// 				res.setHeader('Content-Type', 'application/json');
// 				res.json({ err: err });
// 			} else {
// 				passport.authenticate('local')(req, res, () => {
// 					console.log(req.user)
// 					res.statusCode = 200;
// 					res.setHeader('Content-Type', 'application/json');
// 					res.json({ success: true, status: 'Registration Successful!' });
// 				});
// 			}
// 		});
// });

router.route('/login').options(cors.corsWithOptions, (req, res) => { res.sendStatus(200); /* #swagger.ignore = true */ })
router.post('/login', cors.corsWithOptions, passport.authenticate('local'), (req, res) => {
	/*  
	#swagger.tags = ['User']
		#swagger.description = 'Rota de autenticação do usuário.'
		#swagger.parameters['obj'] = {
			in: 'body',
			description: "Dados do login do usuário enviado no corpo da requisição.",
			schema: { $ref: "#/definitions/login" }
		}
		#swagger.responses[200] = {
			description: 'É retornado o id do login do usuário que foi autenticado, todos os dados do usuário (\"user\") e o token de autenticação.',
			schema: { $ref: "#/definitions/respAuth" }
		}
		#swagger.responses[400]
	*/
	User.findById(req.user._id).select('-salt -hash').populate('usuario')
	.then((userAuth) => {
		console.log(userAuth);
		var token = authenticate.getToken({ _id: req.user._id });
		res.statusCode = 200;
		res.setHeader('Content-Type', 'application/json');
		res.json({ id: req.user._id, user: userAuth, token: token });
	}, (err) => next(err))
	.catch((err) => next(err));
});

router.get('/logout', cors.corsWithOptions, (req, res) => {
	/*  
	#swagger.tags = ['User']
		#swagger.ignore = true 
	*/
	if (req.session) {
		req.session.destroy();
		res.clearCookie('session-id');
		res.redirect('/');
	}
	else {
		var err = new Error('You are not logged in!');
		err.status = 403;
		next(err);
	}
});


module.exports = router;