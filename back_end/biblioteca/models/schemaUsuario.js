const mongoose = require('mongoose');
const Schema = mongoose.Schema
const normalize = require('normalize-mongoose');

const usuarioSchema = new Schema({
    id: {
        type: String,
        required: false
    },
    matricula: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    data_nasc: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        require: true
    },
    logradouro: {
        type: String,
        require: true
    },
    complemento: {
        type: String,
        require: true
    },
    cidade: {
        type: String,
        require: true
    },
    bairro: {
        type: String,
        require: true
    },
    cep: {
        type: String,
        require: true
    },
    data_excluido: {
        type: String,
        default: null
    },
});

usuarioSchema.plugin(normalize);
var usuarios = mongoose.model('usuarios', usuarioSchema)
module.exports = usuarios;