const ItemModel = require('../Model/dbSchema');

exports.newItem = async (req, res) => {
    try {
        const newItem = await ItemModel.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                newItem,
            },
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err,
        });
    }
};

exports.updateItem = async (req, res) => {
    try {
        const item = await ItemModel.findOneAndUpdate(
            { itemID: req.params.itemId },
            req.body
        );
        if (item != null) {
            res.status(200).json({
                status: 'success',
                data: {
                    item,
                },
            });
        } else {
            res.status(400).json({
                status: 'success',
                data: {
                    message: `No item available with ID ${req.params.itemId} `,
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

exports.deleteItem = async (req, res) => {
    const delItem = await ItemModel.deleteOne({ itemID: req.params.id });
    if (delItem.deletedCount === 0) {
        res.status(404).json({
            status: 'fail',
            message: 'No item available for this ID',
        });
    } else {
        res.status(200).json({
            status: 'success',
            message: `item with ${req.params.id} ID deleted`,
        });
    }
};

exports.invalid = async (req, res) => {
    res.status(404).json({
        status: 'fail',
        message: 'Invalid path',
    });
};
