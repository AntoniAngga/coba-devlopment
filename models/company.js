'use strict';
module.exports = function(sequelize, DataTypes) {
  var Company = sequelize.define('Company', {
    title: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    website: DataTypes.STRING,
    agrement_sign: DataTypes.STRING,
    link_agrement: DataTypes.STRING,
    type: DataTypes.STRING,
    id_graduate: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Company;
};