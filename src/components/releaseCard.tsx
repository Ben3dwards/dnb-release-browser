import type {DiscogsRelease} from '../types'

type ReleaseCardProps = {
    release: DiscogsRelease
}

function ReleaseCard({release}: ReleaseCardProps){ 
    return(
        <div>
            <img src={release.cover_image} alt={release.title} width={150} />
            <h2>{release.title}</h2>
            <p>Year: {release.year}</p>
        </div>
    )
}

export default ReleaseCard