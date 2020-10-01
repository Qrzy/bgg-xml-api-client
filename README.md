# BGG XML API Client

It's a simple library providing just a single function that returns requested BGG data as a JavaScript object.
It uses [axios](https://github.com/axios/axios) under the hood, so the return value is wrapped with `AxiosResponse` - just to provide all the data about the response from API.
The main data sits in `data` property of that response object.

## Example usage:

```js
import bggXmlApiClient from 'bgg-xml-api-client';

const { data } = await bggXmlApiClient('user', { name: 'Qrzy88' });

console.log(data.id); // displays: 1381959
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
