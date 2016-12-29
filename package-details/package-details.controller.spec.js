(function() {
    'use strict';
    const packageService = {
        getPackage: (name, version = '1.3.6') => {
            let output = {
                name: name,
                dependencies: {
                    marioBros: '1.4.0'
                }
            };
            if (version === 'latest') {
                output.version = '1.3.6';
            } else {
                output.version = version;
            }
            return output;
        }
    };

    const packageController = require('./package-details.controller')(packageService);
    const should = require('should');
    const sinon = require('sinon');

    describe('Package controller', () => {
        describe('Given package with name and version', () => {
            it('should return package dependencies', () => {
                let expected = {
                    name: 'request',
                    version: '1.3.6',
                    dependencies: {
                        marioBros: '1.4.0'
                    }
                }
                let actual = packageController.getPackage('request', '1.3.6');

                expected.should.be.deepEqual(actual);
            });
            it(`should return valid package when querying with 'latest' as a version`, () => {
                let expected = {
                    name: 'request',
                    version: '1.3.6',
                    dependencies: {
                        marioBros: '1.4.0'
                    }
                }
                let actual = packageController.getPackage('request', 'latest');

                expected.should.be.deepEqual(actual);
            });
        })
    })
}());
