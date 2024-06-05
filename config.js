require('dotenv').config();

const config = {
    port: process.env.PORT || 3000,
    mongodb_uri: process.env.MONGODB_URI || 'mongodb://localhost:27017',
};

module.exports = config;
