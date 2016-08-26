import Directory from 'directory-helpers';
import register from 'test-inject';

const inject = register({
  project: {
    setUp: () => new Directory('project'),
    tearDown: async (project) => await project.remove()
  }
});

describe('build-cloudfoundry', () => {
  it('acts during the config stage', async () => {
    const directory = new Directory('.');
    const {stage} = await directory.read('package.json');
    expect(stage).toBe('config');
  });

  it('writes a Staticfile', inject(async ({project}) => {
    await project.create();
    await project.execJs(`
      import { run } from 'esnext-async';
      import buildCloudFoundry from '../src';
      run(async () => {
        await buildCloudFoundry();
      });
    `);

    const staticfile = await project.read('dist/Staticfile');
    expect(staticfile).toContain('FORCE_HTTPS: enabled');
    expect(staticfile).toContain('pushstate: enabled');
  }));
});
