import type {Release} from '../types'

type ReleaseCardProps = {
    release: Release
}

function ReleaseCard({release}: ReleaseCardProps){
    return(
        <div>
            <h2>{release.title}</h2>
            <p>Artist: {release.artist}</p>
            <p>Label: {release.label}</p>
        </div>
    )
}

export default ReleaseCard