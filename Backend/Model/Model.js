const mysql = require("mysql");
const conn = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"",
    database:"ecommerce1",
});
conn.connect(function(err){
    if(err){
        console.log("sql error");
    }
    else{
        console.log("Mysql connected");
    }
});

module.exports = conn;

