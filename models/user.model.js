var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    name : {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    email: String,
    password: {
        type: String,
        required: true
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
}, { timestamps: true });

// Export model
module.exports =  mongoose.model(
    'User', 
    UserSchema
);