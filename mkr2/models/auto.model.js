const { Schema, model } = require("mongoose");

const autoSchema = new Schema(
    {
        surname: {
            type: String,
            required: true,
        },
        carNumber: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("Auto", autoSchema, "auto");
