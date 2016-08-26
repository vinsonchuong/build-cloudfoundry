import Directory from 'directory-helpers';

const directory = new Directory('.');
export default async function() {
  await directory.write({
    'dist/Staticfile': `
      FORCE_HTTPS: enabled
      pushstate: enabled
    `
  });
}
