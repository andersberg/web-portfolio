# WEB PORTFOLIO

## Getting started
1. Download and install [NodeJS](https://nodejs.org) (>=v6.0.0) if you don't have it already.

2. Clone the source code from Github. In the terminal type:

    ```
    git clone git@github.com:andersberg/web-portfolio.git
    ```

## Dependencies
To install all the needed dependencies use the terminal to `cd` into the project folder and type:

```
npm install
```

## Development
1. Start the server.

    ```
    npm start
    ```

2. Start Gulp tasks to transpile files and start live reload.

    ```
    npm run gulp start --debug --dev|stg|prd
    ```

## Test
1. To run all tests.

    ```
    npm test
    ```

2. Only test the client code.

    ```
    npm run test:client
    ```

3. Only test the server code.

    ```
    npm run test:server
    ```

## Deployment

**Development Environment**

Deployment to the Development Environment is made automatically by CircleCi. The command will update the version in the package.json file, tag the commit, git push and git push --tags. All traffic will be migrated to the new version.

```
npm version vX.X.X-build.XX
```

**Stage Environment**

Deployment to the Stage Environment is made automatically by CircleCi. The command will update the version in the package.json file, tag the commit, git push and git push --tags. Only deploy to the Stage Environment from a release branch. All traffic will be migrated to the new version.

```
npm version vX.X.X-rc.XX
```

**Production Environment**

Deployment to the Production Environment is made automatically by CircleCi. The command will update the version in the package.json file, tag the commit, git push and git push --tags. Only deploy to the Production Environment from a release branch. Traffic will **not** be migrated to the new version this has to be done manually.

```
npm version vX.X.X
```

## Versioning

Version each new release according to [semver.org](semver.org).

## Directory structure
* `build` - contains all transpiled resources.
* `gulp` - contains all gulp plugins and tasks to build the project.
* `node_modules` - contains all npm packages.
* `server` - contains a lightweight Node.js server.
* `src` - contains all resources.

