const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const mongoose = require('mongoose');

const User = require('../models/user');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/mean', {useMongoClient: true}, function(err){
  if (err) {
    console.error("Error! " + err);
  }
});



// Connect
const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/mean', (err, db) => {
    if (err) return console.log(err);
    closure(db);
  });
};


// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};



// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};



// Get users
/*router.get('/users', (req, res) => {
  connection((db) => {
    db.collection('users')
      .find()
      .toArray()
      .then((users) => {
        response.data = users;
        res.json(response);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});*/

router.get('/users', function(req, res){
  console.log('Get request for all users');
  User.find({})
    .exec(function(err, users){
      "use strict";
      if (err){
        console.log('Error retrieving videos.');
      }else{
        res.json(users);
      }
    })
});

router.get('/users/:id', function(req, res){
  console.log('Get request for a single video');
  User.findById(req.params.id)
    .exec(function(err, user){
      "use strict";
      if (err){
        console.log('Error retrieving user.');
      }else{
        res.json(user);
      }
    })
});

router.post('/user', function(req, res){
  "use strict";
  console.log('Post a user');
  let newUser = new User();
  newUser.name = req.body.name;
  newUser.save(function(err, insertedUser){
    if (err){
      console.log('Error saving user.');
    }else{
      res.json(insertedUser);
    }
  });
});

router.put('/user/:id', function(req, res){
  "use strict";
  console.log('Update a user');
  User.findByIdAndUpdate(req.params.id, {
    $set: {name: req.body.name}
  }, {
    new: true
  }, function(err, updatedUser){
    if (err){
      res.send("Error updating user");
    }else {
      res.json(updatedUser);
    }
  });
});

router.delete('/user/:id', function(req, res){
  console.log('Deleting a user.');
  User.findByIdAndRemove(req.params.id, function(err, deletedVideo){
    "use strict";
    if (err){
      res.send('Error deleting video.');
    }else{
      res.json(deletedVideo);
    }
  });
});

module.exports = router;
