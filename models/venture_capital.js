'use strict';
module.exports = function(sequelize, DataTypes) {
  var Venture_capital = sequelize.define('Venture_capital', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Venture_capital;
};