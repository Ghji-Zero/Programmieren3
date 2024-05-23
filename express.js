const express = require("Express");
const app = express();

app.get("/", function (req, res) {
    res.send("hello world");
});

app.listen(3000, function () {
    console.log("Exsample is running on port 3000");
});

app.get("/name/:name", function (req, res) {
    const name = req.params.name;
    res.send("<h1>Hello " + name + "</h1>");
});

app.get("/google/:search", function (req, res) {
    const name = req.params.search;
    res.redirect('http://google.com/search?q=' + name);
    
});