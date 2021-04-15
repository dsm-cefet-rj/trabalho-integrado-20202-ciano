const mongoose = require('mongoose');
const Schema = mongoose.Schema
const normalize = require('normalize-mongoose');
const emprestimoSchema = new Schema({

    id: {
        type: String,
        required: false
    },

    livroId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Livro'
    },

    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    },

    data_emprestimo: {
        type: String,
        required: true
    },

    data_devolucao: {
        type: String,
        required: true
    },

    qtd_renovacoes: {
        type: Number,
        default: 0
    },

    data_devolvido: {
        type: String,
        default: null
    },

    data_excluido: {
        type: String,
        default: null
    }

})
emprestimoSchema.plugin(normalize);
var emprestimos = mongoose.model('emprestimos', emprestimoSchema)
module.exports = emprestimos;