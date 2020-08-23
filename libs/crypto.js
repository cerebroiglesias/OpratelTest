var bcrypt = require('bcrypt');

exports.module = (()=>{
  return {
    cryptPassword: function(password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    },
    
    comparePassword: function(plainPass, hashword) {
      return bcrypt.compareSync(plainPass, hashword);
    }
  };
})();