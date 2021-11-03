const Patient = require('./Patient');
const Appointments = require('./Appointments');
const Doctor = require('./Doctor');

Patient.hasMany(Appointments, {
  foreignKey: 'Patient_id',
  onDelete: 'CASCADE'
});

Appointments.belongsTo(Patient, {
  foreignKey: 'Patient_id'
});

Doctor.hasMany(Appointments, {
  foreignKey: 'Doctor_id',
  onDelete: 'CASCADE'
});

Appointments.belongsTo(Doctor, {
  foreignKey: 'Doctor_id'
});

module.exports = { Patient, Appointments, Doctor };
