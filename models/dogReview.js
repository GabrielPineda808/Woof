module.exports = function (sequelize, DataTypes) {
  var DogReview = sequelize.define("dogReview", {
    dates: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  // dog reviews go to dog
  DogReview.associate = function (models) {

    DogReview.belongsTo(models.dog, {
      foreignKey: {
        allowNull: false
      },
    });

    DogReview.belongsTo(models.user);
  };

  return DogReview;
};
