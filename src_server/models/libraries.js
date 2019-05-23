module.exports = (sequelize,Sequelize) =>{
    const Libraries = sequelize.define('libraries', {
      Library_name: {
           type: Sequelize.STRING
       },
       Address: {
           type: Sequelize.STRING
       },
       Timing: {
           type: Sequelize.STRING
       },
       Website: {
           type: Sequelize.STRING

       }
     });
    /*
    Product.sync()
        .then(() => console.log('Product table created successfully'))
        .catch(err => console.log('oooh, did you enter wrong database credentials?'));
    */
    return Libraries;
}
