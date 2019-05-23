const Sequelize = require("sequelize");

// initialze an instance of Sequelize
const sequelize = new Sequelize({
    database: 'e-catalog',
    username: 'root',
    password: 'admin123',
    dialect: 'mysql',
});

// check the databse connection
sequelize
    .authenticate()
    .then(() => console.log('Connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err));

var UserModel = require('./models/user');
var ProductModel = require('./models/product');
var BooksModel = require('./models/books');
var LibrariesModel = require('./models/libraries');
var CatalogModel = require('./models/catalog');

const User = UserModel(sequelize, Sequelize);
const Product = ProductModel(sequelize, Sequelize);
const Books = BooksModel(sequelize, Sequelize);
const Libraries = LibrariesModel(sequelize, Sequelize);
const Catalog = CatalogModel(sequelize, Sequelize);



Libraries.hasMany(Books); // Will add userId to Task model
Books.belongsTo(Libraries); // Will also add userId to Task model

// Create database and tables if doesn't exist
sequelize.sync()//{force:true}
.then(()=>{
  console.log('Database and tables created!!');
})

module.exports = {
    User,
    Product,
    Books,
    Catalog,
    Libraries
}
