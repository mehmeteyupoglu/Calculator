const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/bmicalculator', function(req, res){
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmiCalculator.html', function(req, res){
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);
  var bmi = (weight) / (height * height);
  bmi = Math.floor(bmi); 

  res.send('Your bmi is '+ bmi);
});

app.post('/', function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  result = num1 + num2;
  res.send('The result is '+ result);
});

app.listen(3000, function(){
  console.log('Server is running at port 3000');
});
