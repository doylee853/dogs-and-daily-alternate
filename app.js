require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const session = require('express-session');

// var mongoDB = 'mongodb://127.0.0.1/my_database';
// mongoose.connect(mongoDB)

//define modules we use
const DogModel = require('./model/dog');
const Dog = require('./model/dog');

var dogName = "Little Dog";
var picture = "https://www.thesprucepets.com/thmb/fwkpUm8XkRQgNyy3vqOkTY3oGhc=/3797x2848/smart/filters:no_upscale()/you-have-called-me-dwarf-hamster-6-weeks-old-184337772-5848b1065f9b58dccc9fc10c.jpg";
var quote = " is a hamster, but has the heart of a dog. He is here to say that he likes your shirt, you should wear it more often. And he wants to remind you that it's always okay to talk to people you trust when you're feeling down or depressed, even if it's just your dog. They'll listen!";


const app = express();

app.use(bodyParser.json());

app.set("views", path.join(__dirname,"/views/"));

app.use(express.static(path.join(__dirname, 'client')));
app.set('view engine', 'ejs');
app.set('view engine', 'hbs');

app.set("views", path.join(__dirname,"/views"));

app.get('/',function(req, res) {
    var tempsession = req.session;
    // res.sendFile(path.join(__dirname, './views/index.html'));
    res.render("main-page.ejs",{
        dogName: dogName,
        picture: picture,
        quote: quote
    });
});

// const uri = "mongodb+srv://ethanUser:ethanPassword@cluster0.58itw.mongodb.net/test?retryWrites=true&w=majority";
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
// .then(() => {
//     console.log('MongoDB Connected!');
// })
// .catch(err => console.log(err));

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// .toArray(function(err, result) {
//     if (err) throw err;
//     console.log(result);
// });

// var DogSchema = mongoose.Schema({
//     dogName: String,
//     picture: String
// });

// var dogM = mongoose.model('dogM', DogSchema, 'dogs');

var dogNames = ['Kota', 'Finn', 'Little Dog', 'Jacob'];
var dogPictures = ['https://starpng.com/public/uploads/preview/standing-dog-png-6-115822268316vcw9ormvg.png', 'https://www.clipartkey.com/mpngs/m/226-2267042_vicious-dogs-png-rottweiler-png.png', 'https://www.thesprucepets.com/thmb/fwkpUm8XkRQgNyy3vqOkTY3oGhc=/3797x2848/smart/filters:no_upscale()/you-have-called-me-dwarf-hamster-6-weeks-old-184337772-5848b1065f9b58dccc9fc10c.jpg', 'https://www.pngkey.com/png/detail/1-16476_golden-retriever-dog-png-free-dog-png.png'];
var quotes = [" is here to remind you to go easy on yourself today. Take some time to get a treato, enjoy the outside (if it's nice out), and take your dog on a walk. Maybe get him a treat too. ", " wants to wish you good luck today. Whether it be with school or work or anything else, keep killing it. And that it's time to get another dog :)", " is a hamster but has the heart of a dog. He is here to say that he likes your shirt, you should wear it more often. And he wants to remind you that it's always okay to talk to people you trust when you're feeling down or depressed, even if it's just your dog. They'll listen!", " is here to tell you that you're doing a great job, even if things are looking bleak. There will always be better times ahead, and more dogs to see, and you don't want to miss those."];
var counter = 2;

setInterval(function() {
    counter++;
    if (counter == 4){
        counter = 0;
    }
    dogName = dogNames[counter];
    picture = dogPictures[counter];
    quote = quotes[counter];
}, 30000);


// setInterval(function() {db.collection("dogs").findOne({}, function(err, result){
//     if (err) throw err;
//     console.log(result.dogName);
//     dogName = result.dogName;
//     picture = result.picture;

//     var dog = new dogM({ dogName: dogName, picture: picture});
//     dog.save(function (err, dogM){
//         if (err) return console.error(err);
//         console.log('hopefully saved!');
//     });
// })}, 8000);

// setInterval(function() {db.collection("dogs").findOneAndDelete({}, function(err, result){
//     if (err) throw err;
//     console.log(result.dogName)
// })}, 8000);




// function(err, db) {
//     if (err) throw err;
//     var dogdb = db.db("test");
//     dogdb.collection("dogs").findOne({}, function(err, result){
//         if (err) throw err;
//         console.log(result.dogName);
//         dogName = result.dogName;
//         picture = result.picture;
//     });


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://ethanUser:ethanPassword@cluster0.58itw.mongodb.net/dogs-and-daily-reminders?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

// var first_instance = new DogModel({
//     dogName: 'Finn',
//     picture: 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/33994826_10212553022881579_5701784890366754816_o.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=P2N50s9Rt6QAX_gLw5D&_nc_ht=scontent-lga3-2.xx&oh=9ba0d1368c5162e9d94119a55cd8b340&oe=6039C129'
// });

// first_instance.save(function (err){
//     if (err) return handleError(err);
// });

app.listen(port);
