const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Tesseract = require('tesseract.js');

mongoose.connect("mongodb://user:password123@ds059947.mlab.com:59947/azureapp", { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = mongoose.Schema({
    vkontakteId: String,
    available: Number,
    link: String,
    text: String
})

const User = mongoose.model('User', userSchema)

Tesseract.recognize(
    process.env.LINK,
    process.env.LANG,
    { logger: m => console.log(m) }
        ).then(async ({ data: { text } }) => {
    await User.findOneAndUpdate({vkontakteId: process.env.ID}, {text : text} , function(err, doc){
        mongoose.disconnect();
    
        if(err) return console.log(err);
        })
    }).catch((error) => {
        console.log(error)
    });