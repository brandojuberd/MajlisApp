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
     * 
    */
    return queryInterface.bulkInsert('UstadzSantris', [
      {
        result: "Baik",
        UstadzId: 1,
        SantriId: 3,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        result: "Cukup",
        UstadzId: 2,
        SantriId: 1,
        createdAt : new Date(),
        updatedAt : new Date()
      },
      {
        result: "Kurang",
        UstadzId: 3,
        SantriId: 2,
        createdAt : new Date(),
        updatedAt : new Date()
      },

    ], {});
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('UstadzSantris', null, {});
  }
};
