const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

patient.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      starting_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      ending_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'patient',
    }
  );
  
  module.exports = patient;