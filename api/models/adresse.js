var bcrypt = require('bcryptjs');

module.exports = {
    attributes: {
       rue1: {
             type: 'string',
                minLength: 4,
                required: false
                 },
                  rue2: {
                  type: 'string',
                  minLength: 4,
                  required: false
                         },
                            ville: {
                           type: 'string',
                           minLength: 4,
                           required: false
                            },
                             codeP: {
                              type: 'string',
                                minLength: 4,
                                required: false
                                      },
                       // Add a reference to User
                              owner: {
                               model: 'user'
                                 },

    }
    }
