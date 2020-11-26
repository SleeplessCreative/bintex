"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return await queryInterface.bulkInsert("roles", [
      {
        role_name: "Administator",
        description: "Account manager",
      },
      {
        role_name: "Cashier",
        description: "Money manager",
      },
      {
        role_name: "Customer Service",
        description: "Help center and blog editor",
      },
      {
        role_name: "Agent",
        description: "Receipt service",
      },
      {
        role_name: "Droppointer",
        description: "Drop pointer",
      },
      {
        role_name: "Driver",
        description: "Driver",
      },
      {
        role_name: "Courier",
        description: "Courier",
      },
      {
        role_name: "Customer",
        description: "Customer",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return await queryInterface.bulkDelete("roles", null, {});
  },
};
