const User = require('../models/user.model');

async function createUser(req, res) {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json({ status: 201, data: newUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 500, error: err });
    }
}

async function getUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json({ status: 200, data: users });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 500, error: err });
    }
}

async function getUser(req, res) {
    try {
        const user = await User.findById(req.params.userId);
        if (!user) {
            return res.status(404).json({ status: 404, message: 'User not found.' });
        }
        res.status(200).json({ status: 200, data: user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 500, error: err });
    }
}

async function updateUser(req, res) {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ status: 404, message: 'User not found.' });
        }
        res.status(200).json({ status: 200, data: updatedUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 500, error: err });
    }
}

async function deleteUser(req, res) {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.userId);
        if (!deletedUser) {
            return res.status(404).json({ status: 404, message: 'User not found.' });
        }
        res.status(200).json({ status: 200 });
    } catch (err) {
        console.error(err);
        res.status(500).json({ status: 500, error: err });
    }
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
};
