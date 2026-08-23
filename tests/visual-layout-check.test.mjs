import assert from 'node:assert/strict';
import fs from 'node:fs';

const html = fs.readFileSync(new URL('./visual-layout-check.html', import.meta.url), 'utf8');

for (const required of [
  'Yoga Kathi Visual Layout Check',
  'VIEWPORTS',
  'TARGETS',
  'elementFromPoint',
  'horizontal overflow',
  'target section owns viewport',
  'schedule scroll panel',
  'quote section coverage',
]) {
  assert.ok(html.includes(required), `visual layout check should include: ${required}`);
}
