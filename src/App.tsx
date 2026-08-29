import { useState } from "react";
import { mockReleases } from "./data/mockReleases";
import SearchBar from "./components/searchBar";
import { searchByArtist } from "./api/discogs";
import type { DiscogsRelease } from "./types";

function App(){
  const [titleSearch, setTitleSearch] = useState('')
  const [artistSearch, setArtistSearch] = useState('')
  const [results, setResults] = useState<DiscogsRelease[]>([])

  const handleSearch = () => {searchByArtist(artistSearch).then((data) =>{
    setResults(data)
  })}

  //const filteredReleases = mockReleases.filter((release) => release.title.toLocaleLowerCase().includes(titleSearch.toLowerCase()) && release.artist.toLowerCase().includes(artistSearch.toLowerCase()))

  return(
    <div>
      <h1>DnB Release Browser</h1>


      <SearchBar 
      titleSearch={titleSearch} 
      artistSearch={artistSearch} 
      onTitleChange={setTitleSearch} 
      onArtistChange={setArtistSearch} 
      />

      <button onClick={handleSearch}>Search Discogs</button>

      {results.map((release)=>
        <div key={release.id}>
          <img src={release.cover_image} alt={release.title} width={150}/>
          <h2>{release.title}</h2>
          <p>Year: {release.year}</p>
        </div>
      )}
    </div>
  )

}

export default App