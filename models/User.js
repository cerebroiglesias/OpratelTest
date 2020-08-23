const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Password: String,
    Nombre: String,
    Apellido: String,
    Email: String
}, { collection: 'users' });

const User = mongoose.model('User', userSchema);

module.exports = User;