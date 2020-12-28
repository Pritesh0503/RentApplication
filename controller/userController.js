const UserModel = require('../Model/dbSchema');
const validators = require('../Utilities/validator');

exports.newUser = async (req, res) => {
    try {
        if (validators.ValidateName(req.body.name) && validators.ValidateEmail(req.body.email) && validators.ValidateContact(req.body.contact)) {
            const newUser = await UserModel.create(req.body);
            res.status(201).json({
                status: 'success',
                data: {
                    newUser,
                },
            });
        } else {
            res.status(400).json({
                status: 'error',
                results: 'Invalid Data',
            });
        }
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await UserModel.findOneAndUpdate(
            { userID: req.params.userId },
            req.body,
            {
                new: true, //to return new doc back
                runValidators: true, //to run the validators which specified in the model
            }
        );
        if (user != null) {
            res.status(200).json({
                status: 'success',
                data: {
                    user,
                },
            });
        } else {
            res.status(400).json({
                status: 'success',
                data: {
                    message: `No user available with ID ${req.params.userId} `,
                },
            });
        }
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.deleteUser = async (req, res) => {
    const delUser = await UserModel.deleteOne({ userID: req.params.id });
    if (delUser.deletedCount === 0) {
        res.status(404).json({
            status: 'fail',
            message: 'No user available for this ID',
        });
    } else {
        res.status(200).json({
            status: 'success',
            message: `user with ${req.params.id} ID deleted`,
        });
    }
};

exports.invalid = async (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: 'Invalid path',
    });
};
