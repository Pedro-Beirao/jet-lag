# Preparations before playing the game
The game will be played on this [link](https://pedro-beirao.github.io/jet-lag/). I have tried my very best to convert all imperial units to metric, so it probably will be different from the actual metric version. Welp, it is what it is, and this is what you gotta do to save 100 SGD...

### Conventions
For Singapore, we will be playing with medium rules (c.f. rule book). All stations are accessible except any stations west to Chinese Garden (i.e. Lakeside, Boon Lay etc.). First group of hiders will start in Dhoby Ghaut.

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

### Tourist Day Pass
Buy a tourist day pass as you will be moving a lot in public transportations. 

#### Quick Warning on Public Transportations
Speaking of public transportations, apparently you must tap out 2 hours after you tap in, otherwise you will be stuck in the station and potentially be fined for loitering.

### Life 360
Download Life 360 as it will be used for tracking seekers when you are playing as hiders.

N.B. I was told that Google Family Link works as well, but it's only for Android users lol

# Website (Note to self)

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

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
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true npm run deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch. You need to have a personal access token though, and you will enter the token when the terminal asks for your password.
