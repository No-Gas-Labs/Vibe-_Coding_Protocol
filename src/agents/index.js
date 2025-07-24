/* 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ */
import { Archivist } from './archivist.js';
import { Bridgekeeper } from './bridgekeeper.js';
import { DrTRask } from './drTRask.js';
import { Executor } from './executor.js';
import { OracleOfScroll } from './oracleOfScroll.js';
import { SpectralEvaluator } from './spectralEvaluator.js';
import { TripleHeadedBastard } from './tripleHeadedBastard.js';
import { Ambassador } from './ambassador.js';

export function invokeArchivist(opts = {}) {
    const a = new Archivist();
    return a.activate(a.activationPhrase, opts.query || '');
}
export function invokeBridgekeeper(opts = {}) {
    const a = new Bridgekeeper();
    return a.activate(a.activationPhrase, opts.wallet || 'wallet');
}
export function invokeDrTRask(opts = {}) {
    const a = new DrTRask();
    return a.activate(a.activationPhrase, opts.logic || 'chain');
}
export function invokeExecutor(opts = {}) {
    const a = new Executor();
    return a.activate(a.activationPhrase, opts.diff || 'patch');
}
export function invokeOracle(opts = {}) {
    const a = new OracleOfScroll();
    return a.activate(a.activationPhrase, opts.xp || 0);
}
export function invokeSpectral(opts = {}) {
    const a = new SpectralEvaluator();
    return a.activate(a.activationPhrase, opts.relic || 'relic');
}
export function invokeTriple(opts = {}) {
    const a = new TripleHeadedBastard();
    return a.activate(a.activationPhrase, opts.loop || 'loop');
}
export function invokeAmbassador(opts = {}) {
    const a = new Ambassador();
    return a.activate(a.activationPhrase, opts.meta || 'metadata');
}

export const AGENT_MAP = {
    archivist: invokeArchivist,
    bridgekeeper: invokeBridgekeeper,
    drtrask: invokeDrTRask,
    executor: invokeExecutor,
    oracle: invokeOracle,
    spectral: invokeSpectral,
    triple: invokeTriple,
    ambassador: invokeAmbassador
};

export function randomAgentName() {
    const keys = Object.keys(AGENT_MAP);
    return keys[Math.floor(Math.random() * keys.length)];
}
