<img src="https://raw.githubusercontent.com/optimumfuturist/babel-webpack-npm-starter/main/docs/babel-webpack.png" alt="webpack babel npm starter pack" align="center" />

<br />

# Babel + Webpack NPM Starter
Babel + Webpack starter for npm package authoring

## Features
* Babel 7 for modern javascript authoring
* Webpack 5 for UMD bundling
* ESLint, EditorConfig and Prettier for better dev tooling
* JSDoc 3 for code documentation

## Getting Started
### 1. Clone this repo 
Option A: Clone this repo, run `https://github.com/optimumfuturist/babel-webpack-npm-starter.git` <br />
Option B: From the repo page, click on the "**Use this template**" green button (preferred).

If you cloned this repo, remove the current  git repository by doing `rm -rf .git`. And then initialize your git repo, then push changes.


### 2. Update package.json
* Update the name, version and description fields
* Update repository, author, homepage fields
* **IMPORTANT!** Please read the package.json file and get to know `npm scripts`.

### 3. Start authoring
* Navigate to `./src/index.js` and start writing. This file is where you begin composing your npm package.
* Add files, subdirectories, or install new npm packages (whatever you need to make your library work)
* Run `npm run dev`; and this command will start webpack watcher in dev mode.
* See NPM Scripts section for more cli options
### 4. Write tests
 * In progress

### 5. Tests your modules
 * Test your modules in browsers and nodejs modules
 * In your terminal, run `npm run build` and then copy the bundled js file from **lib** directory into **examples** directory.
 * For **nodejs** In your terminal, run `node examples/node-example.js` and test the results.
 * For **browsers** In your terminal, run `npm start`, then go to http://localhost:5001 and test the results.

## NPM Scripts
These npm scripts can be executed by typing `npm run <command>` in your terminal.
| Command |  What does it do? |
|--|--|
| `dev` | Runs Webpack in development mode with watcher enabled |
| `build` | Runs Webpack in production mode, meant for publishing to npm |
| `clean` | Clean **lib** directory |
| `test` | Run your tests |
| `lint` | Run linting for all codes in **src** directory and fix |
| `start` | Starts a web server from **examples** directory, meant for browser testing |
| `start:all` | Runs `npm run dev` as well as starts a web server so that you can continue developing and testing in the browser at http://localhost:5001 |
| `docs` | Generated documentation in **docs** directory using JSDocs 3.0 |
| `start:docs` | Starts a documentation web server at http://localhost:5002 |

## How to publish to NPM registry.
Please use the package **[np](https://github.com/sindresorhus/np)** from Sindre Sorhus.

## Need help?
Please file an issue and I will do my best to assist, answer.
