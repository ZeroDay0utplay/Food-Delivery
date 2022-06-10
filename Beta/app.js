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
    const emailChecked = check_mail(email);
    if (emailChecked == -1) res.sendFile(__dirname + "/invalid_u_pwd.html");
    else if (emailChecked == 1){
        
    }
    else if (emailChecked == 0){
        
    }
});

app.listen(process.env.PORT || 3000, () => {
});








function str2list(str){
    const lst = str.split("\n");
    for (var i=0; i<lst.length; i++){
        lst[i] = lst[i].trim("\r");
    }
    return lst;
}



function check_mail(mail){
    const alt = mail.split("@");
    const dot = mail.split(".");
    if (alt != 2 || dot != 2) return -1;
    fs.readFile(__dirname + "/db.txt", "utf8", (err, data) => {
        const usrs = str2list(data);
        for (var i=0; i<usrs.length; i++){
            if (usrs[i] === mail) return 1;
        }
        return 0;
    });
}