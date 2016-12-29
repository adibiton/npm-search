(function() {

    'use strict';
    const should = require('should');
    const sinon = require('sinon');
    const sinonStubPromise = require('sinon-stub-promise');
    sinonStubPromise(sinon);

    const packageService = require('./package-details.service');

    describe('Package service', () => {

        let avengersPackage = {
            name: 'avengers',
            version: '1.0.0',
            dependencies: {
                marioBros: '1.3.0',
                transformers: '2.3.0',
                goldenAxe: '2.4.2'
            }
        }

        let powerRangersPackage = {};

        before(() => {
            let s = sinon.stub(packageService, 'getPackage')
            s.withArgs('avengers', '1.0.0')
                .returnsPromise().resolves(avengersPackage);
            s.withArgs('avengers', '0.8.0')
                .returnsPromise()
                .rejects('version not found: 0.8.0');
            s.withArgs('avengers')
                .returnsPromise().resolves(avengersPackage);
        });

        after(() => {
            sinon.restore(packageService.getPackage);
        });

        it('should exist', () => {
            const service = require('./package-details.service');
            service.should.not.be.undefined;
        })

        it('should return package details for the given package name-version', (done) => {
            packageService.getPackage('avengers', '1.0.0')
                .then((actual) => {
                    actual.should.be.deepEqual(avengersPackage);
                    done();
                })
        })

        it('quering with latest package should return the latest version number', (done) => {
            packageService.getPackage('avengers')
                .then((actual) => {
                    actual.should.be.deepEqual(avengersPackage);
                    done();
                })
        })

        it(`should output an error in case the version of the package doesn't exist`,
            (done) => {
                packageService.getPackage('avengers', '0.8.0')
                    .catch((error) => {
                        error.should.be.equal(`version not found: 0.8.0`);
                        done();
                    });
            })

    });
}());
