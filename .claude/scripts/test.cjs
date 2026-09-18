#!/usr/bin/env node
'use strict';
const { run, killPort } = require('./_lib.cjs');

console.log('[1/4] Typecheck (tsc -b)...');
if (run('npx', ['tsc', '-b']) !== 0) {
  console.log('FAIL: typecheck');
  process.exit(1);
}

console.log('[2/4] Lint...');
if (run('npm', ['run', 'lint']) !== 0) {
  console.log('FAIL: lint');
  process.exit(1);
}

console.log('[3/4] Build...');
if (run('npm', ['run', 'build']) !== 0) {
  console.log('FAIL: build');
  process.exit(1);
}

console.log('[4/4] Playwright E2E tests...');
killPort(5173); // clear a stale orphaned dev server before Playwright starts its own
if (run('npx', ['playwright', 'test']) !== 0) {
  console.log('FAIL: Playwright E2E tests');
  process.exit(1);
}

console.log('PASS');
process.exit(0);
