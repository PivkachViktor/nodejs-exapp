const express = require('express');
const usersRouter = require('./routes/users.route');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware для обробки JSON-даних
app.use(express.json());

// Маршрути для користувачів
app.use('/users', usersRouter);

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
