'use strict';

module.exports = (sequelize, DataTypes) => {
    //class User extends sequelize.Model{}
    const User = sequelize.define('User',
        {
            firstName:{
                type: DataTypes.STRING,
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            privateID: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
        }
    )

    User.associate = (models) => {
        models.User.Quizzes = models.User.hasMany(models.Quiz)
        models.User.belongsToMany(models.Quiz, { through: models.QuizUser })
        models.User.hasMany(models.Session)
    }
    
    return User;
}