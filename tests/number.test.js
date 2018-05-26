const expect = require('expect');
const request = require('supertest');

describe('basic test', () => {
    it('should add two numbers', () => {
        var a = 2+2;
        expect(a).toBe(4);

    })
})