const express = require('express');
const db = require("./server/config/db")
const cors = require("cors")
const mysql = require("mysql");
const path = require("path")

const app= express();

const port = 3500

// app.get('/', (req, res) => {

// });
app.use(cors());

// app.use(express.urlencoded({
//   extended: false
// }));

app.use(express.json());

// app.use(express.static('public'));
// app.use('style.css', express.static(__dirname + 'public'))
// app.use('style.css', express.static(__dirname + 'public'))

// app.get('/', function(req, res) {
//   res.sendFile(path.resolve(__dirname + '/views/index.html'));
// });

/*login*/
 
const dbLog = mysql.createConnection({
  user: "",
  host: "localhost",
  password: "",
  database: ""
})

app.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

dbLog.query("INSERT INTO users (username, password) VALUES (?,?)",
[username, password],
  (err, result) => {
    console.log(err);
  }
); 
}); 

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

dbLog.query("SELECT * FROM users WHERE username = '" + req.body.username + "' AND password = '" + req.body.password + "'",
[username, password],
  (err, result) => {
    if (err){
      res.sennd({err: err});
    }

      if (result.length > 0) {
        res.send(result)
      } else {
        res.send({Message: "Wrong username/password"})
      }
  }
); 
}) 

// asdf' or 1=1;#  

/* blog below*/ 


app.get("/api/get",(req, res) => {
  db.query("Select * FROM posts", (err, result) =>{
    if (err) {
        console.log(err);
    }
    res.send(result)
  }); 
});

app.post("/api/create", (req, res) => { 
  const username = req.body.userName;
  const title = req.body.title;
  const text = req.body.text;
  

  db.query(
    "INSERT INTO posts (title, post_text, user_name) VALUES (?,?,?)", [title, text, username],
    (err, result) => {
        if (err) {
            console.log(err);
        }
        console.log(result);
      }
    ); 
  });



app.listen(port, () => {
    console.log("server running on port");
}) 