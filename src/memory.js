/* 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ */
import fs from 'fs';
import path from 'path';

const MEMORY_FILE = path.resolve('memory.json');
let shards = [];

if (fs.existsSync(MEMORY_FILE)) {
    try {
        shards = JSON.parse(fs.readFileSync(MEMORY_FILE, 'utf8'));
    } catch {
        shards = [];
    }
}

export function recordInvocation(entry) {
    shards.push({ ...entry, timestamp: new Date().toISOString() });
    if (shards.length > 20) {
        shards = shards.slice(-20);
    }
    fs.writeFileSync(MEMORY_FILE, JSON.stringify(shards, null, 2));
}

export function getMemory() {
    return shards;
}
