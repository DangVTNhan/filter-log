'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('jsonlog.json');
let logs = JSON.parse(rawdata);

let maxKeysExamined = logs[0]
let maxNreturned = logs[0]
let maxDuration = logs[0]
let reslen = logs[0]

logs.forEach(log => {
    if (log.attr.keysExamined > maxKeysExamined.attr.keysExamined){
        maxKeysExamined = log
    }

    if (log.attr.nreturned > maxNreturned.attr.nreturned){
        maxNreturned = log
    }

    if (log.attr.durationMillis > maxDuration.attr.durationMillis ){
        maxDuration = log
    }

    if (log.attr.reslen > reslen.attr.reslen){
        reslen = log
    }

})

console.log("keyexam: ", maxKeysExamined);
console.log("nreturn: ",maxNreturned);
console.log("duration: ",maxDuration);
console.log("reslen: ",reslen);

console.log("--------------------------------------------------------------------------------------------");
console.log("keyexam detail:", JSON.stringify( maxKeysExamined.attr.originatingCommand));
console.log("nreturn detail: ",   JSON.stringify(maxNreturned.attr.originatingCommand));
console.log("duration detail: ", JSON.stringify(maxDuration.attr.originatingCommand));
console.log("reslen detail ", JSON.stringify(reslen.attr.originatingCommand));




