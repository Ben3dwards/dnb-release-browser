import type {DiscogsRelease} from '../types'
import PlatformLinks from './platformLinks'
import fallbackPhoto from '../assets/imageFail.png'

type ReleaseCardProps = {
    release: DiscogsRelease
}

function ReleaseCard({release}: ReleaseCardProps){ 

    const [artist, title] = release.title.split(' - ')
    return(
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden hover:border-rave-green hover:drop-shadow-[0_0_15px_rgba(198,255,22,0.4)] transition-colors">
            <img src={release.cover_image.includes('spacer.gif') ? fallbackPhoto : release.cover_image} alt={release.title} className="w-full aspect-sqare object-cover" />
            <div className="p-3">
                <h2 className="font-display text-xl text-white tracking-wide truncate">{title}</h2>
                <p className="text-base text-neutural-400 truncate">Artist(s): {artist}</p>
                <p className="text-sm text-rave-magenta mt-1">Year: {release.year}</p>
                <PlatformLinks artist={artist} title={title} discogsUri={release.uri} />
            </div>
        </div>
    )
}

export default ReleaseCard