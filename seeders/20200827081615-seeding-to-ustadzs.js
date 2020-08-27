'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('Ustadzs', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Ustadzs', [
      {
        first_name: "John",
        last_name: "Doe",
        gender: "male",
        skill: "quran",
        phone_number: "021897234",
        email: "johndoe@gmail.com",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        first_name: "Abdul",
        last_name: "Doe",
        gender: "male",
        skill: "hadist",
        phone_number: "02134234",
        email: "abduldoe@gmail.com",
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        first_name: "Brando",
        last_name: "Doe",
        gender: "male",
        skill: "fiqih",
        phone_number: "02134533",
        email: "brandodoe@gmail.com",
        createdAt : new Date(),
        updatedAt : new Date()
      }

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Ustadzs', null, {});
     */
    return queryInterface.bulkDelete('Ustadzs', null, {});
  }
};
