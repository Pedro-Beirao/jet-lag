# My personal fork of the Jet Lag deck and questions

This is my personal fork of this website, with modified (both added and removed) questions and cards, which I believe make it a better and more balanced game.

You can play it at [jetlag.pedro-beirao.eu](https://jetlag.pedro-beirao.eu)

Or find the original [here](https://github.com/JQChong/jet-lag)

### Guide to modify cards and questions

`src/pages/investigation` has the files that hold the questions in each category, pretty easy to customise.

For the cards it is a bit more involved:
1. Create a PNG of the card and put it in `static/cards`.
2. Add it's name and amount to `src/components/CardDeckGallery.tsx`
3. Add it's full configuration and behaviour to `src/core/deck.ts`

I wish for a simpler way to just define everything in JSON and it would render the card in HTML and handle everything, but that's not the how the devs setup this website, and it would be a huge task to rewrite it now.

### Rule Book
Read and understand the following sections.

- Quick Start Guide
    - Round Start
    - Hiding Zones
    - Asking Questions
    - The Hider Deck
    - The End Game
    - Rotating Rounds
- Seeking
- Hiding
    - Hiding Zones
    - Hiding Spots
- General Tips

For now you can just skim through The Hider Deck section.

### Map Generator
Go to Map Generator at the top right corner of the page, and go through the tutorial. I will share the game link when it is time to play. All deductions will be based on the answers given by Map Generator.

Everyone must get an API key from ThunderForest so that the MRT lines and stations are visible on the map.

<!--
Note: you will see in one of the tutorial pages that players should share the link to each other while playing the game. To make one of the curses work, we will not be doing so. All questions and answers will be done as text messages.
-->

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment on Github Pages (Actions)

Just need to enable it in the repo settings, `.github/workflows/gh-pages.yml` will build the static content and deploy it.

### Deployment on Github Pages (gh-pages branch)

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch. You need to have a personal access token though, and you will enter the token when the terminal asks for your password.
