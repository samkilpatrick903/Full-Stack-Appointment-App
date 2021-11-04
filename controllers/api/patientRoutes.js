const router = require('express').Router();
const { Patient, Appointments } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const patientData = await Patient.create(req.body);

    req.session.save(() => {
      req.session.patient_id = patientData.id;
      req.session.logged_in = true;

      res.status(200).json(patientData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  console.log('login')
  try {
    const patientData = await Patient.findOne({ where: { email: req.body.email } });
    console.log(patientData)
    if (!patientData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await patientData.checkPassword(req.body.password);
    console.log('valid password', validPassword)
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.patient_id = patientData.id;
      req.session.logged_in = true;
      
      res.json({ patient: patientData, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.log(err)
    res.status(400).json(err);
  }
});


router.get('/', async (req, res) => {
  // find all patients
  try {
    const patientData = await Patient.findAll({
      // be sure to include its associated Appointments
      include: [{ model: Appointments }],
    });
    res.status(200).json(patientData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one patient appointment by its `id` value
  try {
    const patientData = await Patient.findByPk(req.params.id,{
  // be sure to include its associated Appointments
  include: [ {model: Appointments}],
    });
    if (patientData)
    res.status(200).json(patientData);
    else {
      res.status(400).json("Does not exist!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
  });

  router.put('/:id', async (req, res) => {
    // update a patient by its `id` value
    try {
      const patientData = await Patient.update(req.body,{
       where: {
         id: req.params.id,
       },
      });
      if (!patientData) {
        res.status(404).json({ message: 'No patient with this id!' });
        return;
      }
      res.status(200).json(patientData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    // delete a appointment by its `id` value
    try {
      const patientData = await Patient.destroy({
       where: {
         id: req.params.id,
       },
      });
      if (!patientData) {
        res.status(404).json({ message: 'No patient found with that id!' });
        return;
      }
      res.status(200).json(patientData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //route to create new appointment
  router.post('/', async (req, res) => {
    try {
      const patientData = await Patient.create({
        description: req.body.description,
        location: req.body.location,
        subject: req.body.subject,
        calendar: req.body.calendar,
        start: req.body.start,
        end: req.body.end
      });
      res.status(200).json(patientData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
   
  module.exports = router;