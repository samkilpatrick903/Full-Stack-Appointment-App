const router = require('express').Router();
const patientRoutes = require('../../Project_2_test/controllers/api/patientRoutes');
const doctorRoutes = require('../../Project_2_test/controllers/api/doctorRoutes');
const projectRoutes = require('./appointmentRoutes');

router.use('/patient', patientRoutes);
router.use('/doctor', doctorRoutes);
router.use('/appointment', appointmentRoutes)

module.exports = router;
