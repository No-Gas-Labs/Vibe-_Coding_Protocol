#!/usr/bin/env node
<!-- 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ -->

const fs = require('fs');

(async () => {
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

  if (params["new-agent-template"]) {
    const name = String(params["new-agent-template"]);
    const className = name
      .split(/[^a-zA-Z0-9]/)
      .map(p => p.charAt(0).toUpperCase() + p.slice(1))
      .join('');
    if (!fs.existsSync('plugin')) {
      fs.mkdirSync('plugin');
    }
    const path = `plugin/${name}.js`;
    const header = '/* 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ */';
    const content = `${header}\nexport class ${className} {\n    constructor() {\n        this.roles = [];\n        this.mode = '';\n        this.activationPhrase = '';\n    }\n\n    activate(phrase, payload) {\n        if (phrase === this.activationPhrase) {\n            return this.perform(payload);\n        }\n        return null;\n    }\n\n    perform(payload) {\n        return \`🧰 ${className} ritual with \${payload}\`;\n    }\n}\n`;
    fs.writeFileSync(path, content);
    console.log(`Template created at ${path}`);
    process.exit(0);
  }

  if (params.agent || params['random-agent']) {
    const { agentMap, invokeRandomAgent } = await import('./src/agents/invocations.js');
    let used, result;
    if (params['random-agent']) {
      const out = invokeRandomAgent({ input: params.payload });
      used = out.name;
      result = out.result;
    } else {
      const name = String(params.agent).toLowerCase();
      const fn = agentMap[name];
      if (!fn) {
        console.error('Unknown agent:', name);
        process.exit(1);
      }
      used = name;
      result = fn({ input: params.payload });
    }
    console.log(JSON.stringify({ agent: used, result }, null, 2));
    process.exit(0);
  }

  if (!params.vibe) {
    console.error('Usage: node cli.js --vibe <signature> [--emotion <feeling>] [--symbols a,b,c] [--ritual_type <type>]');
    console.error('   or: node cli.js path/to/params.json');
    console.error('   --agent <name> to invoke an agent');
    console.error('   --random-agent for chaotic invocation');
    console.error('   --new-agent-template <name> to scaffold a plugin');
    process.exit(1);
  }

  const { VibeCoder } = await import('./src/vibeCore.js');
  const coder = new VibeCoder();
  const ceremony = coder.transmute(params);
  const artifacts = ceremony.exportRitual('complete');
  console.log(JSON.stringify(artifacts, null, 2));
})();
