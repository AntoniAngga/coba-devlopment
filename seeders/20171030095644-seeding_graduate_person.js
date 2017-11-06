'use strict';
const uuid = require('uuid/v4');

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Graduates', [{
      id : uuid(),
      name:"Antoni Angga20",
      photo:"",
      history_education:"System Information",
      cv:"http://cv.com",
      phone_number:"+6281294373359",
      linkedin:"https://www.linkedin.com/in/antoni-angga-83442491/",
      github:"https://www.github.com/AntoniAngga",
      birthday:"1995-04-15",
      final_project:"https://youtube.com/asdads",
      score:"80",
      award: "",
      createdAt: new Date().toISOString().slice(0,10),
      updatedAt: new Date().toISOString().slice(0,10)
    }, {
      id: uuid(),
      name: "Antoni Angga1",
      photo: "",
      history_education: "System Information",
      cv: "http://cv.com",
      phone_number: "+6281294373359",
      linkedin: "https://www.linkedin.com/in/antoni-angga-83442491/",
      github: "https://www.github.com/AntoniAngga",
      birthday: "1995-04-15",
      final_project: "https://youtube.com/asdads",
      score: "80",
      award: "",
      createdAt: new Date().toISOString().slice(0,10),
      updatedAt: new Date().toISOString().slice(0,10)
    },{
      id: uuid(),
      name: "Antoni Angga2",
      photo: "",
      history_education: "System Information",
      cv: "http://cv.com",
      phone_number: "+6281294373359",
      linkedin: "https://www.linkedin.com/in/antoni-angga-83442491/",
      github: "https://www.github.com/AntoniAngga",
      birthday: "1995-04-15",
      final_project: "https://youtube.com/asdads",
      score: "80",
      award: "",
      createdAt: new Date().toISOString().slice(0,10),
      updatedAt: new Date().toISOString().slice(0,10)
    },{
      id: uuid(),
      name: "Antoni Angga3",
      photo: "",
      history_education: "System Information",
      cv: "http://cv.com",
      phone_number: "+6281294373359",
      linkedin: "https://www.linkedin.com/in/antoni-angga-83442491/",
      github: "https://www.github.com/AntoniAngga",
      birthday: "1995-04-15",
      final_project: "https://youtube.com/asdads",
      score: "80",
      award: "",
      createdAt: new Date().toISOString().slice(0,10),
      updatedAt: new Date().toISOString().slice(0,10)
    },{
      id: uuid(),
      name: "Antoni Angga4",
      photo: "",
      history_education: "System Information",
      cv: "http://cv.com",
      phone_number: "+6281294373359",
      linkedin: "https://www.linkedin.com/in/antoni-angga-83442491/",
      github: "https://www.github.com/AntoniAngga",
      birthday: "1995-04-15",
      final_project: "https://youtube.com/asdads",
      score: "80",
      award: "",
      createdAt: new Date().toISOString().slice(0,10),
      updatedAt: new Date().toISOString().slice(0,10)
    },{
      id: uuid(),
      name: "Antoni Angga5",
      photo: "",
      history_education: "System Information",
      cv: "http://cv.com",
      phone_number: "+6281294373359",
      linkedin: "https://www.linkedin.com/in/antoni-angga-83442491/",
      github: "https://www.github.com/AntoniAngga",
      birthday: "1995-04-15",
      final_project: "https://youtube.com/asdads",
      score: "80",
      award: "",
      createdAt: new Date().toISOString().slice(0,10),
      updatedAt: new Date().toISOString().slice(0,10)
    }, {
      id:uuid(),
      name: "Antoni Angga6",
      photo: "",
      history_education: "System Information",
      cv: "http://cv.com",
      phone_number: "+6281294373359",
      linkedin: "https://www.linkedin.com/in/antoni-angga-83442491/",
      github: "https://www.github.com/AntoniAngga",
      birthday: "1995-04-15",
      final_project: "https://youtube.com/asdads",
      score: "80",
      award: "",
      createdAt: new Date().toISOString().slice(0,10),
      updatedAt: new Date().toISOString().slice(0,10)
    }, {
      id: uuid(),
      name: "Antoni Angga7",
      photo: "",
      history_education: "System Information",
      cv: "http://cv.com",
      phone_number: "+6281294373359",
      linkedin: "https://www.linkedin.com/in/antoni-angga-83442491/",
      github: "https://www.github.com/AntoniAngga",
      birthday: "1995-04-15",
      final_project: "https://youtube.com/asdads",
      score: "80",
      award: "",
      createdAt: new Date().toISOString().slice(0,10),
      updatedAt: new Date().toISOString().slice(0,10)
    }, {
      id: uuid(),
      name: "Antoni Angga8",
      photo: "",
      history_education: "System Information",
      cv: "http://cv.com",
      phone_number: "+6281294373359",
      linkedin: "https://www.linkedin.com/in/antoni-angga-83442491/",
      github: "https://www.github.com/AntoniAngga",
      birthday: "1995-04-15",
      final_project: "https://youtube.com/asdads",
      score: "80",
      award: "",
      createdAt: new Date().toISOString().slice(0,10),
      updatedAt: new Date().toISOString().slice(0,10)
    }, {
      id: uuid(),
      name: "Antoni Angga9",
      photo: "",
      history_education: "System Information",
      cv: "http://cv.com",
      phone_number: "+6281294373359",
      linkedin: "https://www.linkedin.com/in/antoni-angga-83442491/",
      github: "https://www.github.com/AntoniAngga",
      birthday: "1995-04-15",
      final_project: "https://youtube.com/asdads",
      score: "80",
      award: "",
      createdAt: new Date().toISOString().slice(0,10),
      updatedAt: new Date().toISOString().slice(0,10)
    },{
      id: uuid(),
      name: "Antoni Angga10",
      photo: "",
      history_education: "System Information",
      cv: "http://cv.com",
      phone_number: "+6281294373359",
      linkedin: "https://www.linkedin.com/in/antoni-angga-83442491/",
      github: "https://www.github.com/AntoniAngga",
      birthday: "1995-04-15",
      final_project: "https://youtube.com/asdads",
      score: "80",
      award: "",
      createdAt: new Date().toISOString().slice(0,10),
      updatedAt: new Date().toISOString().slice(0,10)
    }])
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Graduate', null, {});
  }
};
