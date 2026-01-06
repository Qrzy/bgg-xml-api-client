import { getBggSearch } from '../../../../src'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  try {
    const result = await getBggSearch({ query: getRouterParam(event, 'q') as string }, { authorizationKey: useRuntimeConfig().bggApiToken })
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
