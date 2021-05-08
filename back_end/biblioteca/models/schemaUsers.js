var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
const normalize = require('normalize-mongoose');

var User = new Schema({
    username: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        default: null
    } 
});

User.plugin(passportLocalMongoose);
User.plugin(normalize);
var user = mongoose.model('User', User)
module.exports = user;