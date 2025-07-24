/* 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ */
(async () => {
  const { invokeSpectralEvaluator } = await import('../src/agents/invocations.js');
  const result = invokeSpectralEvaluator({ input: 'artifact.html' });
  console.log(result);
})();
