(function() {
    'use strict'
    const packageModel = require('./package-details.model');

    describe(`Package model validity`, () => {
        describe(`given model`, () => {
            it(`should throw an error in case name is not specified`,
                (done) => {
                    let p = new packageModel({
                        version: 11
                    });
                    p.validate((err) => {
                        err.errors.name.should.not.be.empty();
                        done();
                    })
                });

            it(`should throw an error in case version is not specified`,
                (done) => {
                    let p = new packageModel({
                        name: 'Avengers'
                    });
                    p.validate((err) => {
                        err.errors.version.should.not.be.empty();
                        done();
                    })
                });

            it(`should throw an error in case dependencies objec doesn't exist`,
                (done) => {
                    let p = new packageModel({
                        name: 'Avengers',
                        version: '1.4.0'
                    });
                    p.validate((err) => {
                        err.errors.dependencies.should.exist;
                        done();
                    })
                })

        })
    });
}());
