(function() {
    'use strict';
    const config = require('./server');
    const should = require('should');

    describe('server configuration', () => {
        it('should return dev port in case NODE_ENV has not been set', () => {
						const env = require('./env')();
						let expected = config(env).port;
            let actual = config('dev').port;
            actual.should.be.equal(expected);
        });

        it('should return the NODE_ENV params in case it has been set', () => {
            let NODE_ENV = process.env.NODE_ENV = 'production';
						const env = require('./env')();

            let expected = config(NODE_ENV).port;
            let actual = config(env).port;
            actual.should.be.equal(expected);
						process.env.NODE_ENV = '';
        });

        it('should return the params of the setted environment in case it set and not the default params', () => {
            let defaultEnv = config('dev').port;
            let actual = config('test').port;

            actual.should.not.be.equal(defaultEnv);
        });
    });
}());
