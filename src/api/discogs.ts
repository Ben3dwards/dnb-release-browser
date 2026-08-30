import type { DiscogsRelease } from "../types"

const BASE_URL = 'https://api.discogs.com'
const USER_AGENT = 'DnBReleaseBrowser/1.0'


async function discogsFetch(url: string){
    try{
        const response = await fetch(url, {headers: {'User-Agent': USER_AGENT}})

        if (response.status === 429){
            throw new Error('Too many requests - please wait a moment and try again.')
        }

        if (!response.ok){
            throw new Error('Somthing went wrong fetching data from Discogs.')
        }

        return response.json()
    } catch (error) {
        if (error instanceof Error && error.message.includes('fetch')){
            throw new Error('Network Error - Please wait a moment and try again')
        }
        throw error
    }
}


export async function browseReleases(): Promise<DiscogsRelease[]> {
    const token = import.meta.env.VITE_DISCOGS_TOKEN

    const url = `${BASE_URL}/database/search?type=release&genre=Electronic&style=Drum%20n%20Bass&sort=hot&token=${token}`

    const data = await discogsFetch(url)

    return data.results
}

export async function searchByArtist(artistName: string, year?:string): Promise<DiscogsRelease[]>{
    const token = import.meta.env.VITE_DISCOGS_TOKEN

    let url = `${BASE_URL}/database/search?q=${encodeURIComponent(artistName)}&type=release&genre=Electronic&style=Drum%20n%20Bass&token=${token}`

    if (year) {
        url += `&year=${year}`
    }

    const data = await discogsFetch(url)
    
    return data.results
}


