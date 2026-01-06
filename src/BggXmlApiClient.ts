import {
  getBggCollection,
  getBggFamily,
  getBggForum,
  getBggForumlist,
  getBggGeeklist,
  getBggGuild,
  getBggHot,
  getBggPlays,
  getBggSearch,
  getBggThing,
  getBggThread,
  getBggUser,
} from './wrappers'
import { bggXmlApiClient } from './client'
import { ClientOptions } from './types'

export class BggXmlApiClient {
  constructor(private bggApiToken: string) {}

  get(resource: Parameters<typeof bggXmlApiClient.get>[0], queryParams: Parameters<typeof bggXmlApiClient.get>[1], settings?: Omit<ClientOptions, 'authorizationKey'>) {
    return bggXmlApiClient.get(resource, queryParams, { authorizationKey: this.bggApiToken, ...settings })
  }

  getBggCollection(params: Parameters<typeof getBggCollection>[0], settings?: Omit<ClientOptions, 'authorizationKey'>) {
    return getBggCollection(params, { authorizationKey: this.bggApiToken, ...settings })
  }

  getBggFamily(params: Parameters<typeof getBggFamily>[0], settings?: Omit<ClientOptions, 'authorizationKey'>) {
    return getBggFamily(params, { authorizationKey: this.bggApiToken, ...settings })
  }

  getBggForum(params: Parameters<typeof getBggForum>[0], settings?: Omit<ClientOptions, 'authorizationKey'>) {
    return getBggForum(params, { authorizationKey: this.bggApiToken, ...settings })
  }

  getBggForumlist(params: Parameters<typeof getBggForumlist>[0], settings?: Omit<ClientOptions, 'authorizationKey'>) {
    return getBggForumlist(params, { authorizationKey: this.bggApiToken, ...settings })
  }

  getBggGeeklist(params: Parameters<typeof getBggGeeklist>[0], settings?: Omit<ClientOptions, 'authorizationKey'>) {
    return getBggGeeklist(params, { authorizationKey: this.bggApiToken, ...settings })
  }

  getBggGuild(params: Parameters<typeof getBggGuild>[0], settings?: Omit<ClientOptions, 'authorizationKey'>) {
    return getBggGuild(params, { authorizationKey: this.bggApiToken, ...settings })
  }

  getBggHot(params: Parameters<typeof getBggHot>[0], settings?: Omit<ClientOptions, 'authorizationKey'>) {
    return getBggHot(params, { authorizationKey: this.bggApiToken, ...settings })
  }

  getBggPlays(params: Parameters<typeof getBggPlays>[0], settings?: Omit<ClientOptions, 'authorizationKey'>) {
    return getBggPlays(params, { authorizationKey: this.bggApiToken, ...settings })
  }

  getBggSearch(params: Parameters<typeof getBggSearch>[0], settings?: Omit<ClientOptions, 'authorizationKey'>) {
    return getBggSearch(params, { authorizationKey: this.bggApiToken, ...settings })
  }

  getBggThing(params: Parameters<typeof getBggThing>[0], settings?: Omit<ClientOptions, 'authorizationKey'>) {
    return getBggThing(params, { authorizationKey: this.bggApiToken, ...settings })
  }

  getBggThread(params: Parameters<typeof getBggThread>[0], settings?: Omit<ClientOptions, 'authorizationKey'>) {
    return getBggThread(params, { authorizationKey: this.bggApiToken, ...settings })
  }

  getBggUser(params: Parameters<typeof getBggUser>[0], settings?: Omit<ClientOptions, 'authorizationKey'>) {
    return getBggUser(params, { authorizationKey: this.bggApiToken, ...settings })
  }
}