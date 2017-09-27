const express = require('express');
const app = express();
const getNameTagInfo = require('./utils/marketScraper');


app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendfile("/index.html");
})

app.get('/api/NameTag/', (req, res) => {
    getNameTagInfo().then((data) => {
        res.send(JSON.stringify(data));
    })
})

const server = app.listen(1337, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`listening at http://${host}:${port}`);
})
