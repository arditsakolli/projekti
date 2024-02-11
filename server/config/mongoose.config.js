const mongoose = require('mongoose');
//This will create a database named "person" if one doesn't already exist (no need for mongo shell!):
mongoose.connect("mongodb://127.0.0.1:27017/projects", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));
































// // module.exports = connectDB;

// const mongoose = require('mongoose');  //importing the library we installed mongoose

// //and than we are using conect  to conect with our database
//                                             //name of our db
// mongoose.connect('mongodb://127.0.0.1:27017/projects', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// //promiuses so if it goes well we will se in console Database connected
//     .then(() => console.log("Database connected"))
//     //if it goes wrong wi will see "Something went wrong when connecting to the database" printing the error in console
//     .catch(err => console.log("Something went wrong when connecting to the database", err));
