'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Santris', [
      {
        name: "Ahmad",
        parent: "Dhani",
        birth_year: "2009",
        gender: "male",
        address: "Jl.Jakarta",
        email: "ahmad@gmail.com",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: "Maia",
        parent: "Krisdayanti",
        birth_year: "2008",
        gender: "female",
        address: "Jl.Bandung",
        email: "maia@gmail.com",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        name: "Anang",
        parent: "Asyanti",
        birth_year: "2010",
        gender: "male",
        address: "Jl.Semarang",
        email: "anang@gmail.com",
        createdAt : new Date(),
        updatedAt : new Date()
      }

    ], {});
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Santris', null, {});
  }
};
