type searchBarProps = {
    artistSearch: string
    yearSearch: string
    onArtistChange: (value: string) => void
    onYearChange: (value: string) => void
}

const currentYear = new Date().getFullYear()
const years = Array.from({length: currentYear - 1989}, (_, i) => currentYear -i)

function SearchBar({artistSearch, yearSearch, onArtistChange, onYearChange}: searchBarProps){
    return (
        <div className="flex flex-wrap gap-3 items-center bg-neutral-900 border border-neutral-800 rounded-full w-full sm:w-[650px] px-4 py-2">
            <input type="text" placeholder="Search By Artist (Leave Blank for Random Tracks!)" value={artistSearch} onChange={(e) => onArtistChange(e.target.value)} 
                className="bg-transparent text-white placeholder-neutral-500 outline-none flex-1 min-w-[150px]"
            />

            <div className="w-px h-6 bg-neutral-700" />

                <select value={yearSearch} onChange={(e) => onYearChange(e.target.value)} className="bg-transparent text-rave-green outline-none focus:drop-shadow-[0_0_15px_rgba(198,255,22,1)] cursor-pointer">
                    <option value="" className="bg-neutral-900">Any Year</option>
                    {years.map((year)=>
                        <option key={year} value={year} className="bg-neutral-900">
                            {year}
                        </option>
                    )}
                </select>

        </div>
    )
}

export default SearchBar