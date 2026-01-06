Examples
========

These examples show simple usage of the library. They require a valid BGG API authorization key.

Set your key as an environment variable and run the scripts with Node (Node 18+ recommended):

```bash
export BGG_API_KEY=your_key_here
node examples/getCollection.mjs
node examples/getUser.mjs
```

The scripts are ESM modules and use `process.env.BGG_API_KEY` for the `authorizationKey` value.
