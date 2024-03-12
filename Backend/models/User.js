const mongoose = require("mongoose");

const Userschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  },
  phone:{
    type:Number,
    require:true,
    unique:true,
    match:/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/

  },
  password: {
    type: String,
    required: true,
  },
  role:{
    default:"None",
    type:String,
  }
});

module.exports = mongoose.model("User", Userschema);
