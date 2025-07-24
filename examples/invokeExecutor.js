/* 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ */
(async () => {
  const { invokeExecutor } = await import('../src/agents/invocations.js');
  const result = invokeExecutor({ input: 'diff --stat' });
  console.log(result);
})();
