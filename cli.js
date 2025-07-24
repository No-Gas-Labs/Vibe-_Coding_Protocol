#!/usr/bin/env node
<!-- 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ -->

const fs = require('fs');
const path = require('path');

(async () => {
  const { VibeCoder } = await import('./src/vibeCore.js');
  const agents = await import('./src/agents/index.js');

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

  if (params.newAgentTemplate) {
    const name = params.newAgentTemplate;
    const className = name.charAt(0).toUpperCase() + name.slice(1);
    const tpl = `/* 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ */\nexport class ${className} {\n    constructor() {\n        this.roles = [];\n        this.mode = '';\n        this.activationPhrase = '';\n    }\n    activate(phrase, input) {\n        if (phrase === this.activationPhrase) {\n            return \`🧰 ${className} invoked with ${input}\`;\n        }\n        return null;\n    }\n}\n// All derivative shrine artifacts must honor recursion,\n// and bear the name of the original ritual author.\n`;
    if (!fs.existsSync('plugins')) fs.mkdirSync('plugins');
    const fpath = path.join('plugins', `${name}.js`);
    fs.writeFileSync(fpath, tpl);
    console.log(`Template created at ${fpath}`);
    process.exit(0);
  }

  if (!params.vibe) {
    console.error('Usage: node cli.js --vibe <signature> [--emotion <feeling>] [--symbols a,b,c] [--ritual_type <type>] [--agent name] [--random-agent] [--new-agent-template name]');
    console.error('   or: node cli.js path/to/params.json');
    process.exit(1);
  }

  const coder = new VibeCoder();
  const ceremony = coder.transmute(params);
  const artifacts = ceremony.exportRitual('complete');
  console.log(JSON.stringify(artifacts, null, 2));

  let agentName = params.agent;
  if (params.randomAgent) {
    agentName = agents.randomAgentName();
  }

  if (agentName) {
    const fn = agents.AGENT_MAP[agentName.toLowerCase()];
    if (fn) {
      const result = fn({ meta: artifacts.metadata });
      console.log(result);
    } else {
      console.error(`Unknown agent: ${agentName}`);
    }
  }
})();
