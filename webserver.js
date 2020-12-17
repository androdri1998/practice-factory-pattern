const createWebServer = () => {
  const start = () => {
    console.log('> [webserver] Starting...');
    console.log('> [webserver] Waiting for a port to be available...');
    console.log('> [webserver] Starting done!');
  }

  const stop = () => {
    console.log('> [webserver] Stopping...');
    console.log('> [webserver] Gracefully waiting for all clients...');
    console.log('> [webserver] Closing all ports...');
    console.log('> [webserver] Stopping done!');
  }

  return {
    start,
    stop
  }
}

module.exports = createWebServer;