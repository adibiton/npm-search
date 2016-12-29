'use strict'

function packageController(packageService) {
    function getPackage(packageName, packageVersion = 'latest') {
				return packageService.getPackage(packageName, packageVersion);
    }
    return {
        getPackage: getPackage
    }
}

module.exports = packageController;
