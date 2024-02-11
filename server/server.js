// const express = require('express');
// const cors = require('cors');
// const app = express();
// const connectDB = require('./config/project.db.config');

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// connectDB(); // Connect to the default database

// // Your routes and other configurations...

// app.listen(8000, () => console.log('Server is running on port 8000'));






const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');

require('dotenv').config();   

app.use(express.json());                           /* This is new and allows JSON Objects to be posted */
app.use(express.urlencoded({ extended: true }));   /* This is new and allows JSON Objects with strings and arrays*/

app.use(cors({
    origin: 'http://localhost:5173', // Update with your client's origin
    credentials: true,
  }));
  app.use(cookieParser());

require('./config/mongoose.config');   
require('./routes/project.routes')(app);
require('./routes/user.routes')(app);


app.listen(8000, () => {
    console.log("Listening at Port 8000")
})



// const express = require('express');
// const cors = require('cors');
// const socket = require('socket.io');
// const app = express();

// app.use(cors());
// app.use(express.json());                           
// app.use(express.urlencoded({ extended: true })); 

// require('./config/mongoose.config');      //config to our db
// require('./routes/project.routes')(app);       //config to our routes
// require('./routes/user.routes')(app);





// const io = socket(server, {
//     cors: {
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST'],
//         allowedHeaders: ['*'],
//         credentials: true,
//     }
// })

// io.on('connection', (socket) => {
//     console.log('New client connected')
//     socket.on('toServer', data => {
//         io.emit('toClient', data);
//     });
//     socket.on('disconnected', () => {
//         console.log('Client disconnected')
//     })
// })


// // const express = require('express');
// // const cors = require('cors');
// // const app = express();

// // app.use(cors());
// // app.use(express.json());                           
// // app.use(express.urlencoded({ extended: true })); 

// const userRoutes= require('./routes/user.routes')
// userRoutes= (app)
// const server = app.listen(8000, () => {
//     console.log("Listening at Port 8000")
// })