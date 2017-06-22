var express = require('express');
var bodyParser = require('body-parser');
var mustacheExpress = require('mustache-express');

// var data = require('./data.js')

var app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var taskID = 0;
var myList = [
 {}
];


app.get('/', function(req, res) {
  res.render('todo', { todoList : myList });
});


app.post("/", function(req, res) {
  taskID += 1;
  var pushTask = {"id":taskID, "text":req.body.add, "incomplete":true};
  myList.push(pushTask);
  res.render('todo', { todoList : myList });
  console.log(myList)
  // res.send();
});


app.listen(3000, function(){
  console.log('Started express application!')
});
