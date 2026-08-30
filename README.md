#Drum and Bass Browser
A Drum and Bass discovery app - crate dig through DnB releases pulled from Discogs' catalog. Built as a project to better learn React, TypeScript, working with an external API and for my own music discovery.

![DnB Browser Screenshot](./screenshot.png)

##Features
- **Search by artist:** Browse an artists release history
- **Browse by year:** pick a year and browse random tracks from that time
- **Combine Filters:** search for an artist and year to narrow results
- **Links** - search YouTube, Soundcloud or Spotify for a track. Or View/Buy the release on Discogs 

##Stack
- **React** + **TypeScript**
- **Vite** — build tool and dev server
- **Tailwind CSS v4** — styling
- **Discogs API** — release/artist data

## Running it locally

1. Clone the repo:
```bash
   git clone https://github.com/Ben3dwards/dnb-release-browser.git
   cd dnb-release-browser
```

2. Install dependencies:
```bash
   npm install
```

3. Create a `.env` file in the project root with your own Discogs API token:

VITE_DISCOGS_TOKEN=your_token_here

 You can generate a personal access token for free at [discogs.com/settings/developers](https://www.discogs.com/settings/developers).

4. Start the dev server:
```bash
   npm run dev
```

5. Open `http://localhost:5173` in your browser.


## Possible future additions

- Sorting results by release date
- Saving tracks to back to later

## Acknowledgements

Release, artist, and cover art data provided by the [Discogs API](https://www.discogs.com/developers).