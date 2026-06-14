const fs = require('fs');
let c = fs.readFileSync('data/blog.ts', 'utf8');
let lines = c.split('\n');
let insideContent = false;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('content: `')) {
    insideContent = true;
    continue;
  }
  if (insideContent && lines[i].trim() === '`') {
    insideContent = false;
    continue;
  }
  if (insideContent) {
    lines[i] = lines[i].replace(/`/g, '\\`');
  }
}
fs.writeFileSync('data/blog.ts', lines.join('\n'));
