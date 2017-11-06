'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Companies', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      phone_number: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      agrement_sign: {
        type: Sequelize.STRING
      },
      link_agrement: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      id_graduate: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Companies');
  }
};