const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Patient extends Model {
  checkPassword(pass){
    console.log(pass)
    return bcrypt.compareSync(pass, this.password)
  }
}

Patient.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {    
    hooks: {
    beforeCreate: async (newPatientData) => {
      newPatientData.password = await bcrypt.hash(newPatientData.password, 10);
      return newPatientData;
    },
    beforeUpdate: async (updatedPatientData) => {
      updatedPatientData.password = await bcrypt.hash(updatedPatientData.password, 10);
      return updatedPatientData;
    },
  },

      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'patient',
    }
  );
  
  module.exports = Patient;