const options = {
    openapi: null,          // By default is null
    language: 'pt-BR',      // By default is 'en-US'
    disableLogs: false,     // By default is false
    disableWarnings: false  // By default is false
}
const swaggerAutogen = require('swagger-autogen')(options);

const doc = {
    info: {
        title: "University Library API"
    },
    host: "localhost:3004",
    basePath: "/",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    securityDefinitions: {
        bearerAuth: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
            description: "Autenticação JWT, no campo value insira a palavra bearer antes do token. \nEx: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
        },
    },
    tags: [
        {
            "name": "User",
            "description": "Rotas responsáveis pela autenticação do usuário."
        },
        {
            "name": "Usuario",
            "description": "Rotas responsáveis pelo perfil do usuário."
        },
        {
            "name": "Livro",
            "description": "Rotas de Livro."
        },
        {
            "name": "Emprestimo",
            "description": "Rotas de Emprestimo."
        }
    ],
    definitions: {
        usuario: {
            id: "6078ac02c2c8e00c6cfdeb55",
            matricula: "1843234BCC",
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
        },

        usuarios: [{ $ref: '#/definitions/usuario' }],

        user: {
            $username: "1843234BCC",
            $password: "123456",
            $categoria: "bibliotecario",
            $usuario: "6078ac02c2c8e00c6cfdeb55"
        },

        livro: {
            id: "6078ac2cc2c8e00c6cfdeb56",
            isbn: "9788540701694",
            titulo: "Livro1",
            autores: ["Autor1", "Autor2"],
            edicao: "3ª",
            cod_localizacao: "S15P7-7",
            qtd_total: 10,
            data_excluido: "26/03/2021"
        },

        livros: [{ $ref: '#/definitions/livro' }],

        emprestimo: {
            id: "6078c204fa3b833af441cdf8",
            qtd_renovacoes: 0,
            $data_emprestimo: "15/04/2021",
            $data_devolucao: "29/06/2021",
            data_devolvido: "26/03/2021",
            data_excluido: "30/04/2021",
            $livro: "6078c204fa3b833af441cdf8",
            $usuario: "6078ac02c2c8e00c6cfdeb55",
        },

        emprestimoPopulado: {
            id: "6078c204fa3b833af441cdf8",
            qtd_renovacoes: 2,
            data_emprestimo: "15/04/2021",
            data_devolucao: "29/06/2021",
            data_devolvido: "26/03/2021",
            data_excluido: "30/04/2021",
            livro: { $ref: '#/definitions/livro' },
            usuario: { $ref: '#/definitions/usuario' }
        },

        emprestimos: [{ $ref: '#/definitions/emprestimoPopulado' }],

        respAuth: {
            id: "6096fd879a1bae1ca49e2428",
            user: {
              usuario: { $ref: '#/definitions/usuario' } ,
              username: "1843234BCC",
              categoria: "bibliotecario",
              id: "6096fd879a1bae1ca49e2428"
            },
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDk2ZmQ4NzlhMWJhZTFjYTQ5ZTI0MjgiLCJpYXQiOjE2MjA1MTI1NDksImV4cCI6MTYyMDUxNjE0OX0.QElggzQNPVakO4rkTC_5JAWOmwYJxnxkTOMQmAtkdsU"
          }
    }
}

const outputFile = './doc/swagger-output.json';
const endpointsFiles = ['./app.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('../bin/www')
})