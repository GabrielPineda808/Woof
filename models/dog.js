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
    // must restrict to male of female
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
    }
  });
  // Dogs go to user
  Dog.associate = function (models) {
    Dog.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  // Dog has many reviews
  Dog.associate = function (models) {
    Dog.hasMany(models.DogReview, {
      onDelete: "cascade"
    });
  };
  return Dog;
};