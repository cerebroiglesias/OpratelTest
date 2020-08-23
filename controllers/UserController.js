const User = require("../models/User");
const crypto = require("../libs/crypto");

exports.module = (() => {
    return {
        createUser: async function(user, callback){
            var response;
            user.Password = crypto.module.cryptPassword(user.Password);
            const dbuser = new User(user);
            try{
                response = await dbuser.save();
            }catch(error){
                response = error;
            }
            return response;
        },
        
        updateUser: async function(user, callback){
            var response;
            try{
                response = await User.findByIdAndUpdate({ _id: user._id.toString()}, user, { 
                    new: true,
                    useFindAndModify: false
                });
            
            }catch(error){
                response = error;
            }
            return response;
        },
        
        removeUser: async function(user){
            var response;
            const dbuser = new User(user);
            try{
                response = await User.findOneAndRemove({_id: user._id.toString()});
            }catch(error){
                response = error;
            }
            return response;
        },

        loginUser: async function(user){
            var user = await new User.findOne({
                Email: user.Email,
                Password: crypto.module.cryptPassword(user.Password)
            }).toObject();
            return user;
        }
    }
})();