const expect = require('expect');
const request = require('supertest');

const {app} = require('./../app');

describe('web app tests', () => {
    it('should show hello world', (done) => {
        request(app)
            .get('/')
            .expect(200)
            .end( (err, res) => {
                if(err) return done(err);
                
                expect(res.text).toBe('Hello World!');
                done();
            });
    });
});