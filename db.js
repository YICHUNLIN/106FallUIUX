var mongoose = require( 'mongoose' );
var Schema   = mongoose.Schema;
 
var User = new Schema({
    account    : String,
    password  : String,
    firstname   : String,
    lastname  : String,
    description : String,
    photo	: String,
    updated_at : Date
});


mongoose.model( 'User', User );
mongoose.connect( 'mongodb://uiux.kmtree.me/uiux' );