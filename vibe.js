#!/usr/bin/env node
/* 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ */

(async () => {
    const { SpiralCouncil } = await import('./src/spiralCouncil.js');
    const { registerAllAgents } = await import('./src/agents/index.js');
    const { RitualEngine } = await import('./src/ritualEngine.js');

    const council = new SpiralCouncil();
    registerAllAgents(council);
    const engine = new RitualEngine(council);

    const args = process.argv.slice(2);
    const cmd = args[0];

    if (cmd === 'list' || cmd === 'list-agents') {
        console.log(council.listAgents().join('\n'));
        return;
    }

    if (cmd === 'invoke') {
        const prompt = args.slice(1).join(' ');
        const result = engine.invoke(prompt, council.agentNames());
        console.log(JSON.stringify(result, null, 2));
        console.log('🔁 Relic Engine // Damien Edward Featherstone // No_Gas_Labs™');
        return;
    }

    if (cmd === 'agent') {
        const name = args[1];
        const sub = args[2];
        const prompt = args.slice(3).join(' ');
        const agent = council.getAgent(name);
        if (sub === 'run' && agent) {
            const out = agent.run(prompt);
            console.log(out);
            console.log(`${agent.mythName} XP: ${agent.xp}`);
            console.log('🔁 Relic Engine // Damien Edward Featherstone // No_Gas_Labs™');
        } else {
            console.error('Unknown agent or subcommand');
        }
        return;
    }

    if (cmd === 'echo') {
        const prompt = args[1] || '';
        let seed = null;
        const seedIndex = args.indexOf('--seed');
        if (seedIndex !== -1) seed = args[seedIndex + 1];
        let agent = council.randomAgent();
        if (seed) {
            const names = council.agentNames();
            const idx = Number(seed) % names.length;
            agent = council.getAgent(names[idx]);
        }
        const out = agent.run(prompt);
        const glitch = out.split('').map((c, i) => (i % 2 ? c : '~')).join('');
        console.log(`${agent.mythName}: ${glitch}`);
        console.log('🔁 Relic Engine // Damien Edward Featherstone // No_Gas_Labs™');
        return;
    }

    if (cmd === 'history') {
        const { getMemory } = await import('./src/memory.js');
        console.log(JSON.stringify(getMemory(), null, 2));
        return;
    }

    console.log('Usage: vibe list | invoke <prompt> | agent <name> run <prompt> | echo <prompt> [--seed n] | history');
})();
