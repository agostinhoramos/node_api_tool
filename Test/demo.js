const jwt = require('jsonwebtoken');

var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
console.log( token );

jwt.verify(token, 'shhhhh', function(err, decoded) {
    if (err) console.log("Sistem failed!");
    console.log("Ready!!!");
});