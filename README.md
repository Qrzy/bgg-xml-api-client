# BGG XML API Client

[![CI](https://github.com/Qrzy/bgg-xml-api-client/actions/workflows/ci.yml/badge.svg)](https://github.com/Qrzy/bgg-xml-api-client/actions/workflows/ci.yml) [![npm](https://img.shields.io/npm/v/bgg-xml-api-client.svg)](https://www.npmjs.com/package/bgg-xml-api-client) [![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

## Table of Contents
- [Install](#install)
- [Quick Start](#quick-start)
- [Wrappers](#wrappers)
- [Client options](#client-options)
- [Contributing](#contributing)
- [Changelog](#changelog)

It's a simple library providing just a single function that returns requested BGG data as a JavaScript object.
It uses [ofetch](https://github.com/unjs/ofetch) and [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) under the hood.

## Install
Install with your package manager of choice:

```bash
pnpm add bgg-xml-api-client
# or
npm install bgg-xml-api-client
# or
yarn add bgg-xml-api-client
```

## Quick Start
ESM / TypeScript example:

```ts
import { bggXmlApiClient, BggXmlApiClient } from 'bgg-xml-api-client'

// one-off request
const response = await bggXmlApiClient.get('user', { name: 'THENAME' }, { authorizationKey: 'THEKEY' })

// reusable client
const client = new BggXmlApiClient('THEKEY')
const userCollection = await client.getCollection({ username: 'THENAME' })
```

## Example usage:

```js
import { bggXmlApiClient } from 'bgg-xml-api-client'

const response = await bggXmlApiClient.get(
  'user',
  { name: 'THENAME' },
  { authorizationKey: 'THEKEY' }
)
```

`bggXmlApiClient` takes 3 parameters:
- BGG API resource name
- resource parameters as object - for better DX the parameters are typed, but the type is a union of types given to the wrappers listed below
- client options with required `authorizationKey` (as of fall 2025)

## Wrappers

There are also wrappers available for certain resources that accept params (already typed) and settings that serve as options for the basic client:

- `getBggCollection(param, settings)`
- `getBggFamily(params, settings)`
- `getBggForum(params, settings)`
- `getBggForumlist(params, settings)`
- `getBggGeeklist(params, settings)`
- `getBggGuild(params, settings)`
- `getBggHot(params, settings)`
- `getBggPlays(params, settings)`
- `getBggSearch(params, settings)`
- `getBggThing(params, settings)`
- `getBggThread(params, settings)`
- `getBggUser(params, settings)`

## Single client instance

For more convenience, especially if one likes to instantiate a client, there is a class `BggXmlApiClient` allowing to pass authorization key just once.

```js
import { BggXmlApiClient } from 'bgg-xml-api-client'

const client = new BggXmlApiClient('THEKEY')
const userCollectionResponse = await client.getCollection({ username: 'THENAME' })
const userResponse = await client.getBggUser({ name: 'THENAME' })
```

## Client options

Both main client as well as wrappers accept one more parameter that can override default options:

```js
interface ClientOptions {
  authorizationKey: string
  maxRetries?: number // default 10
  retryInterval?: number // default 5000[ms] (5s)
  timeout?: number // default 10000[ms] (10s)
}
```

The `authorizationKey` is the bare minimum as of fall 2025 - BGG requires all requests to their XML APIs to have proper authorization header.
You can find more at [Using the XML API -> Application Tokens](https://boardgamegeek.com/using_the_xml_api#toc10)

One can use it to control the retry flow when collections API replies with 202 status code meaning the request is still processing and one should retry later for actual results.

For example, in order to increase number of retries on 202 response to 20 made in an interval of 3s:

```js
import { bggXmlApiClient, BggXmlApiClient } from 'bgg-xml-api-client'

const response = await bggXmlApiClient.get(
  'collection',
  { username: 'THENAME' },
  { authorizationKey: 'THEKEY', maxRetries: 20, retryInterval: 3000 }
)

/** ... */

const client = new BggXmlApiClient('THEKEY')
const userCollectionResponse = await client.getCollection(
  { username: 'THENAME' },
  { maxRetries: 20, retryInterval: 3000 } // note lack of `authorizationKey` here
)
```

or to reduce the timeout to 5s when fetching user:

```js
import { getBggUser, BggXmlApiClient } from 'bgg-xml-api-client'

const response = await getBggUser(
  { name: 'THENAME' },
  { authorizationKey: 'THEKEY', timeout: 5000 }
)

/** ... */

const client = new BggXmlApiClient('THEKEY')
const userCollectionResponse = await client.getBggUser(
  { name: 'THENAME' },
  { timeout: 5000 } // note lack of `authorizationKey` here
)
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on reporting issues, running tests, and submitting pull requests. Conventional Commits are enforced for this repository (see the contributing guide for details).

## Changelog
See releases and changelog on GitHub: https://github.com/Qrzy/bgg-xml-api-client/releases

## Examples
See the `examples/` folder for runnable scripts. They use the compiled `dist` output, so run `pnpm build` before executing them.

```bash
export BGG_API_KEY=your_key_here
pnpm build
node examples/getCollection.mjs
```
