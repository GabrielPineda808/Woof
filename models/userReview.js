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
    // UserReview goes to User (poster)
    // Use ID of user posting review
    UserReview.associate = function (models) {
        UserReview.belongsTo(models.User, {
            as: 'posterId',
            foreignKey: {
                allowNull: false
            }
        });
    };
    // UserReview goes to User (postee)
    // Use ID of user profile being viewed
    UserReview.associate = function (models) {
        UserReview.belongsTo(models.User, {
            as: 'posteeId',
            foreignKey: {
                allowNull: false
            }
        });
    };
    return UserReview;
};