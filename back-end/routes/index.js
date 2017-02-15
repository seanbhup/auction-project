var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require("../config/config.js");

var connection = mysql.createConnection ({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

connection.connect();

router.get('/getHomeAuctions', (req, res, next)=>{
    var auctionsQuery = "select * from auctions inner join images on images.auction_id = auctions.id limit 10";
    connection.query(auctionsQuery, (error,results,fields)=>{
        if (error) throw error;
        res.json(results);
    })
});

router.post('/register', (req,res,next)=>{
    var checkDupeUserQuery = "select * from users where username = ?";
    connection.query(checkDupeUserQuery, [req.body.username], (error,results,fields)=>{
        if (error) throw error;
        if(results.length === 0){
            var insertUserQuery = "insert into users (email, username, password) values (?,?,?)";
            connection.query(insertUserQuery, [req.body.email,req.body.username,req.body.password], (error2,results2,fields2)=>{
                if (error2) throw error2;
                res.json({msg:"userInserted"});
            });
        }else{
            res.json({msg: "userNameTaken"})
        }
        // console.log("a;sodighioaehgaoiehgaioehglesgdlk");
        // console.log(results);
        // console.log("asl;dkghaeogihiasdghlkas;dghaioweg");
    })

});

module.exports = router;
