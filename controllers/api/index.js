const router = require('express').Router();
const userRoutes = require('../../Project_2_test/controllers/api/userRoutes');
const patientRoutes = require('./patientRoutes');
const doctorRoutes = require('./doctorRoutes');
const appointmentsRoutes = require('./appointmentsRoutes');

router.use('/users', userRoutes);
router.use('/patient', patientRoutes);
router.use('/doctor', doctorRoutes);
router.use('/appointments', appointmentsRoutes);

module.exports = router;
