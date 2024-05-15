// app.js

const { port, mongodb_uri } = require('./config');
const multer = require('multer');

const mongoose = require('mongoose');
const express = require('express');
const createError = require('http-errors');

const startScheduleJobs = require('./Jobs');

mongoose.connect(mongodb_uri)
    .then(() => {
        console.log('Mongo DB connected');
        startScheduleJobs();
    });

const app = express();

app.use(express.static('public'));
app.use(express.json());

app.use((req, res, next) => {
    console.log(`[${new Date().toUTCString()}] ${req.method}: ${req.path}`);
    next();
});

app.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        data: {
            message: "Node.js ExApp"
        }
    })
});

// Використання маршрутів для автомобілів
const autoRoute = require('./routes/auto.route');
app.use('/auto', autoRoute);

app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE') {
            throw createError.BadRequest('File size limit exceeded. Please upload a smaller file.');
        }
    }
    next(err);
});

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    console.error(`${'\x1b[31m'}[${new Date().toUTCString()}] ${req.method}: ${req.path}. Error(${errorStatus}): ${err.message}`, '\x1b[0m');
    res.status(errorStatus).send({
        status: errorStatus,
        error: err
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

