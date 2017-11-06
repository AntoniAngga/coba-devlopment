'use strict';
module.exports = function(sequelize, DataTypes) {
  var Logger = sequelize.define('Logger', {
    last_login: DataTypes.DATE,
    ip: DataTypes.STRING,
    browser: DataTypes.STRING,
    id_user: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Logger;
};