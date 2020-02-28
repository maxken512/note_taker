var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

require("./routes/htmlRoutes.js")(app);
require("./routes/APIRoutes.js")(app);

app.listen(PORT, function () {
    console.log("app listening on port: " + PORT);
});