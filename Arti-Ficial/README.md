# Arti-Ficial

A 3D tin-toy robot rescue game for the browser, inspired by the old Pangea Software classic *Otto Matic*. It's all original: a 1950s B-movie feel, a chrome robot with a glass head, and a lot of goofy aliens.

The Glorpians have swept through the solar system and snatched up folks on every world. Arti flies a red-and-cream rocket from planet to planet, rescues everyone, zaps the Glorpians and takes down the Glorp Mothership on Plutonly.

## Play

Open `index.html` through any static server. It loads three.js from a CDN, so there's no build step:

```bash
cd Arti-Ficial && python3 -m http.server 8000
```

When the main `server.js` app runs, the game is also served at `/arti-ficial/`.

## The solar system (more or less)

| # | Planet | Formerly | Gimmick |
|---|--------|----------|---------|
| ☀ | **Big Toasty** | The Sun | Don't land here. |
| 1 | **Scorchury** | Mercury | Low gravity, lava seas, Magma Gloobs |
| 2 | **Venusauna** | Venus | Acid hot tubs and pea-soup fog |
| 3 | **Dirtball** | Earth | Wade-able water, saucers and tripods |
| 4 | **Marzipan** | Mars | Terraced canyons, low gravity, lots of tripods |
| 5 | **Jumbopiter** | Jupiter | Heavy gravity squashes your jumps; storm pits |
| 6 | **Ringaling** | Saturn | Gold dunes under giant rings; Ring-Goo |
| 7 | **Tiltania** | Uranus | Slippery ice, a sideways sky, liquid methane |
| 8 | **Neptunes** | Neptune | Gusting winds push you around |
| 9 | **Plutonly** | Pluto | Floaty gravity, a big heart, and the Mothership boss |

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
- On Plutonly, rescuing everyone summons the Glorp Mothership. Shoot it down to win.

Progress (unlocked planets and best scores) is saved in your browser's localStorage.

## Files

- `index.html`: markup for the screens and HUD
- `style.css`: 1950s pulp-poster styling
- `game.js`: everything else (terrain, entities, audio synth, solar map)
