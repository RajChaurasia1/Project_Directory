let mongoose = require('mongoose');
let Schema =mongoose.Schema;

let logSchema = new Schema({
    
    email:String,
    password:String

});


let Log = mongoose.model('Log',logSchema,'loginregister');


module.exports = {Log}


