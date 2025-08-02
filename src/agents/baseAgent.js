/* 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ */
import { emitRelic } from '../relics.js';

export class BaseAgent {
    constructor({ name, mythName, chairNumber, rebirthThreshold = 3 } = {}) {
        this.name = name;
        this.mythName = mythName || name;
        this.chairNumber = chairNumber;
        this.rebirthThreshold = rebirthThreshold;
        this.xp = 0;
        this.rebirths = 0;
        this.memory = [];
    }

    describe() {
        return `${this.mythName} (chair ${this.chairNumber}) — tier ${this.rebirths} XP ${this.xp}`;
    }

    run(input) {
        this.xp += 1;
        const output = this.process(input);
        this.memory.push({ input, output });
        if (this.memory.length > 20) {
            this.memory.shift();
        }
        if (this.xp >= this.rebirthThreshold) {
            this.rebirth();
        }
        return output;
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
            loop_id: this.rebirths
        });
    }
}
