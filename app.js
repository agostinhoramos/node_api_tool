// Import express.js
let express = require('express');

// Import body parser
let bodyParser = require('body-parser');

// .Env
const dotenv = require('dotenv');
dotenv.config();


// Import mongoose
let app = express();
const cors = require("cors");

// Configure bodyparser to process orders
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


const db = require("./models/index.model");
const Role = db.role;


// Connect to DB ##localhost api_covid
db.mongoose.connect(
    `${process.env.MONGO_HOST}/${process.env.MONGO_DBNAME}`, 
    {useNewUrlParser: true, useUnifiedTopology: true}
)
.then(() => {
    // Port Server
    const PORT = process.env.PORT || 3000; 
    app.listen(PORT, function() {
        console.log(`Server running: http://127.0.0.1:${PORT}`);
    });
    initial();
    console.log("Successfully connect to MongoDB.");
})
.catch(err => {
    console.error("Connection error", err);
    process.exit();
});

// Use API routes in the app

// routes
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

// Without authentication ..
app.use('/api/covid', require("./routes/covid.route") );

function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          name: db.ROLES[0]
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log(`added '${db.ROLES[0]}' to roles collection`);
        });
        new Role({
          name: db.ROLES[2]
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log(`added '${db.ROLES[2]}' to roles collection`);
        });
        new Role({
          name: db.ROLES[1]
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log(`added '${db.ROLES[1]}' to roles collection`);
        });
      }
    });
}