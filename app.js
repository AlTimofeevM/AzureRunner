const sentiment = require('multilang-sentiment');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://user:password123@ds059947.mlab.com:59947/azureapp", { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = mongoose.Schema({
    vkontakteId: String,
    emotion: String
})

const User = mongoose.model('User', userSchema)


let score = sentiment(process.env.TEXT, 'ru').score
let emotion = "Нейтрально эмоциональное сообщение"
if(score < 0){
    emotion = "Негативное эмоциональное сообщение"
}
if(score > 0){
    emotion = "Позитивно эмоциональное сообщение"
}


User.findOneAndUpdate({vkontakteId: process.env.ID}, { emotion :  emotion} , function(err, doc){
    mongoose.disconnect();

    if(err) return console.log(err);
})
