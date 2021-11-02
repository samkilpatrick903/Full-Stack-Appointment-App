const router = require('express').Router();
const { Appointments } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const appointmentsData = await Appointments.create(req.body);

    req.session.save(() => {
      req.session.user_id = appointmentsData.id;
      req.session.logged_in = true;

      res.status(200).json(appointmentsData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const appointmentsData = await Appointments.findOne({ where: { email: req.body.email } });

    if (!appointmentsData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await appointmentsData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = appointmentsData.id;
      req.session.logged_in = true;
      
      res.json({ user: appointmentsData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;