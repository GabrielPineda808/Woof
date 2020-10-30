var bcrypt = require("bcryptjs")

module.exports = function (sequelize, DataTypes) {
    var Dog = sequelize.define("Dog", {
        // The email cannot be null, and must be a proper email before creation
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
        // must restrict to male of femal
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // allows user to not insert temperament
        temperament: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // allows user to not insert bio, can be added later as well
        bio: {
            type: DataTypes.STRING,
            allowNull: true
        },
        // this corresponds to this dog's owner
        ownerID: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    
return Dog;
  };