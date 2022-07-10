const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const fs = require("fs");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

const sign_up = __dirname + "/views/sign_up.ejs";
const sign_in = __dirname + "/views/sign_in.ejs";

let login_msg = "";
let su_msg = "";

app.get("/", (req, res) => {
    res.render("sign_in", {login: ""});
})

app.get("/sign_in.html", (req, res) => {
    res.render("sign_in", {login: ""});
})

app.get("/sign_up.html", (req, res) => {
    res.render(sign_up, {login: ""});
})

app.post("/sign_up.html", (req, res) => {
    const email = req.body.email;
    const password = req.body.pwd;
    console.log(email);
    console.log(password);
    if (email === "med@tn.cox" && password === "zdo2022") su_msg = "success";
    else su_msg = "used_email";
    console.log(su_msg);
    res.render("sign_up", {login: su_msg});
});

app.post("/sign_in.html", (req, res) => {
    const email = req.body.email;
    const password = req.body.pwd;
    if (email === "med@tn.cox" && password === "zdo2022") login_msg = "success";
    else login_msg = "wrongpwd";
    res.render("sign_in", {login: login_msg});
});

app.listen(process.env.PORT || 3000, () => {
});