/* 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ */
import { Archivist } from './archivist.js';
import { Bridgekeeper } from './bridgekeeper.js';
import { DrTRask } from './drTRask.js';
import { Executor } from './executor.js';
import { OracleOfScroll } from './oracleOfScroll.js';
import { SpectralEvaluator } from './spectralEvaluator.js';
import { TripleHeadedBastard } from './tripleHeadedBastard.js';
import { Ambassador } from './ambassador.js';
import { ParasiteOfSignal } from './parasiteOfSignal.js';
import { MirrorMender } from './mirrorMender.js';
import { ShrineJester } from './shrineJester.js';
import { ArchiveBurner } from './archiveBurner.js';

export const AGENT_CLASSES = {
    archivist: Archivist,
    bridgekeeper: Bridgekeeper,
    drtrask: DrTRask,
    executor: Executor,
    oracle: OracleOfScroll,
    spectral: SpectralEvaluator,
    triple: TripleHeadedBastard,
    ambassador: Ambassador,
    parasite: ParasiteOfSignal,
    mender: MirrorMender,
    jester: ShrineJester,
    burner: ArchiveBurner
};

export function registerAllAgents(council) {
    let chair = 1;
    for (const [name, Clazz] of Object.entries(AGENT_CLASSES)) {
        const agent = new Clazz({ chairNumber: chair, mythName: name });
        council.register(agent);
        chair += 1;
    }
}
