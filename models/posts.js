let mongoose = require('mongoose');
let Schema =mongoose.Schema;

let userSchema = new Schema({
    id:Number,
    name:String,
    email:String,
    anonymous:String,
    title:String,
    field:String,
    description:String,
    sources:String,
    output:String

});

 let User = mongoose.model('User',userSchema,'users');


module.exports = {User};