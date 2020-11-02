module.exports = function (sequelize, DataTypes) {
    var UserReview = sequelize.define("userReview", {
        body: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rating: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    // UserReview goes to User (poster)
    // Use ID of user posting review
    UserReview.associate = function (models) {
        UserReview.belongsTo(models.user, {
            foreignKey: {
                name: 'posteeId'
            }
        });
    };
    // UserReview goes to User (postee)
    // Use ID of user profile being viewed

    return UserReview;
};