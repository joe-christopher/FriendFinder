
var express = require("express");
var bodyParser = require("body-parser");

//create express server
var app = express();

//sets port
var PORT = process.env.PORT || 8080;


// parse data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//map to server routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//create listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
