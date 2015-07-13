var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var Comment = new Schema({
    title : String,
    user: String
});

mongoose.model('comments', Comment);

mongoose.connect('mongodb://root:root@ds029821.mongolab.com:29821/userstory');