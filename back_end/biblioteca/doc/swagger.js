const options = {
    openapi: null,          // By default is null
    language: 'pt-BR',      // By default is 'en-US'
    disableLogs: false,     // By default is false
    disableWarnings: false  // By default is false
}
const swaggerAutogen = require('swagger-autogen')(options);

const doc = {
    info: {
        title: "University Library API",
        description: "API REST que "
    },
    host: "localhost:3004",
    basePath: "/",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
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
        user: {
            username: "1234567ABC",
            password: "123456",
            admin: false
        },

        usuario: {
            id: "6078ac02c2c8e00c6cfdeb55",
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
        },

        usuarios: [{ $ref: '#/definitions/usuario' }],

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
            id: "608b1a5ca38be4147c7528ad",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDhiMWE1Y2EzOGJlNDE0N2M3NTI4YWQiLCJpYXQiOjE2MjAzMjg5NjgsImV4cCI6MTYyMDMzMjU2OH0.-FfLiWBmi8U19gCBBACKLYKQiKQCyUHIVY4a3IWhcxQ"
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