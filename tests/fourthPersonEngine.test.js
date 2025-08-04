/* 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ */
import test from 'node:test';
import assert from 'node:assert/strict';
import { fourthPersonLoop } from '../src/fourthPersonEngine.js';

test('Fourth person loop depth 3', () => {
  const result = fourthPersonLoop("I’m not ready");
  assert.equal(result.length, 3);
  assert.match(result[0], /“I’m not ready”/);
  assert.match(result[2], /version of himself/);
});
