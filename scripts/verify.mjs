import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
const json = name => JSON.parse(read(name));
const sha = data => crypto.createHash('sha256').update(data).digest('hex');
const manifest = json('manifest.json');
const pkg = json('package.json');
const provenance = json('assets/fonts/provenance.json');
const font = fs.readFileSync(path.join(root, 'assets/fonts/PretendardVariable.woff2'));
assert.equal(manifest.name, 'Achmage Atelier');
assert.match(manifest.version, /^\d+\.\d+\.\d+$/);
assert.equal(pkg.version, manifest.version);
assert.equal(json('versions.json')[manifest.version], manifest.minAppVersion);
assert.equal(sha(font), provenance.sha256);
assert.equal(font.length, provenance.bytes);
assert.equal(provenance.modified, false);

const parts = ['font','common','refinement','markdown','commands','finish','search','mobile','layered'];
const source = parts.map(name => read('src/' + name + '.css').replace('__PRETENDARD_DATA__', 'data:font/woff2;base64,' + font.toString('base64'))).join('\n\n');
const theme = read('theme.css');
assert.equal(theme, '/*\n' + read('THIRD-PARTY-LICENSES.txt') + '\n*/\n\n' + source, 'Run npm run build to update theme.css');
assert.equal((theme.match(/data:font\/woff2;base64,/g) || []).length, 1);
assert.ok(!theme.includes('__PRETENDARD_DATA__'));
for (const match of theme.matchAll(/url\(\s*["']?([^)'"\s]+)/g)) {
  assert.ok(match[1].startsWith('data:'), 'All CSS assets must be embedded: ' + match[1].slice(0, 80));
}
assert.ok(!/@import\s/i.test(theme), 'Stylesheets must be self-contained');
assert.ok(!/C:[\\/]|Achmage-System|codex-remote-attachments|research:rr-/i.test(theme), 'Private workspace reference found');
assert.match(read('LICENSE'), /MIT License/);
assert.match(read('LICENSE'), /Copyright \(c\) 2026 laguna821/);
assert.match(read('assets/fonts/OFL.txt'), /SIL OPEN FONT LICENSE/);
for (const license of ['SIL OPEN FONT LICENSE', 'ISC', 'MIT']) assert.ok(read('THIRD-PARTY-LICENSES.txt').includes(license));
for (const match of read('README.md').matchAll(/\]\(([^)]+)\)/g)) {
  if (/^https?:|^#/.test(match[1])) continue;
  const target = path.resolve(root, decodeURIComponent(match[1]));
  assert.ok(target.startsWith(root + path.sep) && fs.existsSync(target), 'Missing local README target: ' + match[1]);
}
console.log('Verified manifest, reproducible CSS, embedded font hash, offline assets, licenses and README links.');
console.log('theme.css SHA-256: ' + sha(theme));
