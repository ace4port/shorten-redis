import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
})

export async function setUrl(url, shortUrl) {
  await redis.set(shortUrl, url)

  return shortUrl
}

export async function getUrl(shortUrl) {
  const data = await redis.get(shortUrl)
  return data
}
