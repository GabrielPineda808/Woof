const bcrypt = require("bcrypt")

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("user", {
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  User.prototype.validPassword = function (password) {
    return bcrypt.compare(password, this.password);
  };
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10));
  });

  User.associate = function (models) {
    // User has many dogs
    User.hasMany(models.dog, {
      onDelete: "cascade"
    });

    // User has many reviews
    User.hasMany(models.userReview, {
      onDelete: "cascade"
    })

    // For the User's reviews on other dogs
    User.hasMany(models.dogReview, {
      onDelete: "cascade"
    });
  };

  return User;
};