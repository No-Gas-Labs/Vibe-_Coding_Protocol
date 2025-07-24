/* 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ */
(async () => {
  const { invokeDrTRask } = await import('../src/agents/invocations.js');
  const result = invokeDrTRask({ input: 'chainLogicExample' });
  console.log(result);
})();
