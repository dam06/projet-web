var bcrypt = require('bcryptjs');

module.exports = {
    attributes: {
        email: {
            type: 'email',
            required: true,
            unique: true
        },
        password: {
            type: 'string',
            minLength: 6,
            required: true
        },
          nom: {
                    type: 'string',
                    minLength: 3,
                    required: false
                },
                  prenom: {
                            type: 'string',
                            minLength: 3,
                            required: false
                        },
                          pseudo: {
                                    type: 'string',
                                    minLength: 3,
                                    required: false
                                },

                                 urlAvatar: {
                                  type: 'string',
                                 minLength: 3,
                                  required: false
                                  },





   // Add a reference to Pets
    adresses: {
      collection: 'adresse',
      via: 'owner'
    },

        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },
    beforeCreate: function(user, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    console.log(err);
                    cb(err);
                } else {
                    user.password = hash;
                    cb();
                }
            });
        });
    }
};

