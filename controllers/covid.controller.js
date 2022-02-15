const db = require("../models/index.model");
const Covid = db.covid;

exports.create = (req, res) => {
    let covid = new Covid({
        country: req.body.country,
        state: req.body.state,
        total: req.body.total,
        lat: req.body.lat,
        long: req.body.long,
        date: req.body.date
    })
    covid.save(function(err, result){
        if(err){
            return next(err);
        }
        res.send({
            message: 'Data created successfully!',
            _id: result._id.toString()
        });
    })
};
exports.retrieve = (req, res) => {
    Covid.findById(req.params._id, function (err, data) {
        if( !data ){
            res.send({"Error" : "Data not found"});
            return false;
        }
        if (err){
            res.send(err);
        }
        res.json({
            country: data.country,
            state: data.state,
            total: data.total,
            lat: data.lat,
            long: data.long,
            date: data.date
        });
    });
};
exports.update = (req, res) => {
    Covid.findById(req.params._id, function (err, data) {
        if( !data ){
            res.send({"Error" : "Data not found"});
            return false;
        }

        if (err){
            res.send(err);
        }

        data.country = req.body.country || data.country;
        data.state = req.body.state || data.state;
        data.total = req.body.total || data.total;
        data.lat = req.body.lat || data.lat;
        data.long = req.body.long || data.long;
        data.date = req.body.date || data.date;
        
        data.save(function (err) {
            if (err)
                res.json(err)
            res.json({
                message: `Country ${data.country} Updated Successfully!`,
                data: data
            });
        });
    });
};
exports.delete = (req, res) => {
    Covid.deleteOne({
        _id: req.params._id
    }, function(err, data){
        if( data.deletedCount < 1 ){
            res.send({"Error" : "Data not found"});
            return false;
        }

        if(err){
            res.send(err)
        }
        res.json({
            message: `Data deleted Successfully!`,
            row: data.deletedCount
        })
    })
};
exports.retrieveAll = (req, res) => {
    Covid.find({ "__v" : "0" }, function (err, data) {
        if( !data ){
            res.send({"Error" : "Data not found"});
            return false;
        }
        if (err){
            res.send(err);
        }
        res.json(data);
    });
};