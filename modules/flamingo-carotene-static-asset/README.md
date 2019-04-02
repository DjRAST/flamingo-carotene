# Module `flamingo-carotene-static-asset`
This module provides a simple features to copy Assets from the configured source to a destination folder.

## How to use
```
npm i -D flamingo-carotene-static-asset
```

The static asset module will listen to the following commands: `build`

## How it works
The module copies all the files and folders that are found inside the given source paths to the configured destinations.

## How to configureå
This module exposes the following config
```
config.staticAsset = {
   assetPaths: [
      {
        dest: '',
        src: ''
      },
      {
        dest: '',
        src: ''
      }
   ],
   basePaths: {
     dest: config.paths.dist,
     src: config.paths.src
   }
 }
```
`basePaths` Takes root paths for a source and a destination paths
`assetPaths` Lists all configured asset paths composed of source and destination paths
