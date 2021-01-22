const express = require('express');
const app = express();

const mockUserData = [{name: 'Bhavesh'},{name: 'Akash'}];

app.get('/users',function(req,res){
  res.json({
  	success: true,
	message: 'Successfully get users.',
	users: mockUserData
  });
});

app.listen(8000,function(){
  console.log("Server is Running");
});
