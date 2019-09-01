const express = require('express');

const PORT = process.env.PORT || 3000;
//const HOST = '0.0.0.0'


var app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Healthcheck endpoint
// https://stackoverflow.com/questions/43380939/where-does-the-convention-of-using-healthz-for-application-health-checks-come-f
app.get('/healthz', (req, res) => {
    res.send('OK');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = {app};
