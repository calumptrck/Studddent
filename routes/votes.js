var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser')


/* GET users listing. */
router.post('/up/', function(req, res, next) {
    console.log(req.body.postid);
    

    var postid = req.body.postid;

    var upvotes = JSON.parse(req.cookies.votes).up;
    var downvotes = JSON.parse(req.cookies.votes).down;

    if (upvotes.indexOf(postid) > -1) {
        console.log('already upvoted');
    
    } else if (downvotes.indexOf(postid) > -1) {
        console.log('good upvote');
        upvotes.push(postid);
        res.status(200).json({
                "up": upvotes,
                "down": downvotes.splice(downvotes.indexOf(postid),1)
              });
    } else {
        console.log('good upvote');
        upvotes.push(postid);
        res.status(200).json({
                "up": upvotes,
                "down": downvotes
              });
    }
});

router.post('/down/', function(req, res, next) {
    console.log(req.body.postid);
    

    var postid = req.body.postid;

    var upvotes = JSON.parse(req.cookies.votes).up;
    var downvotes = JSON.parse(req.cookies.votes).down;

    if (downvotes.indexOf(postid) > -1) {
        console.log('already downvoted');

    } else if (upvotes.indexOf(postid) > -1) {
        console.log('good downvote');
        downvotes.push(postid);
        res.status(200).json({
                "up": upvotes.splice(upvotes.indexOf(postid),1),
                "down": downvotes
              });
    } else {
        console.log('good downvote');
        downvotes.push(postid);
        res.status(200).json({
                "up": upvotes,
                "down": downvotes
              });
    }
});

module.exports = router;
