import { getBggSearch, BggXmlApiClient } from '../../../../src'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const authorizationKey = useRuntimeConfig().bggApiToken
  const apiClient = new BggXmlApiClient(authorizationKey)

  try {
    // const result = await getBggSearch(
    //   { query: getRouterParam(event, 'q') as string },
    //   { authorizationKey }
    // )
    const result = await apiClient.getBggSearch(
      { query: getRouterParam(event, 'q') as string }
    )
    return result
  }
  catch (err: any) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    }
  }
})
