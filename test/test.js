// Test First TDD Cycle 1
const { expect } = require('chai');
const multiply = require('../multiply');

describe('Multiply Function', function() {
    it('should return 1 when multiplying 1 and 1', function() {
        expect(multiply(1, 1)).to.equal(1);
    });
});


// Test First TDD Cycle 2
const { expect } = require('chai');
const multiply = require('../multiply');

describe('Multiply Function', function() {
    it('should return 1 when multiplying 1 and 1', function() {
        expect(multiply(1, 1)).to.equal(1);
    });

    it('should return 4 when multiplying 2 and 2', function() {
        expect(multiply(2, 2)).to.equal(4); // This is the new test case
    });
});




// Test First TDD Cycle 3
it('should return 9 when multiplying 3 and 3', function() {
    expect(multiply(3, 3)).to.equal(9);
});

const { expect } = require('chai');
const multiply = require('../multiply');

describe('Multiply Function', function() {
    it('should return 1 when multiplying 1 and 1', function() {
        expect(multiply(1, 1)).to.equal(1);
    });

    it('should return 4 when multiplying 2 and 2', function() {
        expect(multiply(2, 2)).to.equal(4);
    });

    it('should return 9 when multiplying 3 and 3', function() {
        expect(multiply(3, 3)).to.equal(9);
    });
});





// Fourth Test Cycle
it('should return 16 when multiplying 4 and 4', function() {
    expect(multiply(4, 4)).to.equal(16);
});

const { expect } = require('chai');
const multiply = require('../multiply');

describe('Multiply Function', function() {
    it('should return 1 when multiplying 1 and 1', function() {
        expect(multiply(1, 1)).to.equal(1);
    });

    it('should return 4 when multiplying 2 and 2', function() {
        expect(multiply(2, 2)).to.equal(4);
    });

    it('should return 9 when multiplying 3 and 3', function() {
        expect(multiply(3, 3)).to.equal(9);
    });

    it('should return 16 when multiplying 4 and 4', function() {
        expect(multiply(4, 4)).to.equal(16);
    });
});





// Fifth Test Cycle

const { expect } = require('chai');
const multiply = require('../multiply');

describe('Multiply Function', function() {
    it('should return 1 when multiplying 1 and 1', function() {
        expect(multiply(1, 1)).to.equal(1);
    });

    it('should return 4 when multiplying 2 and 2', function() {
        expect(multiply(2, 2)).to.equal(4);
    });

    it('should return 9 when multiplying 3 and 3', function() {
        expect(multiply(3, 3)).to.equal(9);
    });

    it('should return 16 when multiplying 4 and 4', function() {
        expect(multiply(4, 4)).to.equal(16);
    });

    it('should return 1035 when multiplying 23 and 45', function() {
        expect(multiply(23, 45)).to.equal(23 * 45); // New test case
    });
});




