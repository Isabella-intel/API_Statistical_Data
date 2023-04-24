// SEARCH FUNCTION - this function will search the online list of publications and compare against log file, to check if new publication is avalible.
// if(yes): then continue to add method. 
// if(no): print("The database is up to date, with the current publications")

// ADD METHOD - check pdf name for format code, scrub and organize data into database based on format code perameters.
//            - adds entry to log file containing; PDF - pdf name, code + publication date. LOG - size of pdf, date added, tables added to.

const fs = require('fs')
const pdf = require('pdf-parse')
let dataBuffer = fs.readFileSync('C:/Users/Isabella/Documents/sample.pdf')

pdf(dataBuffer).then(function(data){
    console.log(data.text)
})
