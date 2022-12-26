const express = require("express");
const app = express();
var hbs = require('hbs');
require('dotenv').config();

app.set('view engine', 'hbs');
app.use(express.static("public"));

const port = process.env.PORT



hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.get("/", (req, res) => {
    res.render('home',{
        nombre:'xD pene',
        curso: 'Que pasa chavales',
    });
  });

app.get("/generic", (req, res) => {

  res.render('generic',{

  })
});

app.get("/elements", (req, res) => {
  res.render('elements',{});
});
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
