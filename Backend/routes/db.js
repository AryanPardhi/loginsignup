const mongoose = require('mongoose') ;
mongoose.connect("mongodb://127.0.0.1:27017/PMS")

const example = mongoose.Schema({
  name : String
})

module.exports = mongoose.model("PMS",example);