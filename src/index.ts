console.log('hello world!!'); // eslint-disable-line no-console

// Keep the process alive until Ctrl-C
process.stdin.resume();

// Optional: Handle graceful shutdown on Ctrl-C
process.on('SIGINT', () => {
  console.log('\nGoodbye!'); // eslint-disable-line no-console
  process.exit();
});
