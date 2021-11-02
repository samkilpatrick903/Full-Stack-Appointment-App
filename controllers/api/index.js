const router = require('express').Router();
const patientRoutes = require('./patientRoutes');
const doctorRoutes = require('./doctorRoutes');
const appointmentsRoutes = require('./appointmentsRoutes');

router.use('/Patient', patientRoutes);
router.use('/Doctor', doctorRoutes);
router.use('/Appointments', appointmentsRoutes);

module.exports = router;



