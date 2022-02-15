const moment = require('moment');

function convertNumToString(num) {
    if( typeof num === "string" ){
        num = parseInt(num);
    }
    if( num >= 0 && num < 10 ){
        return `0${num}`;
    }
    return `${num}`;
}

function recoverDate(arr_date){
    str_date = '';
    if( parseInt(arr_date[1]) <= 12 ){
        str_date = `${convertNumToString(arr_date[0])}-${convertNumToString(arr_date[1])}-${arr_date[2]}`;
    }else{
        str_date = `${convertNumToString(arr_date[1])}-${convertNumToString(arr_date[0])}-${arr_date[2]}`;
    }
    return moment(str_date, "DD-MM-YY");
}

module.exports = {
    cns: convertNumToString,
    rd: recoverDate
}