# Arti-Ficial

A 3D tin-toy robot rescue game for the browser, inspired by the old Pangea Software classic *Otto Matic*. It's all original: a 1950s B-movie feel, a chrome robot with a glass head, and a lot of goofy aliens.

The Glorpians have swept through the Toasty System and snatched up folks on every world. Arti flies a red-and-cream rocket from planet to planet, rescues everyone, zaps the Glorpians and takes down the Glorp Mothership on Valentoid.

## Play

Open `index.html` through any static server. It loads three.js from a CDN, so there's no build step:

```bash
cd Arti-Ficial && python3 -m http.server 8000
```

When the main `server.js` app runs, the game is also served at `/arti-ficial/`.

## The Toasty System

Nine made-up worlds circling a sun called **Big Toasty**:

| # | Planet | What kind of world | Gimmick |
|---|--------|--------------------|---------|
| 1 | **Cindergulp** | Volcano world | Low gravity, lava seas, Magma Gloobs |
| 2 | **Fizzmire** | Swamp world | Acid pools and thick fog |
| 3 | **Mossbottom** | Garden world | Pine forests, wade-able water, saucers and tripods |
| 4 | **Crumblecrag** | Canyon world | Giant red-rock terraces, low gravity, lots of tripods |
| 5 | **Thunderbelly** | Storm giant | Heavy gravity squashes your jumps; storm pits |
| 6 | **Glimmerloop** | Ringed desert | Gold dunes under giant rings; Ring-Goo |
| 7 | **Frostwobble** | Ice world | Slippery ice, a sideways sky, liquid methane |
| 8 | **Gustopia** | Wind world | Gusting winds push you around |
| 9 | **Valentoid** | Tiny heart world | Floaty gravity, a big heart, and the Mothership boss |

## Controls

| Action | Keyboard / mouse | Touch |
|--------|------------------|-------|
| Move | Arrow keys | Left stick |
| Jump / jet (press twice) | S (or Space) | JUMP |
| Zap (auto-aims) | W (or click, F) | ZAP |
| Turn camera | A / D (or mouse, click to lock) | Drag on the right side |
| Pause | P / Esc | II |
| Mute | M | |

## How a planet works

- Rescue every folk (the yellow arrows, also yellow dots on the radar) by walking into them.
- Collect bolts for points, oil cans to refill your battery, and atoms for 15 seconds of Triple Zap.
- Once everyone is saved the rocket lights up green. Walk back to it to blast off.
- On Valentoid, rescuing everyone summons the Glorp Mothership. Shoot it down to win.

Progress (unlocked planets and best scores) is saved in your browser's localStorage.

## Files

- `index.html`: markup for the screens and HUD
- `style.css`: 1950s pulp-poster styling
- `game.js`: everything else (terrain, entities, audio synth, solar map)
