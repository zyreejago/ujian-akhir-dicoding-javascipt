import { test } from 'node:test'; 
import assert from 'node:assert';
import { sum } from './index.js'; // Import fungsi sum dari index.js

test('sum should correctly add two numbers', () => {
  assert.strictEqual(sum(1, 2), 3); // Menguji bahwa 1 + 2 = 3
  assert.strictEqual(sum(-1, 1), 0); // Menguji bahwa -1 + 1 = 0
  assert.strictEqual(sum(0, 0), 0); // Menguji bahwa 0 + 0 = 0
  assert.strictEqual(sum(-2, -3), -5); // Menguji bahwa -2 + -3 = -5
});
