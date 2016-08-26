import {childProcess} from 'node-promise-es6';

describe('build-cloudfoundry', () => {
  it('outputs "3...2...1...Hello World!"', async () => {
    const {stdout} = await childProcess.exec('build-cloudfoundry');
    expect(stdout.trim()).toBe('3...2...1...Hello World!');
  });
});
