'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            args: true,
            msg: 'Invalid email format'
          },
          notNull: {
            args: true,
            msg: 'Email is required'
          },
          notEmpty: {
            args: true,
            msg: 'Email is required'
          }
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Password is required'
          },
          notEmpty: {
            args: true,
            msg: 'Password is required'
          },
          len: {
            args: [6],
            msg: 'Password at least 6 characters'
          }
        }
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Name is required'
          },
          notEmpty: {
            args: true,
            msg: 'Name is required'
          }
        }
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: {
            args: true,
            msg: 'Phone is required'
          },
          notEmpty: {
            args: true,
            msg: 'Phone is required'
          }
        }
      },
      role: {
        type: Sequelize.ENUM('admin', 'user'),
        defaultValue: "user",
        validate: {
          isIn: {
            args: [['admin', 'user']],
            msg: 'Role must be admin or user'
          }
        }
      },
      profileImg: Sequelize.TEXT,
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};