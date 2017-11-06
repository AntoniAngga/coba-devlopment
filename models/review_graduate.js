'use strict';
module.exports = function(sequelize, DataTypes) {
  var Review_graduate = sequelize.define('Review_graduate', {
    notes: DataTypes.STRING,
    status: DataTypes.STRING,
    id_company: DataTypes.STRING,
    id_graduate: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Review_graduate;
};