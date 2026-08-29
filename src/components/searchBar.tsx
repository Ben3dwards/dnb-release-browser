type searchBarProps = {
    titleSearch: string
    artistSearch: string
    onTitleChange: (value: string) => void
    onArtistChange: (value: string) => void
}

function SearchBar({titleSearch, artistSearch, onTitleChange, onArtistChange,}: searchBarProps){
    return (
        <div>
            <input type="text" placeholder="Search By Tracks" value={titleSearch} onChange={(e) => onTitleChange(e.target.value)} />
            <input type="text" placeholder="Search By Artist" value={artistSearch} onChange={(e) => onArtistChange(e.target.value)} />
        </div>
    )
}

export default SearchBar