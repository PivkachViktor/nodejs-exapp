const createError = require('http-errors');
const ObjectId = require('mongoose').Types.ObjectId;
const userService = require('../services/users.service');
const { UserCreateSchema, UserUpdateSchema } = require('../joi_validation_schemas/users.schemas');
const multer = require('multer');

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

const userUploadProfilePicture = multer({
    storage: multer.diskStorage({
      destination: 'public/profilePictures/',
    }),
    limits: { fileSize: 100 * 1024 /* bytes */ },
    fileFilter: (req, file, callback) => {
      if (!['image/png', 'image/jpeg', 'image/jpg', 'image/webp'].includes(file.mimetype)) {
        return callback(createError.BadRequest("File is not allowed"));
      }

      callback(null, true);
    }
}).single('file');

const usersUpload = multer().single('file');

module.exports = {
    userCreationDataValidation,
    userUpdateDataValidation,
    userByIdValidation,
    userUploadProfilePicture,
    usersUpload,
};