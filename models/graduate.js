'use strict';
module.exports = function(sequelize, DataTypes) {
  var Graduate = sequelize.define('Graduate', {
    name: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    photo: DataTypes.STRING,
    email: DataTypes.STRING,
    history_education: DataTypes.STRING,
    cv: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    github: DataTypes.STRING,
    birthday: DataTypes.STRING,
    final_project: DataTypes.STRING,
    score: DataTypes.STRING,
    award: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Graduate;
};