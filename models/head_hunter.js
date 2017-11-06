'use strict';
module.exports = function(sequelize, DataTypes) {
  var Head_hunter = sequelize.define('Head_hunter', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Head_hunter;
};