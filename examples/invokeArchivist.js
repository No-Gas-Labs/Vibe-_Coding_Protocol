/* 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ */
(async () => {
  const { invokeArchivist } = await import('../src/agents/invocations.js');
  const result = invokeArchivist({ input: 'What have I forgotten?' });
  console.log(result);
})();
