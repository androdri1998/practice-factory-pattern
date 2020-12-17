const createCore = require('./core');

const core = createCore();

try {
  core.start();
  core.stop();
} catch (err) {
  console.log('[index] Uncaught error!');
  console.log(err);
}