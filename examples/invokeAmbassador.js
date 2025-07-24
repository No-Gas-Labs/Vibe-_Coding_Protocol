/* 🔁 Ritual Engine by Damien Edward Featherstone // Vibe Coding Protocol™ // No_Gas_Labs™ */
(async () => {
  const { invokeAmbassador } = await import('../src/agents/invocations.js');
  const result = invokeAmbassador({ input: '{"title":"New Shrine"}' });
  console.log(result);
})();
