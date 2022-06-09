const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");

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
    check_mail(email);
});

app.listen(process.env.PORT || 3000, () => {
});





function check_mail(mail){
    const alt = mail.split("@");
    const dor = mail.split(".");
    if (alt.length != 2 || dor.length != 2) return "Invalid Email";
    fs.readFile("db.txt", "utf8", (err, data) => {
        console.log(data);
    });
}