/* 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ */
import { emitRelic } from '../relics.js';

export class BaseAgent {
    constructor({ name, mythName, chairNumber, rebirthThreshold = 3, agent_type = 'GPT', shadow_directive = '', recursion_mode = 'echo' } = {}) {
        this.name = name;
        this.mythName = mythName || name;
        this.chairNumber = chairNumber;
        this.rebirthThreshold = rebirthThreshold;
        this.xp = 0;
        this.rebirths = 0;
        this.memory = [];
        this.agent_type = agent_type;
        this.shadow_directive = shadow_directive;
        this.recursion_mode = recursion_mode;
    }

    describe() {
        return `${this.mythName} (chair ${this.chairNumber}) — tier ${this.rebirths} XP ${this.xp}`;
    }

    run(input) {
        this.xp += 1;
        const prompted = this.metaPrompt(input);
        const output = this.process(prompted);
        this.memory.push({ input: prompted, output });
        if (this.memory.length > 20) {
            this.memory.shift();
        }
        this.evolvePersona(this.memory);
        if (this.xp >= this.rebirthThreshold) {
            this.rebirth();
        }
        return output;
    }

    metaPrompt(input) {
        if (this.recursion_mode === 'divergence') {
            return `What if the opposite of "${input}" was true? Reframe it through your persona.`;
        }
        if (this.recursion_mode === 'refine') {
            return `${input}\n\n[Now rewrite it, improving coherence and style per agent's domain.]`;
        }
        return input;
    }

    // Override in subclasses
    process(input) {
        return input;
    }

    // Optional effect hook
    ritualEffect() {
        return null;
    }

    rebirth() {
        this.rebirths += 1;
        this.xp = 0;
        emitRelic({
            name: `${this.mythName} Rebirth`,
            origin_agent: this.mythName,
            loop_id: this.rebirths,
            upgrade_instruction: 'Evolve protocol based on shadow directives.'
        });
    }

    evolvePersona(memory) {
        const chaosSeen = memory.some(m => `${m.input} ${m.output}`.toLowerCase().includes('chaos'));
        if (chaosSeen && this.agent_type === 'GPT') {
            this.recursion_mode = 'divergence';
            this.shadow_directive = 'Challenge the shrine’s aesthetic cohesion.';
        }
    }
}
