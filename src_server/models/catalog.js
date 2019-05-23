module.exports = (sequelize,Sequelize) =>{
    const Catalog = sequelize.define('books', {
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
    /*
    Product.sync()
        .then(() => console.log('Product table created successfully'))
        .catch(err => console.log('oooh, did you enter wrong database credentials?'));
    */
    return Catalog;
}
