const createError = require('http-errors');
const ObjectId = require('mongoose').Types.ObjectId;
const userService = require('../services/users.service');
const { UserCreateSchema, UserUpdateSchema } = require('../joi_validation_schemas/users.schemas');

async function userByIdValidation(req, res, next) {
    try {
        const { userId } = req.params;

        if (!ObjectId.isValid(userId)) {
            throw createError.BadRequest("User id is not valid");
        }

        const user = await userService.getUserById(userId);

        if (!user) {
            throw createError.NotFound("User with such id not found");
        }

        next();
    } catch(err) {
        next(err);
    }
};

const userCreationDataValidation = async (req, res, next) => {
    try {
        const { error } = UserCreateSchema.validate(req.body);

        if (error) {
            throw createError.BadRequest(error.details[0].message);
        }

        next();
    } catch (err) {
        next(err);
    }
};

const userUpdateDataValidation = async (req, res, next) => {
    try {
        const { error } = UserUpdateSchema.validate(req.body);

        if (error) {
            throw createError.BadRequest(error.details[0].message);
        }

        next();
    } catch (err) {
        next(err);
    }
};

module.exports = {
    userCreationDataValidation,
    userUpdateDataValidation,
    userByIdValidation,
};