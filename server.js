const express = require('express');
const app = express();


app.use('/', require('./routes'));

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});