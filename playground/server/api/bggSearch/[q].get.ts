import { getBggSearch } from '../../../../src'

export default defineEventHandler(async (event: H3Event) => {
  try {
    const result = await getBggSearch({ query: getRouterParam(event, 'q') })
    return result
  }
  catch (err) {
    console.error(err)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    }
  }
})
