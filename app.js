// Import express.js
let express = require('express');

// Import body parser
let bodyParser = require('body-parser');

// .Env
const dotenv = require('dotenv');
dotenv.config();


// Import mongoose
let mongoose = require('mongoose');
let app = express();


// Import routes
let apiRoutes = require("./routes/covid.route");


// Configure bodyparser to process orders
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// Connect to DB ##localhost api_covid
const mongo = mongoose.connect(
    `${process.env.MONGO_HOST}/${process.env.MONGO_DBNAME}`, 
    {useNewUrlParser: true, useUnifiedTopology: true}
);
mongo.then(() => {
    start_server();
}, error => {
    console.log(error, 'Error!');
});

// Port Server
const PORT = process.env.PORT || 3000;

// Use API routes in the app
app.use('/api/covid', apiRoutes)

// Start Server
const start_server = function(){
    var db = mongoose.connection;
    // Check Connection
    if (!db)
        console.log("Error connecting DB");
    else
        console.log("DB Connected!");

    app.listen(PORT, function() {
        console.log(`Server running: http://127.0.0.1:${PORT}`);
    });
}