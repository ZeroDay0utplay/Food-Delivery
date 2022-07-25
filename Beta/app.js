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
const product = __dirname = "product.ejs";

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

app.get("/product", (req, res) => {
    res.render(product, {produit: "Makloub"});
})

app.post("/sign_up.html", (req, res) => {
    res.render("sign_up", {login: su_msg});
});

app.post("/sign_in.html", (req, res) => {
    res.render("sign_in", {login: login_msg});
});

app.listen(process.env.PORT || 3000, () => {
});