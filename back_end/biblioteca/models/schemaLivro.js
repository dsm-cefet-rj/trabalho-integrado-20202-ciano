const mongoose = require('mongoose');
const Schema = mongoose.Schema
const normalize = require('normalize-mongoose');
const livroSchema = new Schema({
    id: {
        type: String,
        required: false
    },
    isbn: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    edicao: {
        type: String,
        required: true
    },

    autores: [{
        type: String,
        required: true

    }],
    cod_localizacao: {
        type: String,
        required: true

    },
    qtd_total: {
        type: Number,
        required: true

    },
    data_excluido: {
        type: String,
        default: null

    }

})
livroSchema.plugin(normalize);
var livros = mongoose.model('Livro', livroSchema)
module.exports = livros;
