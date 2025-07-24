/* 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ */
import { Archivist } from './archivist.js';
import { Bridgekeeper } from './bridgekeeper.js';
import { DrTRask } from './drTRask.js';
import { OracleOfScroll } from './oracleOfScroll.js';
import { Executor } from './executor.js';
import { SpectralEvaluator } from './spectralEvaluator.js';
import { Ambassador } from './ambassador.js';
import { TripleHeadedBastard } from './tripleHeadedBastard.js';

export function invokeArchivist(opts = {}) {
  const agent = new Archivist();
  return agent.activate(agent.activationPhrase, opts.input || '');
}

export function invokeBridgekeeper(opts = {}) {
  const agent = new Bridgekeeper();
  return agent.activate(agent.activationPhrase, opts.input || '');
}

export function invokeDrTRask(opts = {}) {
  const agent = new DrTRask();
  return agent.activate(agent.activationPhrase, opts.input || '');
}

export function invokeOracle(opts = {}) {
  const agent = new OracleOfScroll();
  return agent.activate(agent.activationPhrase, opts.input || 0);
}

export function invokeExecutor(opts = {}) {
  const agent = new Executor();
  return agent.activate(agent.activationPhrase, opts.input || '');
}

export function invokeSpectralEvaluator(opts = {}) {
  const agent = new SpectralEvaluator();
  return agent.activate(agent.activationPhrase, opts.input || '');
}

export function invokeAmbassador(opts = {}) {
  const agent = new Ambassador();
  return agent.activate(agent.activationPhrase, opts.input || '');
}

export function invokeTripleHeadedBastard(opts = {}) {
  const agent = new TripleHeadedBastard();
  return agent.activate(agent.activationPhrase, opts.input || '');
}

export const agentMap = {
  archivist: invokeArchivist,
  bridgekeeper: invokeBridgekeeper,
  drtrask: invokeDrTRask,
  oracle: invokeOracle,
  executor: invokeExecutor,
  spectralevaluator: invokeSpectralEvaluator,
  ambassador: invokeAmbassador,
  tripleheadedbastard: invokeTripleHeadedBastard
};

export function invokeRandomAgent(opts = {}) {
  const names = Object.keys(agentMap);
  const rand = Math.floor(Math.random() * names.length);
  const name = names[rand];
  const result = agentMap[name](opts);
  return { name, result };
}
