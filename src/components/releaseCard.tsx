import type {DiscogsRelease} from '../types'

type ReleaseCardProps = {
    release: DiscogsRelease
}

function ReleaseCard({release}: ReleaseCardProps){ 

    const [artist, title] = release.title.split(' - ')
    return(
        <div>
            <img src={release.cover_image} alt={release.title} width={150} />
            <h2>{title}</h2>
            <p>Artist(s): {artist}</p>
            <p>Year: {release.year}</p>
        </div>
    )
}

export default ReleaseCard