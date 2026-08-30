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
      setResults(getRandomResults(data, 12))
    })
  }, [])

  const handleSearch = () => {searchByArtist(artistSearch, yearSearch).then((data) => {
    const finalResults = artistSearch ? data : getRandomResults(data, 12)
    setResults(finalResults)
  })}

  return(
    <div className="min-h-screen bg-rave-black text-white font-mono p-6">
      <div className="max-w-7xl mx-auto">
          <h1 className="font-display font-bold text-7xl tracking-wide text-rave-green drop-shadow-[0_0_15px_rgba(198,255,22,1)] mb-1">DNB BROWSER</h1>

          <p className="font-display text-3xl text-rave-magenta tracking-widest uppercase mt-1 drop-shadow-[0_0_10px_rgba(255,46,147,1)]">Virtual DnB Crate Digger!</p>

          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-8">
            <SearchBar
              artistSearch={artistSearch}
              yearSearch={yearSearch}
              onArtistChange={setArtistSearch}
              onYearChange={setYearSearch}
            />
            <button onClick={handleSearch} className="bg-rave-green text-rave-black text-lg tracking-wide px-6 py-2 rounded-full hover:bg-white transition-colors">Search</button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {results.map((release) => (
              <ReleaseCard key={release.id} release={release} />
            ))}
          </div>
      </div>
    </div>
  )
}

export default App