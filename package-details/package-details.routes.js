'use strict'
const router = require('express').Router()
const packageService = require('./package-details.service');
const packageController = require('./package-details.controller')(packageService);

function itemRoutes() {
    router.get('/', (req, res) => {
        if (req && req.query && req.query.name) {
            console.log(req.query)
            packageController.getPackage(req.query.name, req.query.version)
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
