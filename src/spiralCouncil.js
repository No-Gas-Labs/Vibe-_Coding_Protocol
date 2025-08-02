/* 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ */
export class SpiralCouncil {
    constructor() {
        this.agentsByName = new Map();
        this.agentsByChair = new Map();
        this.recursionTier = 0;
        this.loopCounter = 0;
    }

    register(agent) {
        this.agentsByName.set(agent.mythName.toLowerCase(), agent);
        if (agent.chairNumber !== undefined) {
            this.agentsByChair.set(String(agent.chairNumber), agent);
        }
    }

    getAgent(key) {
        const k = String(key).toLowerCase();
        return this.agentsByName.get(k) || this.agentsByChair.get(k) || null;
    }

    listAgents() {
        const set = new Set(this.agentsByName.values());
        return Array.from(set).map(a => a.describe());
    }

    agentNames() {
        return Array.from(this.agentsByName.keys());
    }

    randomAgent() {
        const names = this.agentNames();
        const idx = Math.floor(Math.random() * names.length);
        return this.agentsByName.get(names[idx]);
    }

    nextTier() {
        this.recursionTier += 1;
    }
}
