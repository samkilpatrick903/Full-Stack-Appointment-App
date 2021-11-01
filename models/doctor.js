const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class doctor extends Model {}

doctor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calendar: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false,

    },
    end: {
      type: DataTypes.DATE,
      allowNull: false,

    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'doctor',
  }
);
  
  module.exports = doctor;