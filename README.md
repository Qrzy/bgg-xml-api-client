# BGG XML API Client

It's a simple library providing just a single function that returns requested BGG data as a JavaScript object.
It uses [ofetch](https://github.com/unjs/ofetch) under the hood.

## Example usage:

```js
import bggXmlApiClient from 'bgg-xml-api-client'

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
