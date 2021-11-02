const sequelize = require('../config/connection');
const { Appointments, Doctor, Patient } = require('../models');

const appointmentsData = require('./appointments.js');
const doctorData = require('./doctor.json');
const patientData = require('./patient.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const patients = await Patient.bulkCreate(patientData, {
    individualHooks: true,
    returning: true,
  });

  const doctors = await Doctor.bulkCreate(doctorData, {
    individualHooks: true,
    returning: true,
  });

  const appointment = await Appointments.bulkCreate(appointmentsData, {
    individualHooks: true,
    returning: true,
  });

console.log(patients, doctors, appointment);
  process.exit(0);
};

seedDatabase();