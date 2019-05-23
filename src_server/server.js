// Requromg messary nm middleware packages
var express = require("express");
var bodyParser = require("body-parser");
//var Sequelize = require("sequelize");
//var passport = require("passport");
var session = require("express-session");


// setting up port
var PORT = process.env.PORT || 8080;

//Creating express app and configuring middleware
//needed to read through our public folder
var app = express();

var passport = require('passport');

app.use(bodyParser.urlencoded({ extended: true })); //For body parser
app.use(bodyParser.json());

app.use(express.static("build"));
app.use(express.static("images_products"));


app.use(passport.initialize());
app.use(passport.session());

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

//API routes
var routes = require('./router/api')(app);
app.use('/',routes);


//this will listen to and show all activities on our terminal to
//let us know what is happening in our app
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});

/*
//initialize the server connection
sequelize = new Sequelize({
  database: 'e-catalog',
  username: 'root',
  password: 'admin123',
  dialect: 'mysql',
});

// check the database connection
sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database: ', err))

  //create user model
  const User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//syncronyzation
User.sync()
    .then(() => console.log('User table created successfully'))
    .catch(err => console.log('Problems with creating user table: ', err))

// Define a procedure for parsing all the users
const getAllUser = async() => {
  return await User.findAll();
}

// retrieve data from database table (routes)
    app.get('/users', function(req, res) {
    getAllUser().then(users => res.json(users));
    });




    // Create main table model (model)
    const list_of_books = sequelize.define('main_table', {
     Book_Title: {
          type: Sequelize.STRING
      },
      Author_name: {
          type: Sequelize.STRING
      },
      Year_of_Publication: {
          type: Sequelize.STRING
      },
      Library_name: {
          type: Sequelize.STRING
      },
      Book_Language: {
          type: Sequelize.STRING
      },
      ISBN_No: {
          type: Sequelize.STRING
      },
      category: {
          type: Sequelize.STRING
      },
      No_of_pages: {
          type: Sequelize.STRING
      }
    });

    //syncronyzation
    list_of_books.sync()
      .then(() => console.log('Main list created successfully'))
      .catch(err => console.log('Problems with creating main table: ', err))

      // Define a procedure for parsing all the main list
      const getAlllist_of_books = async() => {
        return await list_of_books.findAll();
      }

      //retrieve data of main table
      app.get('/homepage', function(req, res) {
      getAlllist_of_books().then(homepage => res.json(homepage));
      });


















// Create list of libraries table model (model)
const list_of_libraries = sequelize.define('libraries', {
  Name_of_library: {
      type: Sequelize.STRING
  },
  Adress: {
    type: Sequelize.STRING
  },
  Working_Time: {
      type: Sequelize.STRING
  },
  Website: {
      type: Sequelize.STRING
  },
  Library_id: {
       type: Sequelize.STRING

  }

});

//syncronyzation
list_of_libraries.sync()
  .then(() => console.log('The list of libraries are created successfully'))
  .catch(err => console.log('Problems with creating main table: ', err))

 //Define a procedure for parsing all the main list
const getAlllist_of_libraries = async() => {
  return await list_of_libraries.findAll();
}

app.get('/libraries', function(req, res) {
getAlllist_of_libraries().then(libraries => res.json(libraries));
});

// Will add userId to Task model, but field will be set to `user_id`
// This means column name will be `user_id`
//list_of_libraries.hasMany(list_of_books);

// Will also add userId to Task model, but field will be set to `user_id`
// This means column name will be `user_id`
//list_of_books.belongsTo(list_of_libraries);


//list_of_libraries.hasOne(list_of_books, { foreignKey: 'Library_id' })
//list_of_books.belongsTo(list_of_libraries, { foreignKey: 'Library_id' })

//retrieve data
app.get('/', function(req, res) {
  res.sendFile("index.html");
});

app.get("/hello", function(req, res,) {
  res.sendFile("/books");
});

  app.listen(PORT, function() {
    console.log("app listening on PORT" + PORT);
  });
*/
