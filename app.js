const express = require("express");
const bodyParser = require("body-parser");
const { type } = require("express/lib/response");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const sign_up = __dirname + "/sign_up.html";
const sign_in = __dirname + "/sign_in.html";

app.get("/", (req, res) => {
    res.sendFile(sign_in);
});

app.get("/sign_in.html", (req, res) => {
    res.sendFile(sign_in);
})

app.get("/sign_up.html", (req, res) => {
    res.sendFile(sign_up);
})

app.post("/sign_up.html", (req, res) => {
    const email = req.body.email;
    if (email === "") res.sendFile(__dirname + "/email_exist.html");
    else res.sendFile(sign_up);
});

app.post("/sign_in.html", (req, res) => {
    const email = req.body.email;
    if (email === "") res.sendFile(__dirname + "/invalid_u_pwd.html");
    else res.sendFile(sign_in);
});

app.listen(3000, () => {
});