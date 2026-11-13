import test from 'node:test';
import assert from 'node:assert';
import { min, max, sum } from './script.js';

test('min returns the smaller of two positive numbers', () => {
    assert.strictEqual(min(5, 3), 3);
});

test('min handles negative numbers', () => {
    assert.strictEqual(min(-2, -8), -8);
});

test('min returns equal value when numbers are equal', () => {
    assert.strictEqual(min(4, 4), 4);
});

test('min handles mixed-sign numbers', () => {
    assert.strictEqual(min(-1, 1), -1);
});

test('max returns the larger of two positive numbers', () => {
    assert.strictEqual(max(5, 3), 5);
});

test('max handles negative numbers', () => {
    assert.strictEqual(max(-2, -8), -2);
});

test('max returns equal value when numbers are equal', () => {
    assert.strictEqual(max(4, 4), 4);
});

test('max handles mixed-sign numbers', () => {
    assert.strictEqual(max(-1, 1), 1);
});

test('sum adds two positive numbers', () => {
    assert.strictEqual(sum(5, 3), 8);
});

test('sum handles negative numbers', () => {
    assert.strictEqual(sum(-2, -8), -10);
});

test('sum handles mixed-sign numbers', () => {
    assert.strictEqual(sum(-1, 1), 0);
});

test('sum with zero returns the other number', () => {
    assert.strictEqual(sum(0, 7), 7);
});
