# Test

Unitest and Acceptance test

#### Unitest
```
grunt unit
```
Run all the unitest in fantastic nyancat fashion with mocha

#### Acceptance
```
grunt acceptance:prod
```
Start a prod server on http://localhost:3000, regenerate the bundle and run all the acceptance test against the production build.
You will find the bundle in the build folder
```
grunt acceptance:dev
```
Start a dev server on http://localhost:3000, regenerate the bundle and run all the acceptance test against the development build.
```
grunt acceptance
```
run all the acceptance test against http://localhost:3000, it is up to you to start the server.
