const ProgressionCheck = require('../models/ProgressionCheck');

exports.checkProgression = async (req, res) => {
  const { a, b, c } = req.query;
  const isArithmeticProgression = (Number(c) - Number(b) === Number(b) - Number(a));

  try {
    const progressionCheckResult = new ProgressionCheck({
      a: Number(a),
      b: Number(b),
      c: Number(c),
      isArithmeticProgression
    });
    await progressionCheckResult.save();
    res.json({ isArithmeticProgression });
  } catch (error) {
    console.error('Помилка збереження результату:', error);
    res.status(500).json({ error: 'Помилка сервера при збереженні результату' });
  }
};
