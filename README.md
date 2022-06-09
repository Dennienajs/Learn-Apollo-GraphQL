# learn-apollo-graphql

https://www.apollographql.com/tutorials

## React/Webpack/Node workaround

https://stackoverflow.com/a/69691525/13018123

Go to
`\node_modules\react-scripts\config\webpack.config.js`
And add

```
const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);
```
