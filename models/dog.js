var bcrypt = require("bcryptjs")

module.exports = function (sequelize, DataTypes) {
    var Dog = sequelize.define("Dog", {
        // The email cannot be null, and must be a proper email before creation
        id: {
            type: DataTypes.INTEGER
            //autoincrement
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // The password cannot be null
        breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        {
            temperarment: DataTypes.STRING,
            allowNull: true
        }
    });
    
return Dog;
  };