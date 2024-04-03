const CountOnes = require('../models/CountOnes');

exports.countOnes = async (req, res) => {
  const number = req.params.number;
  const countOnes = number.toString().split('').filter(digit => digit === '1').length;

  try {
    const countOnesResult = new CountOnes({
      number: Number(number),
      count: countOnes
    });
    await countOnesResult.save();
    res.json({ countOnes });
  } catch (error) {
    console.error('Помилка збереження результату:', error);
    res.status(500).json({ error: 'Помилка сервера при збереженні результату' });
  }
};
