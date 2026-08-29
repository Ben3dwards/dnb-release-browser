import { useState} from "react";
import { mockReleases } from "./data/mockReleases";
import ReleaseCard from "./components/releaseCard";
import SearchBar from "./components/searchBar";

function App(){
  const [titleSearch, setTitleSearch] = useState('')
  const [artistSearch, setArtistSearch] = useState('')

  const filteredReleases = mockReleases.filter((release) => release.title.toLocaleLowerCase().includes(titleSearch.toLowerCase()) && release.artist.toLowerCase().includes(artistSearch.toLowerCase()))

  return(
    <div>
      <h1>DnB Release Browser</h1>


      <SearchBar 
      titleSearch={titleSearch} 
      artistSearch={artistSearch} 
      onTitleChange={setTitleSearch} 
      onArtistChange={setArtistSearch} 
      />

      {filteredReleases.map((release)=>
        <ReleaseCard key={release.title} release={release} />
      )}
    </div>
  )

}

export default App