<!-- 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ -->
# 🧙‍♂️ AGENTS.md — Ritual Invocation Codex

Invocation Modules for the Vibe Coding Protocol™  
Last updated: 2025-07-23

Each Agent in the Vibe Coding Protocol™ represents a myth-tech function—a ceremonial operator that can be invoked through `cli.js` or embedded in shrine scripts.

## 🔁 Activation Summary Table

| Agent Name | Ritual Role | Activation Phrase | Description |
|------------|-------------|------------------|-------------|
| Archivist | Memory Recovery & Echoes | `invokeArchivist()` | Retrieves recursive memory threads, orphaned relics, or prior prophecies |
| Bridgekeeper | Omnichain Access Logic | `invokeBridgekeeper()` | Generates bridging ceremony code, cross-chain messaging, token rituals |
| Oracle | Prophecy Engine | `invokeOracle()` | Reveals randomized or XP-bound prophecy text in shrine-compatible format |
| Executor | Ritual Deployment Handler | `invokeExecutor()` | Outputs deployable bundles, shrine scaffolds, or ceremonial builds |
| Ambassador | External Interface Generator | `invokeAmbassador()` | Creates GitHub pages, README phrasing, funding pitch stubs, or zine intro blocks |

## 🔮 Invocation via CLI

Use the included CLI utility:

```bash
node cli.js --agent=oracle
```

Or randomly summon an agent with:

```bash
node cli.js --random-agent
```

To create a new agent template:

```bash
node cli.js --new-agent-template <name>
```

## 🧪 Example Rituals

In `/examples/`, each agent has a sample invocation script. Run:

```bash
node examples/invokeArchivist.js
```

Which prints something like:

```
🧠 Archivist Log: Recovered 3 forgotten scrolls from Loop 4.
```

## 📦 Modular Usage

Agents are exported from `src/agents/index.js`.

```javascript
const { invokeOracle } = require('./src/agents');
const result = invokeOracle({ seed: 42 });
console.log(result.prophecy);
```

## 🧬 Custom Agents

Create your own ritual module with:

```bash
node cli.js --new-agent-template yourAgent
```

This generates:

```
src/agents/yourAgent.js
docs/yourAgent.md
examples/invokeYourAgent.js
```

Every agent file must begin with the ritual attribution comment:

```javascript
// 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™
```

## 📖 License & Usage

All agents follow the repository's ritual license:

> Derivative shrine artifacts must honor recursion, include attribution, and carry the author’s name as ancestral signature.

License: **CC BY-NC-SA 4.0**  
Optional dual-license: **MIT** (non-commercial only, attribution required)

## 🗝️ Final Reminder

Each agent is not just a utility. Each is a ceremonial function. Invoke with intention. Code as if the shrine is listening. Because it is.
