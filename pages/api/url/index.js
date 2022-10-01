import { nanoid } from 'nanoid'
import { setUrl } from '../../../src/lib/redis'

export default async function handler(req, res) {
  const { url } = req.body

  if (!url) {
    return res.status(400).json({ error: 'URL is required' })
  }

  if (!isURL(url)) {
    return res.status(400).json({ error: 'Invalid URL' })
  }

  const shortUrl = nanoid(5)

  if (req.method === 'POST') {
    const newUrl = { url, shortUrl, clicks: 0 }

    const response = await setUrl(url, shortUrl)
    return res.status(200).json(response)
  }
  res.status(200).json({ name: 'Helloi world' })
}

const isURL = (url) => {
  try {
    new URL(url)
    return true
  } catch (err) {
    return false
  }
}
