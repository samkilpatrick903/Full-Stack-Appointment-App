const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Patient extends Model {}

Patient.init(
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
      freezeTableName: true,
      underscored: true,
      modelName: 'patient',
    }
  );
  
  module.exports = Patient;