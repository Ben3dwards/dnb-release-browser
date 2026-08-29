type searchBarProps = {
    artistSearch: string
    yearSearch: string
    onArtistChange: (value: string) => void
    onYearChange: (value: string) => void
}

const currentYear = new Date().getFullYear()
const years = Array.from({length: currentYear - 1980}, (_, i) => currentYear -i)

function SearchBar({artistSearch, yearSearch, onArtistChange, onYearChange}: searchBarProps){
    return (
        <div>
            <input type="text" placeholder="Search By Artist" value={artistSearch} onChange={(e) => onArtistChange(e.target.value)} />

            <select value={yearSearch} onChange={(e) => onYearChange(e.target.value)}>
                <option value="">Any Year</option>
                {years.map((year)=>
                    <option key={year} value={year}>
                        {year}
                    </option>
                )}
            </select>

        </div>
    )
}

export default SearchBar