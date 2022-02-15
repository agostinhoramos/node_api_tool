const moment = require('moment');

const db = require("../models/index.model");
const fn = require("../lib/basic.function");

const User = db.user;
const Role = db.role;
const Covid = db.covid;

exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};
exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};
exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};
exports.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};


// *** MORE ***

exports.search_between_date = (req, res) => {
    var dformat = "YYYY-MM-DD";
    start_dt = moment(req.params.start_date, dformat);
    end_dt = moment(req.params.end_date, dformat);

    Covid.find({ "__v" : "0" }, function (err, deaths) {
        if( !deaths ){
            res.send({"Error" : "Data not found"});
            return false;
        }
        if (err){
            res.send(err);
        }
        arr_deaths = [];
        deaths.forEach(function(death){
            date = fn.rd(death.date.split('/'));
            if( date >= start_dt && date <= end_dt ){
                arr_deaths.push( {
                    country: death.country,
                    state: death.state,
                    total: death.total,
                    date: death.date,
                    lat: death.lat,
                    long: death.long
                } );
            }
            
        });
        res.json(arr_deaths);
    });
};
