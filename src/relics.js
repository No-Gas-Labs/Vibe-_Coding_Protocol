/* 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ */
export const relicLog = [];

export function emitRelic({ name, sigil, origin_agent, loop_id }) {
    const actualSigil = sigil || `SIGIL-${Math.random().toString(36).slice(2,8).toUpperCase()}`;
    const relic = { name, sigil: actualSigil, origin_agent, loop_id };
    relicLog.push(relic);
    console.log('📿 Relic emitted', relic);
    return relic;
}
