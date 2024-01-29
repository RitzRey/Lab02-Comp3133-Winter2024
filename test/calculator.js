var assert = require("assert");
const calculator = require('../app/calculator');

describe('Lab02: Testing NodeJS app using mocha', () => {
    it('should add two numbers and return a sum of 7', () => {
        const result = calculator.add(5, 2);
        assert.equal(result, 7, 'Expected Result 7 PASS')
    })

    it('should not add two numbers and return a sum different from 8', () => {
        const result = calculator.add(5, 2);
        assert.notEqual(result, 8, 'Expected Result 8 FAIL')
    })

    it('should subtract two numbers and return a difference of 3', () => {
        const result = calculator.sub(5, 2);
        assert.equal(result, 3, 'Expected Result 3 PASS')
    })

    it('should not subtract two numbers and return a difference different from 5', () => {
        const result = calculator.sub(5, 2);
        assert.notEqual(result, 5, 'Expected Result 5 FAIL')
    })

    it('should multiply two numbers and return a product of 10', () => {
        const result = calculator.mul(5, 2);
        assert.equal(result, 10, 'Expected Result 10 PASS')
    })

    it('should not multiply two numbers and return a product different from 12', () => {
        const result = calculator.mul(5, 2);
        assert.notEqual(result, 12, 'Expected Result 12 FAIL')
    })

    it('should divide two numbers and return a quotient of 5', () => {
        const result = calculator.div(10, 2);
        assert.equal(result, 5, 'Expected Result 5 PASS')
    })

    it('should not divide two numbers and return a quotient different from 2', () => {
        const result = calculator.div(10, 2);
        assert.notEqual(result, 2, 'Expected Result 2 FAIL')
    })


})