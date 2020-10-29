require('dotenv').config();
const express = require ('express');
const exphbs = require ('express-handlebars');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');
const db = require ('./models');

const app = express();

app.engine('handlebars', exphbs({ defaultLayout:'main' }))
app.set('view engine', 'handlebars');
app.use(express.urlencoded({ extended:true }))
app.use(express.json());

app.use(session({
  secret: process.env.session_secret,
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

app.use('/', require('./routes'));
app.use('/register', require('./routes/register'));
app.use('/user', require('./routes/user'));
app.use('/search', require('./routes/search'));
app.use('/review', require('./routes/review'));

const port = process.env.PORT || 3000;

db.sequelize.sync({ force: true }).then(function() {
  app.listen(port, () => {
    console.log(`server started on port ${port}`)
  })
})

// 