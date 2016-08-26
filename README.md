# build-cloudfoundry
[![Build Status](https://travis-ci.org/vinsonchuong/build-cloudfoundry.svg?branch=master)](https://travis-ci.org/vinsonchuong/build-cloudfoundry)

Configures a Cloud Foundry staticfile application

## Installing
`build-cloudfoundry` is available as an
[npm package](https://www.npmjs.com/package/build-cloudfoundry).

## Usage
Add `build-bin` and `build-cloudfoundry` to the `package.json`.

```json
{
  "name": "project",
  "private": true,
  "scripts": {
    "build": "build"
  },
  "devDependencies": {
    "build-bin": "^0.0.6",
    "build-cloudfoundry": "^0.0.1"
  }
}
```

From the command line, run:
```bash
npm run build
```

`build-cloudfoundry` will add a `Staticfile` to the `dist` directory,
configuring the
[staticfile buildpack](http://docs.cloudfoundry.org/buildpacks/staticfile) to
enable pushstate routing and force HTTPS.

## Development
### Getting Started
The application requires the following external dependencies:
* Node.js

The rest of the dependencies are handled through:
```bash
npm install
```

Run tests with:
```bash
npm test
```
