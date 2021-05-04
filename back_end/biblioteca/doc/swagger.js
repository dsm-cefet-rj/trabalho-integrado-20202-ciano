const options = {
    openapi: '3.0.0',          // By default is null
    language: 'pt-BR',         // By default is 'en-US'
}
const swaggerAutogen = require('swagger-autogen')(options);

const doc = {
    info: {
        title: "University Library API",
        description: "Description"
    },
    host: "localhost:3004",
    basePath: "/",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "User",
            "description": "Opa"
        },
        {
            "name": "Usuario",
            "description": "Descrição Usuário"
        },
        {
            "name": "Livro",
            "description": "Rotas de Livro"
        },
        {
            "name": "Emprestimo",
            "description": "Rotas de Emprestimo"
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT",
                description: "Autenticação e controle de acesso baseado em JWT."
            }
        }
},
    definitions: {
        User: {},
        Usuario: {},
        Livro: {
            $id: "6078ac2cc2c8e00c6cfdeb56",
            $isbn: "9788540701694",
            $titulo: "Livro1",
            $autores: ["Autor1", "Autor2"],
            $edicao: "3ª",
            $cod_localizacao: "S15P7-7",
            $qtd_total: 10,
            data_excluido: "26/03/2021"
        },
        Emprestimo: {}
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