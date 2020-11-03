module.exports = function (sequelize, DataTypes) {
    var UserReview = sequelize.define("userReview", {
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    // UserReview goes to User (poster)
    // Use email of user posting review
    UserReview.associate = function (models) {
        UserReview.belongsTo(models.user, {
          foreignKey: 'posterEmail',
          targetKey: 'email',
        });
    };
    // UserReview goes to User (postee)
    // Use ID of user profile being viewed

    return UserReview;
};