const express = require('express');
const request = require('request-promise');
const data = require('./data.json');
const app =express();

app.get('/', (req, res) => {
    let recordersWritten = 0;
    res.setHeader('Content-type', 'text/plain');
    let index = 0;
    data.forEach(element => {
        index = index + 1;
        setTimeout(() => {
            recordersWritten = recordersWritten + 1;
            res.write(`\n Row ${recordersWritten} \n`);
            res.write(JSON.stringify(element));
            
            if (recordersWritten >= data.length) {
                console.log(recordersWritten, data.length)
                res.end();
            }
        }, 1000 * index);
    });
});

app.listen(5050);