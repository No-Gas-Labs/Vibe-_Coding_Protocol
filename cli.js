#!/usr/bin/env node
<!-- 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ -->

const fs = require('fs');

(async () => {
  const { VibeCoder } = await import('./src/vibeCore.js');

  const args = process.argv.slice(2);
  let params = {};

  if (args.length === 1 && args[0].endsWith('.json')) {
    const content = fs.readFileSync(args[0], 'utf8');
    params = JSON.parse(content);
  } else if (args.length === 1 && args[0].trim().startsWith('{')) {
    params = JSON.parse(args[0]);
  } else {
    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      if (arg.startsWith('--')) {
        const key = arg.replace(/^--/, '');
        let val = args[i + 1];
        if (val && !val.startsWith('--')) {
          i++;
        } else {
          val = true;
        }
        if (key === 'symbols' && typeof val === 'string') {
          params.symbols = val.split(',').map(s => s.trim());
        } else {
          params[key] = val;
        }
      }
    }
  }

  if (!params.vibe) {
    console.error('Usage: node cli.js --vibe <signature> [--emotion <feeling>] [--symbols a,b,c] [--ritual_type <type>]');
    console.error('   or: node cli.js path/to/params.json');
    process.exit(1);
  }

  const coder = new VibeCoder();
  const ceremony = coder.transmute(params);
  const artifacts = ceremony.exportRitual('complete');
  console.log(JSON.stringify(artifacts, null, 2));
})();
