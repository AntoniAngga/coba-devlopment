'use strict';
module.exports = function(sequelize, DataTypes) {
  var History_graduate = sequelize.define('History_graduate', {
    salary: DataTypes.INTEGER,
    notes: DataTypes.STRING,
    status: DataTypes.STRING,
    id_graduate: DataTypes.STRING,
    id_company: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return History_graduate;
};