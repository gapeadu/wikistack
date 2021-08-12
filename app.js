const express = require('express');
const morgan = require('morgan');
const app = express();
const {main} = require('./views/main');


//const path = require('path');

app.use(morgan("dev"));
app.use(express.json());

app.use(express.urlencoded({ extended:false}))
app.use(express.static(__dirname, + './public'));


app.get("/", (req, res) => {
    console.log("Hello World!");
    res.send(main());
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`)
});

