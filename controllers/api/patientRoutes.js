const router = require('express').Router();
const { Patient } = require('../../models');

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
  try {
    const patientData = await Patient.findOne({ where: { email: req.body.email } });

    if (!patientData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await patientData.checkPassword(req.body.password);

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
    res.status(400).json(err);
  }
});

router.get('/', async (req, res) => {
  // find all patient
  try {
    const patientData = await Patient.findAll({
      // be sure to include its associated Products
      include: [{ model: Patient }],
    });
    res.status(200).json(patientData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one appointment by its `id` value
  try {
    const patientData = await Patient.findByPk(req.params.id,{
  // be sure to include its associated Products
  include: [{ model: Patient }],
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
   