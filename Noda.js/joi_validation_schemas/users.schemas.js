const Joi = require('joi');

const UserCreateSchema = Joi.object({
    lastName: Joi.string()
        .min(2)
        .max(60)
        .required(),

    roomNumber: Joi.string()
        .pattern(/^(1\d\d|200)$/) 
        .required(),

    department: Joi.number()
        .integer()
        .min(1)
        .max(10)
        .required(),

    computerBrand: Joi.string()
        .valid('Brand1', 'Brand2', 'Brand3', 'Brand4', 'Brand5', 'Brand6', 'Brand7') 
        .required()
});

const UserUpdateSchema = Joi.object({
    lastName: Joi.string()
        .min(2)
        .max(60),

    roomNumber: Joi.string()
        .pattern(/^(1\d\d|200)$/), // Від 100 до 200

    department: Joi.number()
        .integer()
        .min(1)
        .max(10),

    computerBrand: Joi.string()
        .valid('Brand1', 'Brand2', 'Brand3', 'Brand4', 'Brand5', 'Brand6', 'Brand7') // 7 різних брендів
});

module.exports = {
    UserCreateSchema,
    UserUpdateSchema
};
