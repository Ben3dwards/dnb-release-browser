import { FaYoutube, FaSoundcloud, FaSpotify, FaRecordVinyl } from 'react-icons/fa'

type PlatformLinksProps = {
    artist:string
    title: string
    discogsUri: string
}

function PlatformLinks ({artist, title, discogsUri}: PlatformLinksProps){
    const query = encodeURIComponent(`${artist} ${title}`)

    const youtubeUrl = `https://www.youtube.com/results?search_query=${query}`
    const soundcloudUrl = `https://soundcloud.com/search?q=${query}`
    const spotifyUrl = `https://open.spotify.com/search/${query}`
    const discogsUrl = `https://www.discogs.com${discogsUri}`

    return (
        <div className="flex gap-3 mt-2">
            <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" title="Search YouTube - track may not be available">
                <FaYoutube size={28} className="text-neutral-500 hover:text-rave-green hover:drop-shadow-[0_0_15px_rgba(198,255,22,0.4)] transition-colors" />
            </a>
            <a href={soundcloudUrl} target="_blank" rel="noopener noreferrer" title="Search SoundCloud - track may not be available">
                <FaSoundcloud size={28} className="text-neutral-500 hover:text-rave-green hover:drop-shadow-[0_0_15px_rgba(198,255,22,0.4)] transition-colors" />
            </a>
            <a href={spotifyUrl} target="_blank" rel="noopener noreferrer" title="Search Spotify - track may not be available">
                <FaSpotify size={28} className="text-neutral-500 hover:text-rave-green hover:drop-shadow-[0_0_15px_rgba(198,255,22,0.4)] transition-colors" />
            </a>
            <a href={discogsUrl} target="_blank" rel="noopener noreferrer" title="View this release on Discogs" className="flex items-center gap-1 text-neutral-500 hover:text-rave-green hover:drop-shadow-[0_0_15px_rgba(198,255,22,0.4)] transition colors">
                <FaRecordVinyl size={28} />
                <span className="text-xs uppercase tracking-wide">Buy Vinyl</span>
            </a>
        </div>
    )
}

export default PlatformLinks





