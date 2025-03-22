"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "News",
      [
        {
          newsImg: "https://ik.imagekit.io/RifqiAfandi/news.jpg?updatedAt=1742627198505",
          createdAt: new Date(), 
          updatedAt: new Date() 
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("News", null, {});
  },
};
