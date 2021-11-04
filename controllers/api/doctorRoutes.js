const router = require('express').Router();
const { Doctor } = require('../../models');
// Route to create a new doctor
router.post('/', async (req, res) => {
  try {
    const newDoctor = await Doctor.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newDoctor);
  } catch (err) {
    res.status(400).json(err);
  }
});
//Route to delete a doctor
router.delete('/:id', async (req, res) => {
  try {
    const doctorData = await Doctor.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!doctorData) {
      res.status(404).json({ message: 'No doctor found with this id!' });
      return;
    }

    res.status(200).json(doctorData);
  } catch (err) {
    res.status(500).json(err);
  }
});


router.get('/', async (req, res) => {
  // find all doctor
  try {
    const doctorData = await Doctor.findAll({
      // be sure to include their associated patients
      include: [{ model: Patient }],
    });
    res.status(200).json(doctorData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one doctor by its `id` value
  try {
    const doctorData = await Doctor.findByPk(req.params.id,{
  // be sure to include their associated patients
  include: [{ model: Patient }],
    });
    if (doctorData)
    res.status(200).json(doctorData);
    else {
      res.status(400).json("Does not exist!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
  });

  router.put('/:id', async (req, res) => {
    // update a doctor by their `id` value
    try {
      const doctorData = await Doctor.update(req.body,{
       where: {
         id: req.params.id,
       },
      });
      if (!doctorData) {
        res.status(404).json({ message: 'No doctor with this id!' });
        return;
      }
      res.status(200).json(doctorData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;
