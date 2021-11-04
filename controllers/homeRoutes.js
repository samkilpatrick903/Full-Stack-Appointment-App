const router = require('express').Router();
const { Patient } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const patientData = await Patient.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'email']],
    });

    const patients = patientData.map((appointments) => appointments.get({ plain: true }));

    res.render('homepage', {
      patients,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//If successful login send patient to appointments page
router.get('/appointments', withAuth, async (req, res) => {
  res.render('appointments')
});


router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
