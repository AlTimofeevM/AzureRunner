const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Tesseract = require( 'tesseract.js');

mongoose.connect("mongodb://user:password123@ds059947.mlab.com:59947/azureapp", { useNewUrlParser: true });
console.log(process.env.var1)
console.log(process.env.var2)

const userScheme = new Schema({
    vkontakteId: String,
    imgs : [String]
})
const User = mongoose.model("User", userScheme);
User.create({vkontakteId : process.env.var1}, function(err, doc){
    mongoose.disconnect();

    if(err) return console.log(err);
});

