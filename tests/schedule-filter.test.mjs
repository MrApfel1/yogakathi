import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const match = html.match(/<!--[\s\S]*?Eversports Integration[\s\S]*?-->\s*<script>([\s\S]*?)<\/script>/);
assert.ok(match, 'Eversports script should exist in index.html');

const sandbox = {
  window: {},
  document: {
    readyState: 'loading',
    addEventListener() {},
    getElementById() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
  },
  fetch() {
    throw new Error('fetch should not run during unit tests');
  },
  console,
};

vm.createContext(sandbox);
vm.runInContext(match[1], sandbox);

const api = sandbox.window.YogaKathiSchedule;
assert.ok(api, 'schedule helpers should be exposed for tests');

assert.equal(api.classifyActivity({ activityGroup: { name: 'Elemental Yoga Flow' } }), 'yoga');
assert.equal(api.classifyActivity({ activityGroup: { name: 'Breathwork & Meditation' } }), 'breathwork');
assert.equal(api.classifyActivity({ activityGroup: { name: 'Elemental Breathing' } }), 'breathwork');
assert.equal(api.classifyActivity({ activityGroup: { name: 'Morning Vinyasa' } }), 'yoga');
assert.equal(api.classifyActivity({ activityGroup: { name: 'Morning Flow & Meditation' } }), 'yoga');

const activities = [
  { id: '1', start: '2026-05-22T10:00:00+02:00', end: '2026-05-22T11:00:00+02:00', activityGroup: { name: 'Elemental Yoga Flow' } },
  { id: '2', start: '2026-06-03T18:00:00+02:00', end: '2026-06-03T19:00:00+02:00', activityGroup: { name: 'Breathwork & Meditation' } },
  { id: '3', start: '2026-06-07T09:00:00+02:00', end: '2026-06-07T10:00:00+02:00', activityGroup: { name: 'Morning Vinyasa' } },
];

const normalized = activities.map(api.normalizeActivity);
const asPlain = (value) => JSON.parse(JSON.stringify(value));

assert.deepEqual(asPlain(api.getMonthOptions(normalized)), [
  { value: '2026-05', label: 'Mai 2026' },
  { value: '2026-06', label: 'Juni 2026' },
]);

assert.deepEqual(
  asPlain(api.applyFilters(normalized, { category: 'breathwork', month: '2026-06' }).map((item) => item.id)),
  ['2']
);

assert.deepEqual(
  asPlain(api.applyFilters(normalized, { category: 'yoga', month: 'all' }).map((item) => item.id)),
  ['1', '3']
);
