const User = require('../models/user.model');
const { UserCreateSchema, UserUpdateSchema } = require('../joi_validation_schemas/users.schemas');
const createError = require('http-errors');

async function createUser(userData) {
    try {
        const { error } = UserCreateSchema.validate(userData);
        if (error) {
            throw createError.BadRequest(error.details[0].message);
        }

        return await User.create(userData);
    } catch (err) {
        throw err;
    }
}

async function getUsers() {
    try {
        return await User.find();
    } catch (err) {
        throw err;
    }
}

async function getUserById(userId) {
    try {
        return await User.findById(userId);
    } catch (err) {
        throw err;
    }
}

async function updateUser(userId, userData) {
    try {
        const { error } = UserUpdateSchema.validate(userData);
        if (error) {
            throw createError.BadRequest(error.details[0].message);
        }

        return await User.findByIdAndUpdate(userId, userData, { new: true });
    } catch (err) {
        throw err;
    }
}

async function deleteUser(userId) {
    try {
        return await User.findByIdAndDelete(userId);
    } catch (err) {
        throw err;
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
};
