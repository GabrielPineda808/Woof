var bcrypt = require("bcryptjs")

module.exports = function (sequelize, DataTypes) {
    var UserReview = sequelize.define("UserReview", {
        body: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ownerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        writerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    
return DogReview;
  };