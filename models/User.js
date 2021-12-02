const mongoose = require("mongoose");
const { v4: uuidv4 } = require('uuid');
const newId = uuidv4();

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
    },
  userId: {
        type: String
    },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  fileupload: {
    type:Buffer
  }
}, {
  timestamps:true
});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);
