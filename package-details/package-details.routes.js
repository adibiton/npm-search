'use strict'
const router = require('express').Router()
const packageService = require('./package-details.service');
const packageController = require('./package-details.controller')(packageService);

function itemRoutes() {
    router.get('/:name/:version', (req, res) => {
        if (req && req.params && req.params.name) {
            packageController.getPackage(req.params.name, req.params.version)
                .then((packageDetails) => {
                    res.send({
                        name: packageDetails.name,
                        version: packageDetails.version,
                        dependencies: packageDetails.dependencies
                    });
                })
                .catch((error) => {
                    res.send(error);
                });
        }
    });
    return router;
}

module.exports = itemRoutes();
