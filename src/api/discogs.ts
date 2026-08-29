import type { DiscogsRelease } from "../types"

const BASE_URL = 'https://api.discogs.com'
const USER_AGENT = 'DnBReleaseBrowser/1.0'

export async function searchByArtist(artistName: string): Promise<DiscogsRelease[]>{
    const token = import.meta.env.VITE_DISCOGS_TOKEN

    const url = `${BASE_URL}/database/search?q=${encodeURIComponent(artistName)}&type=release&genre=Electronic&style=Drum%20n%20Bass&token=${token}`

    const response = await fetch(url, {headers: {'User-Agent': USER_AGENT}})

    const data = await response.json()
    return data.results
}


