var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser')
let Post = require('./../models/Post')

/* GET users listing. */
router.post('/up/', function(req, res, next) {
    console.log(req.body.postid);
    

    var postid = req.body.postid;

    var upvotes = JSON.parse(req.cookies.votes).up;
    var downvotes = JSON.parse(req.cookies.votes).down;

    if (upvotes.indexOf(postid) > -1) {
        console.log('remove upvote');
        Post.update({ _id: postid }, {$inc : {
            'votes.up' : -1,
        }}, (err, doc) => {
            if (err) {
                console.log(err);
            } else {
                 console.log('updated db - ');
                 console.log(doc);
                 
             }
        });
        upvotes.splice(upvotes.indexOf(postid),1);
        res.status(200).json({
                "up": upvotes,
                "down": downvotes
              });
    
    } else if (downvotes.indexOf(postid) > -1) {
        console.log('good upvote');
        Post.update({ _id: postid }, {$inc : {
            'votes.up' : 1,
            'votes.down': -1
        }}, (err, doc) => {
            if (err) {
                console.log(err);
            } else {
                console.log('updated db - ');
                console.log(doc);
             }
        });
        upvotes.push(postid);
        downvotes.splice(downvotes.indexOf(postid),1);
        res.status(200).json({
                "up": upvotes,
                "down": downvotes
              });
    } else {
        console.log('good upvote');
        Post.update({ _id: postid }, {$inc : {
            'votes.up' : 1,
        }}, (err, doc) => {
            if (err) {
                console.log(err);
            } else {
                console.log('updated db - ');
                console.log(doc);
             }
        });

        upvotes.push(postid);
        res.status(200).json({
                "up": upvotes,
                "down": downvotes
              });
    }
    // Update db
});

router.post('/down/', function(req, res, next) {
    console.log(req.body.postid);
    

    var postid = req.body.postid;

    var upvotes = JSON.parse(req.cookies.votes).up;
    var downvotes = JSON.parse(req.cookies.votes).down;

    if (downvotes.indexOf(postid) > -1) {
        console.log('remove downvote');
        Post.update({ _id: postid }, {$inc : {
            'votes.down' : -1,
        }}, (err, doc) => {
            if (err) {
                console.log(err);
            } else {
                console.log('updated db - ');
                console.log(doc);
             }
        });
        downvotes.splice(downvotes.indexOf(postid),1);
        res.status(200).json({
                "up": upvotes,
                "down": downvotes
              });
    } else if (upvotes.indexOf(postid) > -1) {
        console.log('good downvote');
        Post.update({ _id: postid }, {$inc : {
            'votes.up' : -1,
            'votes.down' : 1
        }}, (err, doc) => {
            if (err) {
                console.log(err);
            } else {
                console.log('updated db - ');
                console.log(doc);
             }
        });
        downvotes.push(postid);
        upvotes.splice(upvotes.indexOf(postid),1);
        res.status(200).json({
                "up": upvotes,
                "down": downvotes
              });
    } else {
        console.log('good downvote');
        Post.update({ _id: postid }, {$inc : {
            'votes.down' : 1
        }}, (err, doc) => {
            if (err) {
                console.log(err);
            } else {
                console.log('updated db - ');
                console.log(doc);
             }
        });
        downvotes.push(postid);
        res.status(200).json({
                "up": upvotes,
                "down": downvotes
              });
    }
    // Update db
});

module.exports = router;
