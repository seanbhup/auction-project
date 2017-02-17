var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require("../config/config.js");
var randtoken = require("rand-token");

var connection = mysql.createConnection ({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

connection.connect();

var bcrypt = require('bcrypt-nodejs');

// var hashedPassword = bcrypt.hashSync("x");
// console.log(hashedPassword);
// var checkHash = bcrypt.compareSync("x", hashedPassword);
// console.log(checkHash);

router.get('/getHomeAuctions', (req, res, next)=>{

    var auctionsQuery = "select * from auctions inner join images on images.auction_id = auctions.id limit 10";

    connection.query(auctionsQuery, (error,results,fields)=>{
        if (error) throw error;
        res.json(results);
    })
});

router.post('/register', (req,res,next)=>{
    var email = req.body.email;
    var username = req.body.username;
    var password = bcrypt.hashSync(req.body.password);

    var checkDupeUserQuery = "select * from users where username = ?";

    connection.query(checkDupeUserQuery, [username], (error,results,fields)=>{
        if (error) throw error;
        if(results.length === 0){
            var insertUserQuery = "insert into users (email, username, password) values (?,?,?)";
            connection.query(insertUserQuery, [email,username,password], (error2,results2,fields2)=>{
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

router.post('/login', (req,res,next)=>{
    var username = req.body.username;
    var password = req.body.password;
    var findUserQuery = "select * from users where username = ?";
    connection.query(findUserQuery, [username], (error,results,fields)=>{
        if (error) throw error;
        if (results.length === 0){
            res.json({
                msg: "badUsername"
            });
        }else{
            checkHash = bcrypt.compareSync(password, results[0].password);
            if (checkHash === false){
                res.json({
                    msg: "loginFailure"
                })
            }else{
                var token = randtoken.uid(40);
                var insertToken = "update users set token=?, token_exp=date_add(now(), interval 1 hour) where username=?";
                connection.query(insertToken, [token, username], (error2,results2)=>{
                    console.log(token);
                    res.json({
                        msg: "loginSuccess",
                        token: token,
                        name: results[0].username
                    });
                });
            };
            // console.log(":LKSGHWIOERGHWLEKGH");
            console.log(checkHash);
        }
    });
})

router.get("/getAuctionItem/:auctionId" , (req,res,next)=>{
    var theAuctionId = req.params.auctionId;
    var getAuctionQuery = "select * from auctions where id = ?";
    connection.query(getAuctionQuery, [theAuctionId], (error,results,fields)=>{
        res.json(results);
    });
});

router.post("/submitBid", (req,res,next)=>{
    var selectQuery = "select current_bid from auctions where id = ?"
    connection.query(selectQuery, [req.body.auctionItemId], (error,results,fields)=>{

    });if((req.body.bidAmount < results[0].current_bid) || (req.body.bidAmount <  results[0].starting_bid)){
        res.json({msg: "bidTooLow"})
    }else{
        var getUserIdQuery = "select id form users where token=?";
        connection.query(getUserIdQuery, [req.body.userToken],(error2,results2,fields2)=>{
            if(results2.length > 0){
                var updateAuctionsQuery = "update auctions set high_bidder_id=?, current_bid=? where id=?";
                connection.query(updateAuctionsQuery, [results2[0].id], req.body.bidAmount,req.body.auctionItemId,(errors3,results3,fields3)=>{
                    if(error3) throw error3;
                    res.json({
                        msg: 'bidAccepted',
                        newBid: req.body.bidAmount
                    });
                });
            }else{
                res.json({
                    msg: "badToken"
                });
            };
        });
};
});

module.exports = router;
