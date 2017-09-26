const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendfile("/index.html");
})

const server = app.listen(1337, () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`listening at http://${host}:${port}`);
})
