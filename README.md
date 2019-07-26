<img src="https://github.com/maael/ffxiv-overlays/raw/master/static/moogle.jpg" align="right" width="30%" />

# FFXIV Overlays

A collection of ACT overlays for FFXIV.

## Usage

Put [https://maael.github.io/ffxiv-overlays/t/\<theme\>](https://maael.github.io/ffxiv-overlays/t/<theme>) in your ACT.

## Themes

### [Base](https://maael.github.io/ffxiv-overlays/t/base)

Just a basic theme that logs out all the encounter data and first combatant data it gets from ACT events for debugging connection to ACT.

### [Mini DPS](https://maael.github.io/ffxiv-overlays/t/minidps)

Super minimal theme of player name, job, and damage.

> TODO: Add Image

## Development

1. `git clone git@github.com:maael/ffxiv-overlays.git`
2. `cd ffxiv-overlays`
3. `yarn`
4. `yarn dev`
5. Open browser to `http://localhost:3000`
6. Add `?simulator` as a query param to force themes to use simulated values
7. :sparkles:

### Notes

- When you add a new page you will have to add it to [next.config.js](./next.config.js), adding an entry to the exportPathMap that looks like this:

```js
  '/t/<theme>': { page: '/t/<theme>' },
```

## Deployment

Hosted on GitHub pages.

[https://maael.github.io/ffxiv-overlays](https://maael.github.io/ffxiv-overlays)

1. `yarn deploy`
2. `git push`
3. :sparkles:

## Notes

You can test themes by going to [https://maael.github.io/ffxiv-overlays/t/\<theme\>](https://maael.github.io/ffxiv-overlays/t/<theme>) and adding query params such as:

- `simulator` - to enable a simulation of ACT
- `debug` - to log updates from the simulator to the console

## Ideas for themes

- Simple scrolling graph showing damage over fight for last X ticks, with current damage underneath it