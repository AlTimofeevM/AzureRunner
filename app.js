const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Tesseract = require('tesseract.js');

mongoose.connect("mongodb://user:password123@ds059947.mlab.com:59947/azureapp", { useNewUrlParser: true });

const imgSchema = mongoose.Schema({
    link : String,
    text : String
})

const Img = mongoose.model('Img', imgSchema);

Tesseract.recognize(
    process.env.LINK,
    process.env.LANG,
    { logger: m => console.log(m) }
        ).then(({ data: { text } }) => {
    Img.findOneAndUpdate({_id:process.env.ID}, {text : text} , function(err, doc){
        mongoose.disconnect();
    
        if(err) return console.log(err);
        })
    })

