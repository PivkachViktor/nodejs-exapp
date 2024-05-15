const autoService = require('../services/auto.service');
const fs = require('fs').promises;
const path = require('path');

async function createAuto(req, res) {
    try {
        const newAuto = await autoService.create(req.body);

        res.status(200).json({
            status: 200,
            data: newAuto,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};

async function getAutos(req, res) {
    try {
        res.status(200).json({
            status: 200,
            data: await autoService.find({}),
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
};


async function createAutoFromJSONFile(req, res) {
    try {
        const fileItem = req.file;
        if (!fileItem) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const filePath = path.join(__dirname, '..', fileItem.path);
        const data = await fs.readFile(filePath, 'utf8');
        const autoItems = JSON.parse(data);

        autoItems.forEach(async (item) => {
            await autoService.create(item);
        });

        res.status(201).json({
            status: 201,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            status: 500,
            error: err,
        });
    }
}

module.exports = {
    createAuto,
    getAutos,
    
    createAutoFromJSONFile,
};
