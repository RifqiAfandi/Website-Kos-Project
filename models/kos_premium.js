"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Kos_Premium extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kos_Premium.init(
    {
      name: { type: DataTypes.STRING, allowNull: false },
      gender: {
        type: DataTypes.ENUM("Putra", "Putri"),
        defaultValue: "Putra",
        validate: {
          isIn: {
            args: [["Putra", "Putri"]],
            msg: "Gender Tidak Ditemukan",
          },
        },
        allowNull: false,
      },
      description: { type: DataTypes.STRING, allowNull: false },
      phone_number: { type: DataTypes.INTEGER, allowNull: false },
      city: { type: DataTypes.STRING, allowNull: false },
      price: { type: DataTypes.BIGINT, allowNull: false },
      facility: { type: DataTypes.STRING, allowNull: false },
      kosImg: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Kos_Premiums",
    }
  );
  return Kos_Premium;
};
