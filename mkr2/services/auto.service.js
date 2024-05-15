// services/auto.service.js

const autoModel = require("../models/auto.model");

async function create(auto) {
    return autoModel.create(auto);
}

async function find() {
    return {
        items: await autoModel.find({}),
        count: await autoModel.countDocuments({}),
    };
}

async function findById(id) {
    return autoModel.findById(id);
}

async function findByIdAndUpdate(id, update) {
    return autoModel.findByIdAndUpdate(id, update, { upsert: false, new: true });
}

async function findByIdAndDelete(id) {
    return autoModel.findByIdAndDelete(id);
}

module.exports = {
    create,
    find,
    findById,
    findByIdAndUpdate,
    findByIdAndDelete,
};
