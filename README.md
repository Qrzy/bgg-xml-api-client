# BGG XML API Client

It's a simple library providing just a single function that returns requested BGG data as a JavaScript object.
It uses [ofetch](https://github.com/unjs/ofetch) under the hood.

## Example usage:

```js
import { bggXmlApiClient } from 'bgg-xml-api-client'

const response = await bggXmlApiClient.get('user', { name: 'Qrzy88' })

console.log(response.id) // displays: 1381959
```

`bggXmlApiClient` takes 2 parameters:
- BGG API resource name
- resource parameters as object - for better DX the parameters are typed, but the type is a union of types given to the wrappers listed below

## Wrappers

There are also wrappers available for certain resources that accept params (already typed) as the only argument:

- `getBggCollection(params)`
- `getBggFamily(params)`
- `getBggForum(params)`
- `getBggForumlist(params)`
- `getBggGeeklist(params)`
- `getBggGuild(params)`
- `getBggHot(params)`
- `getBggPlays(params)`
- `getBggSearch(params)`
- `getBggThing(params)`
- `getBggThread(params)`
- `getBggUser(params)`

## Client options

Both main client as well as wrappers accept one more parameter that can override default options:

```js
interface ClientOptions {
  maxRetries: number // default 10
  retryInterval: number // default 5000[ms] (5s)
  timeout: number // default 10000[ms] (10s)
}
```

One can use it to control the retry flow when collections API replies with 202 status code meaning the request is still processing and one should retry later for actual results.

For example, in order to increase number of retries on 202 response to 20 made in an interval of 3s:

```js
import { bggXmlApiClient } from 'bgg-xml-api-client'

const response = await bggXmlApiClient.get('collection', { username: 'Qrzy88' }, { maxRetries: 20, retryInterval: 3000 })
```

or to reduce the timeout to 5s when fetching user:

```js
import { getBggUser } from 'bgg-xml-api-client'

const response = await getBggUser({ name: 'Qrzy88' }, { timeout: 5000 })
```
