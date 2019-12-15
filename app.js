const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://user:password123@ds059947.mlab.com:59947/azureapp", { useNewUrlParser: true });


const userScheme = new Schema({
    vkontakteId: String,
    imgs : [String]
})
const User = mongoose.model("User", userScheme);
User.create({vkontakteId : "Ну да ну да"}, function(err, doc){
    mongoose.disconnect();

    if(err) return console.log(err);
});

