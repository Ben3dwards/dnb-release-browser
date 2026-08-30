import { FaYoutube, FaSoundcloud } from 'react-icons/fa'

type PlatformLinksProps = {
    artist:string
    title: string
}

function PlatformLinks ({artist, title}: PlatformLinksProps){
    const query = encodeURIComponent(`${artist} ${title}`)

    const youtubeUrl = `https://www.youtube.com/results?search_query=${query}`
    const soundcloudUrl = `https://soundcloud.com/search?q=${query}`

    return (
        <div className="flex gap-3 mt-2">
        <a href={youtubeUrl} target="_blank" rel="noopener noreferrer">
            <FaYoutube size={28} className="text-neutral-500 hover:text-rave-green transition-colors" />
        </a>
        <a href={soundcloudUrl} target="_blank" rel="noopener noreferrer">
            <FaSoundcloud size={28} className="text-neutral-500 hover:text-rave-green transition-colors" />
        </a>    
        </div>
    )
}

export default PlatformLinks