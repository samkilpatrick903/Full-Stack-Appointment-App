const router = require('express').Router();
const patientRoutes = require('./patientRoutes');
const doctorRoutes = require('./doctorRoutes');
const appointmentsRoutes = require('./appointmentsRoutes');

router.use('/patient', patientRoutes);
router.use('/doctor', doctorRoutes);
router.use('/appointments', appointmentsRoutes);

module.exports = router;



