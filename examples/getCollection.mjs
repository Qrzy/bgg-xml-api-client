import { bggXmlApiClient } from '../dist/index.mjs'

const key = process.env.BGG_API_KEY
if (!key) {
  console.error('Set BGG_API_KEY environment variable')
  process.exit(1)
}

async function main() {
  try {
    const res = await bggXmlApiClient.get('collection', { username: 'thename' }, { authorizationKey: key })
    console.log(JSON.stringify(res, null, 2))
  } catch (err) {
    console.error('Error:', err)
    process.exit(1)
  }
}

main()
