const express = require("express");
const app = express();

app.get('/',(req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    res.send('Server is running on port 3000');
});