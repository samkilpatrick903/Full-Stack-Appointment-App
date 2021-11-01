const sequelize = require('../config/connection');
const { appointments, doctor, patient } = require('../models');

const appointmentsData = require('./appointments.json');
const doctorData = require('./doctor.json');
const patientData = require('./patient.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const patients = await patient.bulkCreate(patientData, {
    individualHooks: true,
    returning: true,
  });

  for (const patients of patientData) {
    await patient.create({
      ...patient,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  const doctors = await doctor.bulkCreate(doctorData, {
    individualHooks: true,
    returning: true,
  });

  for (const doctors of doctorData) {
    await doctor.create({
      ...doctor,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  
  const appointment = await appointments.bulkCreate(appointmentsData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedDatabase();