export type Release ={
  title: string
  artist: string
  label: string
}


export type DiscogsRelease = {
  id: number
  title: string
  year: string
  cover_image: string
  label: string[]
  genre: string[]
  style: string[
  ]
}