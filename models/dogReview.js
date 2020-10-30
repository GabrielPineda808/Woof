module.exports = function (sequelize, DataTypes) {
    var DogReview = sequelize.define("DogReview", {
        dates: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dogId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        writerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    // dog reviews go to dog
    DogReview.associate = function (models) {
        DogReview.belongsTo(models.Dog, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    DogReview.associate = function (models) {
        DogReview.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return DogReview;
};