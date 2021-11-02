const router = require('express').Router();
const { Appointments, Patient } = require('../../models');

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

router.get('/', async (req, res) => {
  // find all appointments
  try {
    const appointmentsData = await Appointments.findAll({
      // be sure to include its associated Products
      include: [{ model: Patient }],
    });
    res.status(200).json(appointmentsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one appointment by its `id` value
  try {
    const appointmentsData = await Appointments.findByPk(req.params.id,{
  // be sure to include its associated Products
  include: [{ model: Patient }],
    });
    if (appointmentsData)
    res.status(200).json(appointmentsData);
    else {
      res.status(400).json("Does not exist!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
  });

  router.put('/:id', async (req, res) => {
    // update a appointment by its `id` value
    try {
      const appointmentsData = await Appointments.update(req.body,{
       where: {
         id: req.params.id,
       },
      });
      if (!appointmentsData) {
        res.status(404).json({ message: 'No category with this id!' });
        return;
      }
      res.status(200).json(appointmentsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    // delete a appointment by its `id` value
    try {
      const appointmentsData = await Appointments.destroy({
       where: {
         id: req.params.id,
       },
      });
      if (!appointmentsData) {
        res.status(404).json({ message: 'No category found with that id!' });
        return;
      }
      res.status(200).json(appointmentsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
   