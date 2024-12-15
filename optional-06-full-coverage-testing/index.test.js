import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js'; // Mengimpor fungsi sum

// Pengujian dengan dua angka positif
test('sum of 2 and 3 should return 5', () => {
  assert.strictEqual(sum(2, 3), 5);
});

// Pengujian dengan input salah, seperti string
test('sum of "2" and 3 should return 0 because one is not a number', () => {
  assert.strictEqual(sum("2", 3), 0);
});

// Pengujian dengan input salah, seperti array
test('sum of [] and 3 should return 0 because one is not a number', () => {
  assert.strictEqual(sum([], 3), 0);
});

// Pengujian dengan angka negatif
test('sum of -1 and 3 should return 0 because negative numbers are not allowed', () => {
  assert.strictEqual(sum(-1, 3), 0);
});

// Pengujian dengan dua angka negatif
test('sum of -1 and -3 should return 0 because negative numbers are not allowed', () => {
  assert.strictEqual(sum(-1, -3), 0);
});

// Pengujian dengan dua angka nol
test('sum of 0 and 0 should return 0', () => {
  assert.strictEqual(sum(0, 0), 0);
});

// Pengujian dengan dua angka besar
test('sum of 1000000 and 2000000 should return 3000000', () => {
  assert.strictEqual(sum(1000000, 2000000), 3000000);
});

// Pengujian dengan salah satu angka nol
test('sum of 5 and 0 should return 5', () => {
  assert.strictEqual(sum(5, 0), 5);
});
