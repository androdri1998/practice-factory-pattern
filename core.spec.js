const { expect } = require('@jest/globals');
const createCore = require('./core');

function createMock() {
  const start = () => {
    console.log('[mock] ...');
  }

  const stop = () => {
    console.log('[mock] ...');
  }

  return {
    start,
    stop
  }
}

describe('Core when imported', () => {
  it('should to have method start and stop', () => {
    const core = createCore();
    expect(core).toHaveProperty('start');
    expect(core).toHaveProperty('stop');
  })
})

describe('Core when initialized', () => {
  it('should not contain errors', () => {
    const databaseMock = createMock();
    const webserverMock = createMock();

    const core = createCore({
      database: databaseMock,
      webserver: webserverMock
    });

    expect(() => {
      core.start();
    }).not.toThrow();
  })
})