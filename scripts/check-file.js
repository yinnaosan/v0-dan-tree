// Temp script to check file content
const fs = require('fs');
const content = fs.readFileSync('/vercel/share/v0-project/components/workspace/session-rail.tsx', 'utf-8');
const lines = content.split('\n');
lines.slice(195, 210).forEach((line, i) => {
  console.log(`${196 + i}: ${line}`);
});
