import type { VercelRequest, VercelResponse } from '@vercel/node'

const BASE_URL = 'https://api.discogs.com'
const USER_AGENT = 'DnBReleaseBrowser/1.0'

export default async function handler(req: VercelRequest, res: VercelResponse) {
    const token = process.env.DISCOGS_TOKEN

    const { q, year } = req.query

     let url = `${BASE_URL}/database/search?type=release&genre=Electronic&style=Drum%20n%20Bass&token=${token}`

     if (q) {
        url += `&q=${encodeURIComponent(q as string)}`
     }  if (year) {
        url += `&year=${year}`
     } if (!q) {
        url += `&sort=hot`
     }

     const response = await fetch(url, {
        headers: { 'User-Agent': USER_AGENT },
     })

     const data = await response.json()
     res.status(response.status).json(data)
}


