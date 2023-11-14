esbuild-progress  [![npm version](https://badge.fury.io/js/esbuild-progress.svg)](https://badge.fury.io/js/esbuild-progress)
===
[![NPM](https://nodei.co/npm/esbuild-progress.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/esbuild-progress/)

Simple esbuild plugin that display nice progress when build.

Install
===

```javascript
npm install esbuild-progress --save--dev
```

Usage
===

```javascript
var ProgressPlugin = require('esbuild-progress')
// import ProgressPlugin from 'esbuild-progress'

esbuild.build({
  plugins: [
    ProgressPlugin()
  ]
})
```

Plugin Options
===

- **name**: The application name

## License

[MIT License](LICENSE)