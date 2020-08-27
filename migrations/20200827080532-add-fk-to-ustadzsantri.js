'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return queryInterface.addColumn("UstadzSantris", "UstadzId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Ustadzs",
        key: "id"
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE"
    })
      .then(function(){
        queryInterface.addColumn("UstadzSantris", "SantriId", {
          type: Sequelize.INTEGER,
          references: {
            model: "Santris",
            key: "id"
          },
        onUpdate: "CASCADE",
        onDelete: "CASCADE"
        })
      })

  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeColumn("UstadzSantris", "UstadzId")
      .then(function(){
        queryInterface.removeColumn("UstadzSantris", "SantriId")
      })
  }
};
