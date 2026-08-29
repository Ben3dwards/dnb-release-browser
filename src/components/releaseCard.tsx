import type {DiscogsRelease} from '../types'
import PlatformLinks from './platformLinks'

type ReleaseCardProps = {
    release: DiscogsRelease
}

function ReleaseCard({release}: ReleaseCardProps){ 

    const [artist, title] = release.title.split(' - ')
    return(
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden hover:border-rave-green transition-colors">
            <img src={release.cover_image} alt={release.title} width={150} />
            <div className="p-3">
                <h2 className="font-display text-x1 textwhite tracking-wide truncate">{title}</h2>
                <p className="text-sm text-netural-400 truncate">Artist(s): {artist}</p>
                <p className="text-xs text-rave-magenta mt-1">Year: {release.year}</p>
                <PlatformLinks artist={artist} title={title} />
            </div>
        </div>
    )
}

export default ReleaseCard