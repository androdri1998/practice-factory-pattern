const createDatabaseConnection = () => {
  const start = () => {
    console.log('> [database] Starting...');
    console.log('> [database] Connecting to Postgres...');
    console.log('> [database] Running migrations...');
    console.log('> [database] Starting done!');
  }

  const stop = () => {
    console.log('> [database] Stopping...');
    console.log('> [database] Closing Postgres connection...');
    console.log('> [database] Stopping done!');
  }

  return {
    start,
    stop
  }
}

module.exports = createDatabaseConnection;