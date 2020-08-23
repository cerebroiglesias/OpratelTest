const mongoose = require('mongoose');

module.exports = {
    async getDb(){
        try {
            await mongoose.connect('mongodb://localhost:27017', {
                dbName: 'opratel',
                useNewUrlParser: true,
                useUnifiedTopology: true,
                user: '',
                pass: ''
            });
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
};