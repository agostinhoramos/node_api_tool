var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Decimal = Schema.Types.Decimal128;

var covidDeathSchema = mongoose.Schema({
    country : {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: false
    },
    total: {
        type: Number,
        required: false
    },
    lat: {
        type: Decimal,
        required: false
    },
    long: {
        type: Decimal,
        required: false
    },
    date: {
        type: String,
        required: false
    }
}, { timestamps: true });

// Export model
module.exports =  mongoose.model(
    'covidDeath', 
    covidDeathSchema
);