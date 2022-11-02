var express=require('express');
var app=express();
const PORT=8080;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}.`);
});
app.get('/',function(req,res){
    res.send('<h1>2011cs010201</h1>');
})


var mysql = require('mysql');
// Create Connection to MySQL
var connection = mysql.createConnection({
 host:'demo201.cam9gr48ra9n.us-east-1.rds.amazonaws.com',
 user:'root',
 password:'mysql123',
 database:'mru'
});
//GET Student Data: http://localhost:8080/mysql/students
app.get("/mysql/student", function(req , res){
 connection.query("SELECT RollNo, Name FROM mru.student", function (err, data) {
 if (err) return next(new AppError(err, 500));
 res.status(200).json({
 status: "success",
 length: data?.length,
 data: data,
 });
 });
});