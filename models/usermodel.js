const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type:String},
    password:{type:String},
    email:{type:String}
},{timestamps:true})

const userModel = mongoose.model('Users',userSchema);
module.exports = userModel;


