'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Graduates', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      phone_number:{
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      history_education: {
        type: Sequelize.STRING
      },
      cv: {
        type: Sequelize.STRING
      },
      linkedin: {
        type: Sequelize.STRING
      },
      github: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.STRING
      },
      final_project: {
        type: Sequelize.STRING
      },
      score: {
        type: Sequelize.STRING
      },
      award: {
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
    return queryInterface.dropTable('Graduates');
  }
};
