const router = require('express').Router();
const userRoutes = require('./patientRoutes');
const projectRoutes = require('./doctorRoutes');
const projectRoutes = require('./appointmentRoutes');

router.use('/patient', patientRoutes);
router.use('/doctor', doctorRoutes);
router.use('/appointment', appointmentRoutes)

module.exports = router;
