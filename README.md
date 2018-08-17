# Debugging issues with lodash.clonedeep + Webpack3 + source-map

Debug issue in a specific existing app, where using `lodash.clonedeep` in clientside JS generates an error in the browser console about X not being a function. We can't make changes to that existing app's build process right now.

```js
Uncaught TypeError: a is not a function
    at v (index.js:844)
    at index.js:897
    at index.js:897
    at v (index.js:140)
    at e.exports (index.js:1399)
    at Object.<anonymous> (index.js:1)
    at r (bootstrap dabf584bf8ca403c3398:19)
    at bootstrap dabf584bf8ca403c3398:62
    at bootstrap dabf584bf8ca403c3398:62

```

## To run
- `npm i`
- `npm start`
- Open `localhost:8080` (or whatever port it says in Terminal)
- see console to check error

## Test Cases
Not actual tests written in a framework - this is different variations using different deep cloning utilities, to see which works as a workaround
- open `package.json`
- go down scripts to see different test cases

___

## Options and findings

- Running without `-p` works
- Running without `--optimize-minimize` works for the same reason
- It's difficult to tell the issue because it requires 3 separate things (`lodash.clonedeep`, `Webpack 3`, and `uglifyJS via -p` with `source-map`). Also, Webpack 3 documentation has been removed from the internet.
- `clone-deep`, `deepcopy` packages throw errors during build process
- `immutable` works but it's too much weight and work
- `deepcopy` seems to work
