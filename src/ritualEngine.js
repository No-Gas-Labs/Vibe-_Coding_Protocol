/* 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ */
export class RitualEngine {
    constructor(council) {
        this.council = council;
        this.lastPrompt = null;
    }

    invoke(prompt, chain = []) {
        this.council.loopCounter += 1;
        const prophecyTrail = [];
        let current = prompt;
        const shardParts = [prompt];
        const repeated = prompt === this.lastPrompt;
        this.lastPrompt = prompt;

        for (const name of chain) {
            const agent = this.council.getAgent(name);
            if (!agent) continue;
            let out = agent.run(current);
            if (repeated) {
                out = out.split('').reverse().join('');
            }
            prophecyTrail.push({ agent: name, output: out });
            shardParts.push(out);
            current = out;
        }

        const shardSignature = `SIGIL-${Buffer.from(shardParts.join('|')).toString('hex').slice(0, 8).toUpperCase()}`;
        return { output: current, shardSignature, prophecyTrail };
    }
}
