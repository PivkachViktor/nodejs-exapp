const express = require('express');
const mongoose = require('mongoose');
const task1Route = require('./routes/task1'); 
const task2Route = require('./routes/task2'); 

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb://localhost:27017/mkr1';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Підключено до бази даних MongoDB');
})
.catch((error) => {
  console.error('Помилка підключення до бази даних MongoDB:', error);
});


app.use('/task1',task1Route);
app.use('/task2',task2Route);


app.listen(PORT, () => {
  console.log(`Сервер запущено на порті ${PORT}`);
});
