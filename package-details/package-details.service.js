'use strict'
const request = require('request');

function packageService() {
    function getPackage(name, version) {
        return new Promise((resolve, reject) => {
            request(`https://registry.npmjs.org/${name}/${version}`,
                (err, response, body) => {
                    if (response.statusCode !== '200') {
                        reject(JSON.parse(body));
                    } else {
                        resolve(JSON.parse(body));
                    }
                });
        });
    }
    return {
        getPackage: getPackage
    }
}

module.exports = packageService();
