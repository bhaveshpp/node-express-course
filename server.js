const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const mockUserData = [{name: 'Bhavesh'},{name: 'Akash'}];

// Get all user

app.get('/users',function(req,res){
  res.json({
  	success: true,
	message: 'get all users.',
	users: mockUserData
  });
});

// Get user from get parmaeter

app.get('/user/:id',function(req,res){
  console.log(req.params.id);
  res.json({
        success: true,
        message: 'got one user.',
        users: req.params.id
  });
});

//  login using postmethod

app.post('/user/auth:id',function(req,res){

  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = "username";
  const mockPassword = "password";

  if(username === mockUsername && password === mockPassword){
    res.json({
        success: true,
        message: 'username password matched.',
        token: 'encripted tocken'
    });

    res.json({
        success: false,
        message: 'username password not matched.',
    });
  }

});




app.listen(8000,function(){
  console.log("Server is Running");
});
