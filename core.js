const createDatabaseConnection = require('./database');
const createWebServer = require('./webserver');

const createCore = (configurations = {}) => {
  const database = configurations.database || createDatabaseConnection();
  const webserver = configurations.webserver || createWebServer();

  const start = () => {
    console.log('> [core] Starting...');
    database.start();
    webserver.start();
    console.log('> [core] Starting done! System running!');
  }

  const stop = () => {
    console.log('> [core] Stopping...');
    database.stop();
    webserver.stop();
    console.log('> [core] Stopping done!');
  }

  return {
    start,
    stop
  }
}

module.exports = createCore;