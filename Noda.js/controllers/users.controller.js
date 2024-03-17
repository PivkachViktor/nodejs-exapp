const userService = require('../services/users.service');
const createError = require('http-errors');
const { userByIdValidation } = require('../middlewares/users.middleware');

async function createUser(req, res, next) {
    try {
        const newUser = await userService.createUser(req.body);
        res.status(200).json({
            status: 200,
            data: newUser,
        });
    } catch(err) {
        next(createError.InternalServerError(err.message));
    }
};

async function getUsers(req, res, next) {
    try {
        res.status(200).json({
            status: 200,
            data: await userService.getUsers(req.query),
        });
    } catch(err) {
        next(createError.InternalServerError(err.message));
    }
};

async function getUser(req, res, next) {
    try {
        const { userId } = req.params;
        const user = await userService.getUserById(userId);

        if (!user) {
            return res.status(400).json({
                status: 400,
                error: {
                    message: 'User not found.'
                },
            });
        }

        res.status(200).json({
            status: 200,
            data: user,
        });
    } catch(err) {
        next(createError.InternalServerError(err.message));
    }
};

async function updateUser(req, res, next) {
    try {
        const { userId } = req.params;
        const userData = req.body;
        await userService.updateUser(userId, userData);

        res.status(200).json({
            status: 200,
        });
    } catch(err) {
        next(createError.InternalServerError(err.message));
    }
};

async function deleteUser(req, res, next) {
    try {
        const { userId } = req.params;
        await userService.deleteUser(userId);

        res.status(200).json({
            status: 200,
        });
    } catch(err) {
        next(createError.InternalServerError(err.message));
    }
};

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser,
};
