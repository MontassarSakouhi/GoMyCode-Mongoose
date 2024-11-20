var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose=require('mongoose')
const Person=require('./models/person')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


const Monta=new Person({name:"Monta",age:23,favoriteFoods:["BOURGAR","baz moch sushi"]})
//Person.create([{name:"amine",age:19,favoriteFoods:["Meat","La Glace"]},{name:"asma",age:50,favoriteFoods:["Sushi","Pasta"]},{name:"Nourhain",age:30,favoriteFoods:["mermez","mosli"]},{name:"Yosr",age:19,favoriteFoods:["Sushi","Pasta"]}])


// Monta.save()
// .then((data) => {
//   console.log(data);
// })
// .catch((err) => {
//   console.log(err);
// });

//Find By name
// Person.find({name:"Monta"}).then(data=>console.log(data)).catch(err=>console.log(err))

//Find by Id
// Person.findById("673e36fddaef3303a008a767")
// .then(data=>{!data?console.log("famech"):console.log(data)})
// .catch(err=>console.log(err))

//Perform Classic Updates by Running Find, Edit, then Save
// Person.findById("673e36fddaef3303a008a767").then((person)=>{
//   if (!person){console.log("famech");return}
//   else{
//     person.favoriteFoods.push("Hamburger")
//     // markModified("favoriteFoods");
//     person.save()
//     console.log("data has been updatedddddd")

//   }
// }).catch(err=>{console.log(err)})

//Perform New Updates on a Document Using model.findOneAndUpdate()
// Person.findOneAndUpdate({"name":"amine"},{"age":20},{new:true,runValidators:true})
// .then(person=>console.log(person))
// .catch(err=>console.log(err))

// Delete One Document Using model.findByIdAndRemove
// Person.findByIdAndDelete("673e408b6af6c4adc4d03c05")
// .then(person=>{console.log(person);console.log('this person has been deleted')})
// .catch(err=>console.log(err))

Person.remove({name:"Mary"})
.then(person=>{
  !person?console.log('cannot find this person'):console.log(person);console.log('person has been deleted')
}).catch(err=>console.log(err))




mongoose.connect('mongodb+srv://Monta:Monta123@gomycodecluster.suxgp.mongodb.net/HugeDB').then(()=>{console.log('Server Is Onnnn')}).catch(err=>console.log(err))











module.exports = app;
