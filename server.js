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

app.post('/auth',function(req,res){

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
  }
  else{
    res.json({
        success: false,
        message: 'username password not matched.',
    });
  }

});

const mockProductData = [{id: "1", name: 'Khaman',price: "50"},{id: "2", name: 'Samosa',price: "30"}];

// Get all products

app.get('/product',function(req,res){
  res.json({
        success: true,
        message: 'get all products.',
        users: mockProductData
  });
});

app.listen(8000,function(){
  console.log("Server is Running");
});
