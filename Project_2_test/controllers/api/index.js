const router = require('express').Router();
const userRoutes = require('./userRoutes');
const appointmentsRoutes = require('./appointmentsRoutes');

router.use('/users', userRoutes);
router.use('/appointments', appointmentsRoutes);

module.exports = router;
