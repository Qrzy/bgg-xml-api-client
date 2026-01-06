# BGG XML API Client

It's a simple library providing just a single function that returns requested BGG data as a JavaScript object.
It uses [ofetch](https://github.com/unjs/ofetch) and [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) under the hood.

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

For more convenience, especialy if one likes to instantiate a client, there is a class `BggXmlApiClient` allowing to pass authorization key just once.

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

The `authorizationKey` is the bare minimum as of fall 2025 - BGG rquires all requests to their XML APIs to have proper authorization header.
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

const const client = new BggXmlApiClient('THEKEY')
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

const const client = new BggXmlApiClient('THEKEY')
const userCollectionResponse = await client.getBggUser(
  { name: 'THENAME' },
  { timeout: 5000 } // note lack of `authorizationKey` here
)
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on reporting issues, running tests, and submitting pull requests.
