const inputValidation = (req, res, next) => {
    const { a, b, c } = req.query;
  
    
    if (!a || !b || !c) {
      return res.status(400).json({ error: 'Будь ласка, передайте всі параметри: a, b, c' });
    }
  
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      return res.status(400).json({ error: 'Усі параметри повинні бути числами' });
    }
  
    next(); 
  };
  
  module.exports = inputValidation;
  