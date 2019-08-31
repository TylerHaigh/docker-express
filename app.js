const express = require('express');

const PORT = process.env.PORT || 3000;
//const HOST = '0.0.0.0'


var app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = {app};
