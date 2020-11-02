module.exports = function (sequelize, DataTypes) {
  const Dog = sequelize.define("dog", {
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
      allowNull: true,
      defaultValue: "My dog is a dog"
    }
  });
  Dog.associate = function (models) {
    // Dogs go to user
    Dog.belongsTo(models.user);
    
    // Dog has many reviews
    Dog.hasMany(models.dogReview, {
      onDelete: "cascade"
    });

  };

  return Dog;
};