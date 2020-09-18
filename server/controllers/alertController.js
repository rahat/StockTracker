var alertModel = require('../models/alertModel.js');

/**
 * alertController.js
 *
 * @description :: Server-side logic for managing alerts.
 */
module.exports = {

    /**
     * alertController.list()
     */
    list: function (req, res) {
        alertModel.find(function (err, alerts) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting alert.',
                    error: err
                });
            }
            return res.json(alerts);
        });
    },

    /**
     * alertController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        alertModel.findOne({ _id: id }, function (err, alert) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting alert.',
                    error: err
                });
            }
            if (!alert) {
                return res.status(404).json({
                    message: 'No such alert'
                });
            }
            return res.json(alert);
        });
    },

    /**
     * alertController.create()
     */
    create: function (req, res) {
        var alert = new alertModel({
            symbol: req.body.symbol,
            price: req.body.price,
            operation: req.body.operation,
            category: req.body.category,
            active: req.body.active,
            user: req.body.user

        });

        alert.save(function (err, alert) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating alert',
                    error: err
                });
            }
            return res.status(201).json(alert);
        });
    },

    /**
     * alertController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        alertModel.findOne({ _id: id }, function (err, alert) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting alert',
                    error: err
                });
            }
            if (!alert) {
                return res.status(404).json({
                    message: 'No such alert'
                });
            }

            alert.symbol = req.body.symbol ? req.body.symbol : alert.symbol;
            alert.price = req.body.price ? req.body.price : alert.price;
            alert.operation = req.body.operation ? req.body.operation : alert.operation;
            alert.category = req.body.category ? req.body.category : alert.category;
            alert.active = req.body.active;
            alert.user = req.body.user ? req.body.user : alert.user;

            alert.save(function (err, alert) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating alert.',
                        error: err
                    });
                }

                return res.json(alert);
            });
        });
    },

    /**
     * alertController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        alertModel.findByIdAndRemove(id, function (err, alert) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the alert.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
