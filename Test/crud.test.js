const request = require('request');
const API_URL = "http://127.0.0.1:8888/api/covid";
var _id = null;

init();

function init(){
    test_create(function(){
        test_retrieve(function(){
            test_update(function(){
                test_delete(function(){
                    test_retrieveall(function(){
                        console.log("Test passed!");
                    });
                });
            });
        });
    });
}

function test_create (next){
    var options = {
        'method': 'POST',
        'url': `${API_URL}/create`,
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "country": "São Tomé",
            "state": "São Tomé",
            "lat": 0.02,
            "long": 0.012,
            "date": "14/02/2021"
        })
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        _id = JSON.parse(response.body)._id;
        console.log(response.body);
        next();
    });
}

function test_retrieve(next){
    var options = {
        'method': 'GET',
        'url': `${API_URL}/retrieve/${_id}`,
        'headers': {}
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        next();
    });
}

function test_update(next){
    var request = require('request');
    var options = {
        'method': 'PUT',
        'url': `${API_URL}/update/${_id}`,
        'headers': {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "country": "Portugal"
        })
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        next();
    });
}

function test_delete(next){
    var options = {
        'method': 'DELETE',
        'url': `${API_URL}/delete/${_id}`,
        'headers': {}
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body);
        next();
    });
      
}

function test_retrieveall(next){
    var options = {
        'method': 'GET',
        'url': `${API_URL}/retrieveall`,
        'headers': {}
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        var len = JSON.parse(response.body).length
        console.log({len:len});
        next()
    });
}