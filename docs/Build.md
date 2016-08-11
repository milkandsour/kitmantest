# Build

There are both, development and production mode.

#### development
```
grunt server:dev:start
```
Start a dev server on http://localhost:3000, in watch mode.
Once you modify any of the files in the src folder, the boundle will be regenrated.
You will find the bundle in the build folder
```
grunt server:dev:stop
```
Stop the dev server

#### production
```
grunt server:prod:start
```
Start a prod server on http://localhost:3000,this time not in watch mode.
The boundle will be regenrated and compressed.
You will find the bundle in the build folder
```
grunt server:prod:stop
```
Stop the prod server
