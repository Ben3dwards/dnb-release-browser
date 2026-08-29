import { useState, useEffect } from "react";
import SearchBar from "./components/searchBar";
import ReleaseCard from "./components/releaseCard";
import { browseReleases, searchByArtist } from "./api/discogs";
import type { DiscogsRelease } from "./types";

function getRandomResults(results: DiscogsRelease[], count: number){
  const shuffled = [...results].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, count)
}

function App(){
  const [artistSearch, setArtistSearch] = useState('')
  const [yearSearch, setYearSearch] = useState('')
  const [results, setResults] = useState<DiscogsRelease[]>([])

  useEffect(() => {
    browseReleases().then((data) => {
      console.log('Sample release:', data[0])
      setResults(getRandomResults(data, 10))
    })
  }, [])

  const handleSearch = () => {searchByArtist(artistSearch, yearSearch).then((data) => {
    const finalResults = artistSearch ? data : getRandomResults(data, 10)
    setResults(finalResults)
  })}

  return(
    <div>
      <h1 className="text-3x1 font-bold text-blue-500">DnB Browser</h1>

      <SearchBar
        artistSearch={artistSearch}
        yearSearch={yearSearch}
        onArtistChange={setArtistSearch}
        onYearChange={setYearSearch}
      />
      <button onClick={handleSearch}>Search</button>

      {results.map((release) => (
        <ReleaseCard key={release.id} release={release} />
      ))}

    </div>
  )
}

export default App