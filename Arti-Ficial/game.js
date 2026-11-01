// ARTI-FICIAL — a tin-toy robot rescue romp across a made-up solar system.
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js';

/* =========================================================================
   Utilities
   ========================================================================= */
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const rand = (a = 0, b = 1) => a + Math.random() * (b - a);
const pick = (arr) => arr[(Math.random() * arr.length) | 0];
const $ = (id) => document.getElementById(id);

function hash(x, y, s) {
  let h = Math.imul(x | 0, 374761393) ^ Math.imul(y | 0, 668265263) ^ Math.imul(s | 0, 1442695041);
  h = Math.imul(h ^ (h >>> 13), 1274126177);
  h ^= h >>> 16;
  return (h >>> 0) / 4294967296;
}
function vnoise(x, y, s) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash(xi, yi, s), b = hash(xi + 1, yi, s), c = hash(xi, yi + 1, s), d = hash(xi + 1, yi + 1, s);
  return a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v;
}
function fbm(x, y, s, oct = 5) {
  let sum = 0, amp = 1, f = 1, norm = 0;
  for (let i = 0; i < oct; i++) { sum += amp * vnoise(x * f, y * f, s + i * 17); norm += amp; amp *= 0.5; f *= 2.03; }
  return sum / norm;
}
function seeded(seed) { let s = seed >>> 0 || 1; return () => { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; }; }

/* =========================================================================
   The Toasty System: nine made-up worlds circling Big Toasty
   ========================================================================= */
const PLANETS = [
  {
    name: 'Cindergulp', kind: 'a volcano world', tag: 'The ground burps. The ground is also on fire. Watch your step.',
    gim: 'Low gravity and seas of lava. Magma Gloobs bounce around the craters.',
    sky: 0xff9b55, fog: 0xff8a45, fogNear: 40, fogFar: 170, sunColor: 0xfff1c4, sunI: 2.8, hemiSky: 0xffc89a, hemiGround: 0x502010,
    ground: [0x2d1b19, 0x7a3e26, 0xc98a52], gravity: 0.6, seed: 11, amp: 14, scale: 0.02, style: 'craters',
    hazard: { kind: 'lava', color: 0xff5a14, level: -2.6, harmful: true, label: 'Lava' },
    folks: 5, enemies: { gloob: 8 }, decor: [['rock', 50, 0x3a2622], ['crystal', 14, 0xffa040]],
    sky3d: { sun: 90 }, stars: false, music: { root: 196, scale: 'minor', seed: 3 }, mapColor: '#c98a52', mapSize: 6,
  },
  {
    name: 'Fizzmire', kind: 'a swamp world', tag: 'Steamy, soupy and gently carbonated. Do not drink the scenery.',
    gim: 'Bubbling acid pools and thick fog. Saucers lurk in the haze.',
    sky: 0xd8c86a, fog: 0xcfc06a, fogNear: 10, fogFar: 85, sunColor: 0xfff6c0, sunI: 1.8, hemiSky: 0xf0e090, hemiGround: 0x506020,
    ground: [0x5a4e1e, 0x9a8a3a, 0xdccb7a], gravity: 0.9, seed: 23, amp: 16, scale: 0.016, style: 'rolling',
    hazard: { kind: 'acid', color: 0x9cff3a, level: -2.0, harmful: true, label: 'Acid' },
    folks: 6, enemies: { gloob: 6, saucer: 3 }, decor: [['mushroom', 40, 0xc8e05a], ['rock', 25, 0x6a5a2a]],
    sky3d: { sun: 40 }, stars: false, music: { root: 220, scale: 'dorian', seed: 7 }, mapColor: '#e7d27c', mapSize: 9,
  },
  {
    name: 'Mossbottom', kind: 'a garden world', tag: 'Pine trees, puddles and picnic weather. Glorpians not invited.',
    gim: 'The water is fine for wading. Glorp Saucers and Tripods patrol the hills.',
    sky: 0x8fd0ff, fog: 0xbfe4ff, fogNear: 50, fogFar: 190, sunColor: 0xfffbe8, sunI: 2.6, hemiSky: 0xbfe6ff, hemiGround: 0x2e4a1e,
    ground: [0x8a7a4a, 0x3f8a3a, 0x2c5e2a], gravity: 1.0, seed: 37, amp: 18, scale: 0.015, style: 'rolling', colorByHeight: [0.0, 0.18, 0.55],
    hazard: { kind: 'water', color: 0x2f7fd8, level: -1.8, harmful: false, label: 'Water (wade)' },
    folks: 6, enemies: { gloob: 5, saucer: 3, tripod: 2 }, decor: [['tree', 70, 0x2f7a32], ['rock', 25, 0x7a7a70]],
    sky3d: { moon: true }, stars: false, music: { root: 262, scale: 'major', seed: 11 }, mapColor: '#3f8ad8', mapSize: 9,
  },
  {
    name: 'Crumblecrag', kind: 'a canyon world', tag: 'A giant staircase of red rock that nobody remembers building.',
    gim: 'Terraced canyons, low gravity, and lots of Tripod walkers. No hazards, just bad neighbours.',
    sky: 0xf0b49a, fog: 0xe0a080, fogNear: 45, fogFar: 180, sunColor: 0xfff0e0, sunI: 2.4, hemiSky: 0xffd0b8, hemiGround: 0x5a2010,
    ground: [0x6a2414, 0xb5502a, 0xe09060], gravity: 0.6, seed: 41, amp: 22, scale: 0.014, style: 'mesas',
    hazard: null,
    folks: 7, enemies: { gloob: 4, saucer: 2, tripod: 5 }, decor: [['rock', 60, 0x8a3a20], ['obelisk', 8, 0xd8c8b8]],
    sky3d: { moons: 2 }, stars: false, music: { root: 175, scale: 'phrygian', seed: 13 }, mapColor: '#d0603a', mapSize: 7,
  },
  {
    name: 'Thunderbelly', kind: 'a storm giant', tag: 'So heavy it hugs your boots. The rumbling below is the weather.',
    gim: 'Heavy gravity squashes your jumps. Don’t fall into the storm below the cloud-banks.',
    sky: 0xf5d7a8, fog: 0xf0c890, fogNear: 40, fogFar: 170, sunColor: 0xffffff, sunI: 2.2, hemiSky: 0xffe6c0, hemiGround: 0x6a3a1a,
    ground: [0xc06a3a, 0xf0d8b0, 0xa05030], gravity: 1.6, seed: 53, amp: 14, scale: 0.018, style: 'bands',
    hazard: { kind: 'storm', color: 0x7a3f8a, level: -1.5, harmful: true, label: 'Storm' },
    folks: 7, enemies: { gloob: 6, saucer: 4, tripod: 2 }, decor: [['cloud', 30, 0xfff4e4], ['rock', 25, 0x8a4a2a]],
    sky3d: { moons: 4 }, stars: false, music: { root: 147, scale: 'minor', seed: 17 }, mapColor: '#e8b27a', mapSize: 20,
  },
  {
    name: 'Glimmerloop', kind: 'a ringed desert', tag: 'Golden dunes under a sky-sized hula hoop.',
    gim: 'Golden dunes beneath enormous rings. Sinking Ring-Goo lies in the low spots.',
    sky: 0x1f2a4a, fog: 0x3a3a5a, fogNear: 40, fogFar: 170, sunColor: 0xfff0d0, sunI: 2.2, hemiSky: 0xa0a8d8, hemiGround: 0x5a4a20,
    ground: [0x7a5a20, 0xd8b050, 0xf4e0a0], gravity: 1.05, seed: 67, amp: 12, scale: 0.02, style: 'dunes',
    hazard: { kind: 'goo', color: 0xd09a20, level: -2.2, harmful: true, label: 'Ring-Goo' },
    folks: 8, enemies: { gloob: 6, saucer: 5, tripod: 3 }, decor: [['obelisk', 18, 0xe8c870], ['crystal', 20, 0xfff0a0]],
    sky3d: { rings: true }, stars: true, music: { root: 196, scale: 'lydian', seed: 19 }, mapColor: '#e8cf8a', mapSize: 17, ring: true,
  },
  {
    name: 'Frostwobble', kind: 'an ice world', tag: 'Everything is slippery, and the sky fell over sideways long ago.',
    gim: 'Slippery ice everywhere, even the sky is sideways. Liquid methane stings.',
    sky: 0x6fd8e0, fog: 0x9ae8ee, fogNear: 40, fogFar: 170, sunColor: 0xeefcff, sunI: 2.2, hemiSky: 0xd0fcff, hemiGround: 0x2a6a7a,
    ground: [0x3a8a9a, 0x8fd8e0, 0xf0ffff], gravity: 0.9, seed: 79, amp: 16, scale: 0.017, style: 'ridged', slippery: true, roll: 0.07,
    hazard: { kind: 'methane', color: 0x2ac0d8, level: -2.4, harmful: true, label: 'Methane' },
    folks: 8, enemies: { gloob: 7, saucer: 4, tripod: 4 }, decor: [['crystal', 50, 0xbff8ff], ['rock', 15, 0x4a8a9a]],
    sky3d: { rings: true, tilt: true }, stars: true, music: { root: 233, scale: 'dorian', seed: 23 }, mapColor: '#8fe0e8', mapSize: 13, ring: true, ringTilt: true,
  },
  {
    name: 'Gustopia', kind: 'a wind world', tag: 'The breeze here has opinions, and it will push you to share them.',
    gim: 'Howling winds shove you around. Wade through the shallows and mind the gusts.',
    sky: 0x1a3a8a, fog: 0x2a4aa0, fogNear: 35, fogFar: 160, sunColor: 0xc8d8ff, sunI: 1.8, hemiSky: 0x7aa0ff, hemiGround: 0x101a40,
    ground: [0x1a2a6a, 0x3a5ac0, 0x8ab0ff], gravity: 1.1, seed: 89, amp: 18, scale: 0.016, style: 'rolling', wind: 6,
    hazard: { kind: 'water', color: 0x1030a0, level: -1.6, harmful: false, label: 'Deep Blue (wade)' },
    folks: 8, enemies: { gloob: 7, saucer: 6, tripod: 4 }, decor: [['crystal', 40, 0x6a8aff], ['kelp', 40, 0x2ab0a0]],
    sky3d: { moons: 1 }, stars: true, music: { root: 165, scale: 'blues', seed: 29 }, mapColor: '#3a62e0', mapSize: 12,
  },
  {
    name: 'Valentoid', kind: 'a tiny heart world', tag: 'Small, chilly and full of love. The Glorpians parked their Mothership right on the heart.',
    gim: 'Floaty low gravity. The Glorp Mothership is parked here. Bring it down!',
    sky: 0x0c0c1c, fog: 0x1c1a30, fogNear: 50, fogFar: 190, sunColor: 0xe0e0ff, sunI: 1.6, hemiSky: 0x8080b0, hemiGround: 0x302030,
    ground: [0x5a4a4a, 0xa89080, 0xd8c8b8], gravity: 0.35, seed: 97, amp: 15, scale: 0.018, style: 'craters', heart: true,
    hazard: null,
    folks: 6, enemies: { gloob: 6, saucer: 4, tripod: 3 }, decor: [['crystal', 35, 0xe0e0ff], ['rock', 30, 0x6a5a5a]],
    sky3d: { moons: 1, sunSmall: true }, stars: true, boss: true, music: { root: 147, scale: 'minor', seed: 31 }, mapColor: '#d8c0b0', mapSize: 5,
  },
];

const SCALES = {
  major: [0, 2, 4, 7, 9, 12, 14, 16], minor: [0, 3, 5, 7, 10, 12, 15, 17], dorian: [0, 2, 3, 7, 9, 12, 14, 15],
  phrygian: [0, 1, 3, 7, 8, 12, 13, 15], lydian: [0, 4, 6, 7, 11, 12, 16, 18], blues: [0, 3, 5, 6, 7, 10, 12, 15],
};

/* =========================================================================
   Save data
   ========================================================================= */
const SAVE_KEY = 'arti-ficial-save-v1';
let save = { unlocked: 1, cleared: [], score: 0, best: {} };
try { const s = JSON.parse(localStorage.getItem(SAVE_KEY)); if (s && typeof s.unlocked === 'number') save = { ...save, ...s }; } catch (e) { /* storage blocked */ }
function writeSave() { try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) { /* ignore */ } }

/* =========================================================================
   Audio: synth sfx + theremin music
   ========================================================================= */
const Sound = {
  ctx: null, master: null, music: null, muted: false, noiseBuf: null,
  theremin: null, thereminGain: null, beat: 0, beatT: 0, melody: [], bass: [], root: 220,
  init() {
    if (this.ctx) { this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain(); this.master.gain.value = 0.55; this.master.connect(this.ctx.destination);
    this.music = this.ctx.createGain(); this.music.gain.value = 0.5; this.music.connect(this.master);
    const len = this.ctx.sampleRate * 1.0;
    this.noiseBuf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = this.noiseBuf.getChannelData(0); for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    // theremin voice
    const o = this.ctx.createOscillator(); o.type = 'sine'; o.frequency.value = 440;
    const lfo = this.ctx.createOscillator(); lfo.frequency.value = 5.5;
    const lfoG = this.ctx.createGain(); lfoG.gain.value = 7; lfo.connect(lfoG); lfoG.connect(o.frequency);
    const g = this.ctx.createGain(); g.gain.value = 0;
    const o2 = this.ctx.createOscillator(); o2.type = 'triangle'; o2.frequency.value = 440; lfoG.connect(o2.frequency);
    const g2 = this.ctx.createGain(); g2.gain.value = 0.25; o2.connect(g2); g2.connect(g);
    o.connect(g); g.connect(this.music); o.start(); o2.start(); lfo.start();
    this.theremin = [o, o2]; this.thereminGain = g;
  },
  setMuted(m) { this.muted = m; if (this.master) this.master.gain.value = m ? 0 : 0.55; },
  tone(type, f0, f1, dur, vol = 0.2, delay = 0) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + delay;
    const o = this.ctx.createOscillator(); o.type = type; o.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(20, f1), t + dur);
    const g = this.ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g); g.connect(this.master); o.start(t); o.stop(t + dur + 0.02);
  },
  noise(dur, vol = 0.3, freq = 1200, delay = 0, q = 0.8) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + delay;
    const s = this.ctx.createBufferSource(); s.buffer = this.noiseBuf;
    const f = this.ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = freq; f.Q.value = q;
    const g = this.ctx.createGain(); g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    s.connect(f); f.connect(g); g.connect(this.master); s.start(t); s.stop(t + dur + 0.02);
  },
  sfx(name) {
    if (!this.ctx || this.muted) return;
    switch (name) {
      case 'zap': this.tone('square', 1400, 260, 0.12, 0.07); break;
      case 'ezap': this.tone('sawtooth', 500, 900, 0.18, 0.05); break;
      case 'jump': this.tone('sine', 280, 620, 0.16, 0.15); break;
      case 'jet': this.noise(0.3, 0.18, 2200); this.tone('sawtooth', 120, 260, 0.25, 0.05); break;
      case 'hurt': this.tone('sawtooth', 300, 60, 0.35, 0.18); this.noise(0.2, 0.15, 800); break;
      case 'bolt': this.tone('triangle', 1600, 2200, 0.07, 0.08); break;
      case 'heal': [523, 784].forEach((f, i) => this.tone('sine', f, f, 0.15, 0.12, i * 0.08)); break;
      case 'power': [392, 523, 659, 784, 1047].forEach((f, i) => this.tone('square', f, f, 0.1, 0.05, i * 0.05)); break;
      case 'rescue': [523, 659, 784, 1047].forEach((f, i) => this.tone('sine', f, f * 1.01, 0.22, 0.14, i * 0.09)); this.tone('sine', 200, 1600, 1.2, 0.05); break;
      case 'boom': this.noise(0.6, 0.4, 600); this.tone('sine', 120, 30, 0.5, 0.25); break;
      case 'bigboom': this.noise(1.5, 0.5, 400); this.tone('sine', 90, 20, 1.4, 0.35); break;
      case 'hit': this.tone('square', 220, 110, 0.08, 0.08); break;
      case 'launch': this.noise(3.2, 0.35, 900); this.tone('sawtooth', 60, 400, 3.2, 0.08); break;
      case 'ready': [392, 494, 587, 784].forEach((f, i) => this.tone('triangle', f, f, 0.25, 0.1, i * 0.14)); break;
      case 'select': this.tone('sine', 660, 990, 0.08, 0.1); break;
      case 'land': this.noise(3.0, 0.3, 700); this.tone('sawtooth', 220, 70, 3.0, 0.05); break;
      case 'thud': this.noise(0.5, 0.45, 300); this.tone('sine', 90, 35, 0.4, 0.3); break;
      case 'hatch': this.tone('square', 90, 140, 0.5, 0.04); this.noise(0.5, 0.08, 1800); this.tone('triangle', 660, 660, 0.06, 0.06, 0.5); break;
      case 'die': this.tone('sawtooth', 600, 40, 1.0, 0.2); this.noise(0.8, 0.3, 700); break;
    }
  },
  setSong(cfg) {
    const r = seeded(cfg.seed * 977 + 5);
    const sc = SCALES[cfg.scale] || SCALES.minor;
    this.root = cfg.root; this.melody = []; let idx = 3;
    for (let i = 0; i < 32; i++) {
      if (r() < 0.22) { this.melody.push(null); continue; }
      idx = clamp(idx + Math.round((r() - 0.5) * 4), 0, sc.length - 1);
      this.melody.push(sc[idx]);
    }
    this.bass = [0, 0, 7, 5, 0, 0, 3, 7].map((s) => s - 12);
    this.beat = 0; this.beatT = 0;
  },
  update(dt, active) {
    if (!this.ctx || !this.theremin) return;
    const t = this.ctx.currentTime;
    if (!active || this.muted || !this.melody.length) { this.thereminGain.gain.setTargetAtTime(0, t, 0.2); return; }
    this.beatT -= dt;
    if (this.beatT <= 0) {
      this.beatT += 0.42;
      const n = this.melody[this.beat % this.melody.length];
      if (n === null) this.thereminGain.gain.setTargetAtTime(0.02, t, 0.12);
      else {
        const f = this.root * Math.pow(2, n / 12);
        this.theremin.forEach((o) => o.frequency.setTargetAtTime(f, t, 0.07));
        this.thereminGain.gain.setTargetAtTime(0.08, t, 0.08);
      }
      if (this.beat % 2 === 0) {
        const b = this.bass[(this.beat / 2) % this.bass.length];
        const f = this.root * Math.pow(2, b / 12) / 2;
        const o = this.ctx.createOscillator(); o.type = 'triangle'; o.frequency.value = f;
        const g = this.ctx.createGain(); g.gain.setValueAtTime(0.12, t); g.gain.exponentialRampToValueAtTime(0.001, t + 0.38);
        o.connect(g); g.connect(this.music); o.start(t); o.stop(t + 0.4);
      }
      this.beat++;
    }
  },
};

/* =========================================================================
   Renderer & scene
   ========================================================================= */
const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.outputColorSpace = THREE.SRGBColorSpace;
$('game').appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1200);

// A simple studio environment so chrome looks like chrome.
(function buildEnv() {
  const envScene = new THREE.Scene();
  const geo = new THREE.SphereGeometry(10, 32, 16);
  const cols = []; const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i) / 10;
    const c = new THREE.Color().lerpColors(new THREE.Color(0x2a2a30), new THREE.Color(0xe8f0ff), smooth(-0.3, 0.6, y));
    cols.push(c.r, c.g, c.b);
  }
  geo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
  envScene.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide })));
  const lightMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  [[6, 6, 3], [-6, 4, -4], [0, 8, -6]].forEach(([x, y, z]) => { const b = new THREE.Mesh(new THREE.BoxGeometry(3, 1, 3), lightMat); b.position.set(x, y, z); b.lookAt(0, 0, 0); envScene.add(b); });
  const pm = new THREE.PMREMGenerator(renderer);
  scene.environment = pm.fromScene(envScene, 0.02).texture;
})();

const hemi = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0);
scene.add(hemi);
const sun = new THREE.DirectionalLight(0xffffff, 2.5);
sun.castShadow = true;
sun.shadow.mapSize.set(2048, 2048);
Object.assign(sun.shadow.camera, { left: -40, right: 40, top: 40, bottom: -40, near: 1, far: 200 });
sun.shadow.bias = -0.0006;
sun.shadow.normalBias = 0.02;
scene.add(sun); scene.add(sun.target);
const SUN_DIR = new THREE.Vector3(0.5, 0.8, 0.3).normalize();

/* =========================================================================
   Model builders
   ========================================================================= */
const std = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.5, metalness: 0.1, ...o });
const glowMat = (color) => new THREE.MeshBasicMaterial({ color });
function M(geo, mat, x = 0, y = 0, z = 0) { const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.castShadow = true; return m; }

function buildArti() {
  const g = new THREE.Group();
  const chrome = std(0xd9dee8, { metalness: 0.95, roughness: 0.22 });
  const red = std(0xe2402f, { metalness: 0.35, roughness: 0.35 });
  const dark = std(0x262b36, { metalness: 0.6, roughness: 0.45 });
  const glass = new THREE.MeshPhysicalMaterial({ color: 0xbff0ff, roughness: 0.05, metalness: 0, transparent: true, opacity: 0.32, clearcoat: 1 });
  const body = new THREE.Group(); g.add(body);

  const torso = M(new THREE.SphereGeometry(0.6, 28, 18), chrome, 0, 1.05, 0); torso.scale.set(1, 1.05, 0.85); body.add(torso);
  const belt = M(new THREE.TorusGeometry(0.58, 0.07, 8, 28), red, 0, 0.92, 0); belt.rotation.x = Math.PI / 2; belt.scale.set(1, 0.86, 1); body.add(belt);
  const panel = M(new THREE.BoxGeometry(0.44, 0.28, 0.06), dark, 0, 1.18, 0.5); body.add(panel);
  const lights = [0xff4040, 0xffd23f, 0x4fd1c5].map((c, i) => { const l = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), glowMat(c)); l.position.set(-0.12 + i * 0.12, 1.18, 0.54); body.add(l); return l; });
  body.add(M(new THREE.CylinderGeometry(0.12, 0.16, 0.22, 12), dark, 0, 1.68, 0));
  const head = new THREE.Group(); head.position.y = 1.86; body.add(head);
  head.add(M(new THREE.CylinderGeometry(0.44, 0.4, 0.22, 24), red, 0, 0, 0));
  const eyeMat = glowMat(0x8ff8ff);
  [-0.16, 0.16].forEach((x) => { const e = new THREE.Mesh(new THREE.SphereGeometry(0.075, 10, 8), eyeMat); e.position.set(x, 0.0, 0.39); head.add(e); });
  const brain = new THREE.Mesh(new THREE.IcosahedronGeometry(0.22, 1), std(0xff8fc8, { emissive: 0xff4fa0, emissiveIntensity: 0.6, roughness: 0.6 }));
  brain.position.y = 0.26; brain.scale.set(1, 0.8, 1); head.add(brain);
  const dome = new THREE.Mesh(new THREE.SphereGeometry(0.43, 28, 14, 0, Math.PI * 2, 0, Math.PI / 2), glass); dome.position.y = 0.1; head.add(dome);
  head.add(M(new THREE.CylinderGeometry(0.02, 0.02, 0.36, 6), chrome, 0.18, 0.62, 0));
  const bulb = new THREE.Mesh(new THREE.SphereGeometry(0.08, 10, 8), glowMat(0xff3b30)); bulb.position.set(0.18, 0.84, 0); head.add(bulb);

  const mkArm = (side) => {
    const a = new THREE.Group(); a.position.set(side * 0.64, 1.32, 0);
    a.add(M(new THREE.SphereGeometry(0.12, 10, 8), red, 0, 0, 0));
    const seg = M(new THREE.CylinderGeometry(0.06, 0.06, 0.5, 8), chrome, 0, -0.28, 0); a.add(seg);
    const claw = M(new THREE.TorusGeometry(0.1, 0.035, 6, 12, Math.PI * 1.4), dark, 0, -0.6, 0); claw.rotation.z = Math.PI * 0.8; a.add(claw);
    body.add(a); return a;
  };
  const mkLeg = (side) => {
    const l = new THREE.Group(); l.position.set(side * 0.26, 0.56, 0);
    l.add(M(new THREE.CylinderGeometry(0.07, 0.07, 0.38, 8), dark, 0, -0.2, 0));
    const boot = M(new THREE.CylinderGeometry(0.15, 0.2, 0.22, 12), red, 0, -0.44, 0.03); l.add(boot);
    const flame = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.6, 10), new THREE.MeshBasicMaterial({ color: 0xffa020, transparent: true, opacity: 0.85 }));
    flame.position.y = -0.82; flame.rotation.x = Math.PI; flame.visible = false; l.add(flame);
    body.add(l); return { l, flame };
  };
  const armL = mkArm(-1), armR = mkArm(1); const legL = mkLeg(-1), legR = mkLeg(1);
  g.traverse((o) => { if (o.isMesh) o.castShadow = true; });
  return { group: g, body, head, armL, armR, legL: legL.l, legR: legR.l, flames: [legL.flame, legR.flame], bulb, lights, brain, mats: [chrome, red] };
}

const HATCH = { hingeY: 1.6, hingeZ: 0.95, len: 2.6, closed: -Math.PI / 2, open: Math.asin(1.4 / 2.6) };
function buildRocket() {
  const g = new THREE.Group();
  const cream = std(0xf4e9cf, { metalness: 0.3, roughness: 0.35 });
  const red = std(0xe2402f, { metalness: 0.3, roughness: 0.35 });
  const pts = [];
  for (let i = 0; i <= 20; i++) { const t = i / 20; const y = t * 8; const r = 1.25 * Math.pow(Math.sin(Math.min(1, (t + 0.06)) * Math.PI * 0.95), 0.7) * (1 - t * 0.25); pts.push(new THREE.Vector2(Math.max(0.02, r), y)); }
  const hull = M(new THREE.LatheGeometry(pts, 28), cream, 0, 0.9, 0); g.add(hull);
  const nose = M(new THREE.ConeGeometry(0.42, 1.2, 20), red, 0, 9.3, 0); g.add(nose);
  for (let i = 0; i < 3; i++) {
    const fin = M(new THREE.BoxGeometry(0.14, 2.6, 1.6), red, 0, 0, 0);
    const piv = new THREE.Group(); piv.rotation.y = (i / 3) * Math.PI * 2 + Math.PI / 3; fin.position.set(0, 1.8, 1.25); fin.rotation.x = -0.25; piv.add(fin); g.add(piv);
  }
  const port = M(new THREE.TorusGeometry(0.42, 0.08, 8, 20), red, 0, 5.4, 1.08); port.rotation.x = -0.12; g.add(port);
  const glass = new THREE.Mesh(new THREE.CircleGeometry(0.4, 20), std(0x7fe8ff, { emissive: 0x2fa8c0, emissiveIntensity: 0.6, metalness: 0.2, roughness: 0.1 }));
  glass.position.set(0, 5.4, 1.1); glass.rotation.x = -0.12; g.add(glass);
  g.add(M(new THREE.CylinderGeometry(0.7, 0.9, 0.6, 20), std(0x333844, { metalness: 0.8, roughness: 0.4 }), 0, 0.75, 0));
  // airlock: a little housing on the hull with a drawbridge hatch that folds down into a ramp
  g.add(M(new THREE.BoxGeometry(1.6, 2.9, 0.8), cream, 0, 2.95, 0.5));
  const doorway = new THREE.Mesh(new THREE.PlaneGeometry(1.2, 2.6), new THREE.MeshBasicMaterial({ color: 0x4a3418 }));
  doorway.position.set(0, 2.9, 0.905); g.add(doorway);
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), glowMat(0xffd27a)); lamp.position.set(0, 4.0, 0.6); g.add(lamp);
  const hatch = new THREE.Group(); hatch.position.set(0, HATCH.hingeY, HATCH.hingeZ); g.add(hatch);
  const plate = M(new THREE.BoxGeometry(1.24, 0.1, HATCH.len), red, 0, 0, HATCH.len / 2); hatch.add(plate);
  for (let k = 0; k < 5; k++) hatch.add(M(new THREE.BoxGeometry(1.0, 0.05, 0.1), cream, 0, 0.07, 0.35 + k * 0.48));
  const hatchRivets = M(new THREE.TorusGeometry(0.28, 0.05, 6, 16), cream, 0, -0.07, HATCH.len * 0.62); hatchRivets.rotation.x = Math.PI / 2; hatch.add(hatchRivets);
  hatch.rotation.x = HATCH.closed;
  const pad = new THREE.Mesh(new THREE.CylinderGeometry(3.6, 3.9, 0.4, 32), std(0x55606e, { metalness: 0.5, roughness: 0.6 }));
  pad.position.y = 0.0; pad.receiveShadow = true; g.add(pad);
  const ringMat = glowMat(0xffd23f);
  const padRing = new THREE.Mesh(new THREE.TorusGeometry(3.3, 0.06, 6, 40), ringMat); padRing.rotation.x = Math.PI / 2; padRing.position.y = 0.22; g.add(padRing);
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(1.6, 2.6, 60, 24, 1, true), new THREE.MeshBasicMaterial({ color: 0xffd23f, transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false, fog: false }));
  beam.position.y = 30; beam.visible = false; g.add(beam);
  const flame = new THREE.Mesh(new THREE.ConeGeometry(0.8, 3, 16), new THREE.MeshBasicMaterial({ color: 0xffa020, transparent: true, opacity: 0.9 }));
  flame.rotation.x = Math.PI; flame.position.y = -1; flame.visible = false; g.add(flame);
  return { group: g, beam, flame, ringMat, hatch };
}

function buildFolk(suitColor) {
  const g = new THREE.Group();
  const suit = std(suitColor, { roughness: 0.6 });
  const skin = std(pick([0xf2c6a0, 0xd8a070, 0x8a5a3a, 0xffd8b8, 0x6a4028]), { roughness: 0.7 });
  const glass = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.05, transparent: true, opacity: 0.25, clearcoat: 1 });
  g.add(M(new THREE.CylinderGeometry(0.22, 0.26, 0.6, 12), suit, 0, 0.55, 0));
  g.add(M(new THREE.CylinderGeometry(0.08, 0.08, 0.3, 6), suit, -0.1, 0.15, 0));
  g.add(M(new THREE.CylinderGeometry(0.08, 0.08, 0.3, 6), suit, 0.1, 0.15, 0));
  const head = M(new THREE.SphereGeometry(0.2, 14, 10), skin, 0, 1.05, 0); g.add(head);
  const hair = M(new THREE.SphereGeometry(0.21, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2.4), std(pick([0x2a1a10, 0xd8b040, 0x8a3010, 0x101010, 0xc0c0c0])), 0, 1.07, -0.02); g.add(hair);
  [-0.07, 0.07].forEach((x) => g.add(M(new THREE.SphereGeometry(0.03, 6, 4), glowMat(0x111111), x, 1.08, 0.18)));
  g.add(new THREE.Mesh(new THREE.SphereGeometry(0.33, 18, 12), glass).translateY(1.06));
  const armL = new THREE.Group(); armL.position.set(-0.28, 0.78, 0); armL.add(M(new THREE.CylinderGeometry(0.06, 0.06, 0.4, 6), suit, 0, -0.18, 0)); g.add(armL);
  const armR = new THREE.Group(); armR.position.set(0.28, 0.78, 0); armR.add(M(new THREE.CylinderGeometry(0.06, 0.06, 0.4, 6), suit, 0, -0.18, 0)); g.add(armR);
  const marker = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.45, 4), new THREE.MeshBasicMaterial({ color: 0xffd23f, fog: false }));
  marker.rotation.x = Math.PI; marker.position.y = 2.0; g.add(marker);
  return { group: g, armL, armR, marker };
}

const EYE_WHITE = glowMat(0xffffff), EYE_BLACK = glowMat(0x111111);
function eye(r) { const e = new THREE.Group(); e.add(new THREE.Mesh(new THREE.SphereGeometry(r, 10, 8), EYE_WHITE)); const p = new THREE.Mesh(new THREE.SphereGeometry(r * 0.5, 8, 6), EYE_BLACK); p.position.z = r * 0.7; e.add(p); return e; }

function buildGloob(color) {
  const g = new THREE.Group();
  const mat = std(color, { roughness: 0.15, metalness: 0.0, emissive: color, emissiveIntensity: 0.25, transparent: true, opacity: 0.9 });
  const blob = M(new THREE.SphereGeometry(0.9, 20, 14), mat, 0, 0, 0); g.add(blob);
  const e1 = eye(0.2); e1.position.set(-0.3, 0.3, 0.72); const e2 = eye(0.26); e2.position.set(0.28, 0.36, 0.7); blob.add(e1, e2);
  const mouth = new THREE.Mesh(new THREE.TorusGeometry(0.2, 0.05, 6, 12, Math.PI), EYE_BLACK); mouth.position.set(0, -0.1, 0.84); mouth.rotation.z = Math.PI; blob.add(mouth);
  return { group: g, blob, mats: [mat] };
}

function buildSaucer(scale = 1, accent = 0x7dff6a) {
  const g = new THREE.Group();
  const hullMat = std(0xb8c0cc, { metalness: 0.9, roughness: 0.25 });
  const hull = M(new THREE.SphereGeometry(1.3, 28, 12), hullMat); hull.scale.set(1, 0.26, 1); g.add(hull);
  const rim = M(new THREE.TorusGeometry(1.3, 0.08, 6, 32), std(0x555c68, { metalness: 0.8, roughness: 0.3 })); rim.rotation.x = Math.PI / 2; g.add(rim);
  const domeMat = new THREE.MeshPhysicalMaterial({ color: accent, roughness: 0.05, transparent: true, opacity: 0.55, emissive: accent, emissiveIntensity: 0.3 });
  const dome = new THREE.Mesh(new THREE.SphereGeometry(0.55, 18, 10, 0, Math.PI * 2, 0, Math.PI / 2), domeMat); dome.position.y = 0.2; g.add(dome);
  const pilot = new THREE.Mesh(new THREE.SphereGeometry(0.25, 10, 8), std(0x6ae04a, { emissive: 0x2a8a1a, emissiveIntensity: 0.4 })); pilot.position.y = 0.32; g.add(pilot);
  const pe = eye(0.09); pe.position.set(0, 0.38, 0.2); g.add(pe);
  const lights = [];
  for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2; const l = new THREE.Mesh(new THREE.SphereGeometry(0.08, 6, 4), glowMat(i % 2 ? 0xffd23f : 0xff4040)); l.position.set(Math.cos(a) * 1.15, -0.05, Math.sin(a) * 1.15); g.add(l); lights.push(l); }
  const under = new THREE.Mesh(new THREE.CircleGeometry(0.5, 16), glowMat(accent)); under.rotation.x = Math.PI / 2; under.position.y = -0.3; g.add(under);
  g.scale.setScalar(scale);
  return { group: g, lights, mats: [hullMat] };
}

function buildTripod(color) {
  const g = new THREE.Group();
  const bodyMat = std(color, { metalness: 0.7, roughness: 0.35 });
  const head = M(new THREE.SphereGeometry(0.85, 20, 14), bodyMat); head.scale.set(1, 0.7, 1); g.add(head);
  const cap = M(new THREE.ConeGeometry(0.9, 0.5, 20), bodyMat, 0, 0.6, 0); g.add(cap);
  const lens = new THREE.Mesh(new THREE.SphereGeometry(0.3, 12, 10), glowMat(0xff3030)); lens.position.set(0, 0, 0.72); g.add(lens);
  const legMat = std(0x30343c, { metalness: 0.7, roughness: 0.4 });
  const legs = [];
  for (let i = 0; i < 3; i++) {
    const piv = new THREE.Group(); piv.rotation.y = (i / 3) * Math.PI * 2;
    const hip = new THREE.Group(); hip.position.set(0, -0.3, 0.5); piv.add(hip);
    const leg = M(new THREE.CylinderGeometry(0.07, 0.04, 2.8, 6), legMat, 0, -1.3, 0.35); leg.rotation.x = -0.25; hip.add(leg);
    g.add(piv); legs.push(hip);
  }
  return { group: g, legs, lens, mats: [bodyMat] };
}

function buildPickup(kind) {
  const g = new THREE.Group();
  if (kind === 'bolt') {
    const m = M(new THREE.CylinderGeometry(0.28, 0.28, 0.16, 6), std(0xffd23f, { metalness: 0.9, roughness: 0.25, emissive: 0x6a4a00, emissiveIntensity: 0.4 }));
    m.rotation.x = Math.PI / 2; g.add(m);
    const hole = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.18, 10), glowMat(0x3a2a00)); hole.rotation.x = Math.PI / 2; g.add(hole);
  } else if (kind === 'oil') {
    g.add(M(new THREE.CylinderGeometry(0.3, 0.3, 0.55, 14), std(0xe2402f, { metalness: 0.6, roughness: 0.3 })));
    g.add(M(new THREE.CylinderGeometry(0.31, 0.31, 0.1, 14), std(0xf4e9cf, { metalness: 0.6, roughness: 0.3 }), 0, 0.05, 0));
    const spout = M(new THREE.CylinderGeometry(0.04, 0.07, 0.45, 8), std(0xd0d4dc, { metalness: 0.9, roughness: 0.2 }), 0.15, 0.42, 0); spout.rotation.z = -0.6; g.add(spout);
  } else if (kind === 'atom') {
    g.add(new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), glowMat(0xff4fa0)));
    for (let i = 0; i < 3; i++) { const r = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.03, 6, 28), glowMat(0x7ff6ff)); r.rotation.set(i * 1.05, i * 0.7, 0); g.add(r); }
  }
  return g;
}

/* =========================================================================
   Terrain
   ========================================================================= */
const SIZE = 260, SEG = 130, STEP = SIZE / SEG, HALF = SIZE / 2, BOUND = 112;

function heightFn(P) {
  const craters = [];
  if (P.style === 'craters') { const r = seeded(P.seed); for (let i = 0; i < 18; i++) { const a = r() * Math.PI * 2, d = 25 + r() * 80; craters.push({ x: Math.cos(a) * d, z: Math.sin(a) * d, r: 6 + r() * 12, depth: 3 + r() * 5 }); } }
  const padH = P.hazard ? P.hazard.level + 2.2 : 1;
  return (x, z) => {
    const n = fbm(x * P.scale, z * P.scale, P.seed);
    let h = (n - 0.5) * P.amp * 2.4;
    switch (P.style) {
      case 'mesas': { const s = 4.5; const k = h / s; const f = k - Math.floor(k); h = (Math.floor(k) + smooth(0.4, 0.6, f)) * s; break; }
      case 'dunes': h += Math.sin(x * 0.12 + n * 9) * 1.6 + Math.sin(z * 0.07) * 1.0; break;
      case 'ridged': { const rn = 1 - Math.abs(fbm(x * P.scale * 0.8, z * P.scale * 0.8, P.seed + 5, 4) * 2 - 1); h = h * 0.6 + (rn - 0.6) * P.amp * 1.4; break; }
      case 'craters':
        for (const c of craters) { const d = Math.hypot(x - c.x, z - c.z); if (d < c.r * 1.4) { const t = d / c.r; h += t < 1 ? -c.depth * (1 - t * t) : c.depth * 0.5 * (1 - (t - 1) / 0.4) * (t - 1) / 0.4 * 4 * 0.35; } }
        break;
      case 'bands': h += Math.sin(z * 0.05 + n * 3) * 2; break;
    }
    const d = Math.hypot(x, z);
    const t = smooth(9, 22, d);
    h = h * t + padH * (1 - t);
    h += smooth(BOUND - 8, HALF, d) * 26;
    return h;
  };
}

function heartInside(x, z) {
  // classic heart curve, centred off to one side of the pad
  const s = 32; const X = (x - 34) / s, Y = -(z + 28) / s + 0.25;
  const a = X * X + Y * Y - 1; return a * a * a - X * X * Y * Y * Y < 0;
}

function buildTerrain(P) {
  const hf = heightFn(P);
  const geo = new THREE.PlaneGeometry(SIZE, SIZE, SEG, SEG);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const grid = new Float32Array((SEG + 1) * (SEG + 1));
  let minH = Infinity, maxH = -Infinity;
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const h = hf(x, z); pos.setY(i, h);
    const ix = Math.round((x + HALF) / STEP), iz = Math.round((z + HALF) / STEP);
    grid[iz * (SEG + 1) + ix] = h;
    if (Math.hypot(x, z) < BOUND) { minH = Math.min(minH, h); maxH = Math.max(maxH, h); }
  }
  const c0 = new THREE.Color(P.ground[0]), c1 = new THREE.Color(P.ground[1]), c2 = new THREE.Color(P.ground[2]);
  const cols = new Float32Array(pos.count * 3); const c = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
    let t = (y - minH) / (maxH - minH + 0.001);
    const j = (hash(Math.round(x * 3), Math.round(z * 3), P.seed) - 0.5) * 0.12;
    if (P.style === 'bands') t = 0.5 + 0.5 * Math.sin(z * 0.09 + fbm(x * 0.02, z * 0.02, P.seed + 9, 3) * 6);
    t = clamp(t + j, 0, 1);
    if (t < 0.5) c.lerpColors(c0, c1, t * 2); else c.lerpColors(c1, c2, (t - 0.5) * 2);
    if (P.heart && heartInside(x, z)) c.lerp(new THREE.Color(0xfff2e8), 0.75);
    if (Math.hypot(x, z) < 6.5) c.lerp(new THREE.Color(0x707680), 0.5);
    cols[i * 3] = c.r; cols[i * 3 + 1] = c.g; cols[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  const nonIndexed = geo.toNonIndexed(); nonIndexed.computeVertexNormals();
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: P.slippery ? 0.25 : 0.9, metalness: P.slippery ? 0.2 : 0, envMapIntensity: 0.35 });
  const mesh = new THREE.Mesh(nonIndexed, mat); mesh.receiveShadow = true;
  geo.dispose();
  return { mesh, grid, minH, maxH };
}

/* =========================================================================
   Game state
   ========================================================================= */
let state = 'title'; // title | map | playing | paused | launching | dead | result
let L = null;        // current level
let mapSel = Math.max(0, Math.min(save.unlocked - 1, PLANETS.length - 1));
const isTouch = matchMedia('(pointer: coarse)').matches;
if (isTouch) document.body.classList.add('touch');

const art = buildArti();
scene.add(art.group); art.group.visible = false;
const player = {
  pos: new THREE.Vector3(), vel: new THREE.Vector3(), facing: 0, onGround: false, jumps: 0,
  hp: 6, maxHp: 6, lives: 3, inv: 0, shootCd: 0, triple: 0, walkT: 0, jetT: 0, deadT: 0,
};
const cam = { yaw: 0, pitch: 0.32, dist: 10, shake: 0, pos: new THREE.Vector3() };

function H(x, z) {
  if (!L) return 0;
  const g = L.grid; const fx = (x + HALF) / STEP, fz = (z + HALF) / STEP;
  const ix = clamp(Math.floor(fx), 0, SEG - 1), iz = clamp(Math.floor(fz), 0, SEG - 1);
  const tx = clamp(fx - ix, 0, 1), tz = clamp(fz - iz, 0, 1); const r = SEG + 1;
  const a = g[iz * r + ix], b = g[iz * r + ix + 1], c = g[(iz + 1) * r + ix], d = g[(iz + 1) * r + ix + 1];
  // match the triangle split used by PlaneGeometry (diagonal from (ix,iz+1) to (ix+1,iz))
  if (tx + tz <= 1) return a + (b - a) * tx + (c - a) * tz;
  return d + (c - d) * (1 - tx) + (b - d) * (1 - tz);
}
function floorH(x, z) {
  const h = H(x, z);
  const hz = L && L.P.hazard;
  if (hz && !hz.harmful) return Math.max(h, hz.level - 0.75);
  return h;
}
const hazardAt = (x, z, margin = 0.3) => { const hz = L && L.P.hazard; return hz && hz.harmful && H(x, z) < hz.level + margin; };

function randomSpot(minD, maxD, aboveHazard = 1.2) {
  for (let tries = 0; tries < 300; tries++) {
    const a = Math.random() * Math.PI * 2, d = rand(minD, maxD);
    const x = Math.cos(a) * d, z = Math.sin(a) * d;
    const h = H(x, z);
    if (L.P.hazard && h < L.P.hazard.level + aboveHazard) continue;
    // avoid steep cliff faces
    if (Math.abs(H(x + 1.5, z) - h) > 2.5 || Math.abs(H(x, z + 1.5) - h) > 2.5) continue;
    return new THREE.Vector3(x, h, z);
  }
  return new THREE.Vector3(rand(-8, 8), H(0, 0), rand(-8, 8));
}

function disposeTree(obj) {
  obj.traverse((o) => {
    if (o.geometry) o.geometry.dispose();
    if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m) => m.dispose());
  });
}

/* =========================================================================
   Level construction
   ========================================================================= */
function loadLevel(i) {
  unloadLevel();
  const P = PLANETS[i];
  L = {
    i, P, world: new THREE.Group(), grid: null, enemies: [], folks: [], pickups: [], shots: [], parts: [], colliders: [], skyObjs: [],
    saved: 0, total: P.folks, bolts: 0, kills: 0, score: 0, time: 0, boss: null, bossSpawned: false, ready: false,
    rocket: null, wind: new THREE.Vector3(), gustT: 0, hazardMesh: null, decorAnim: [],
  };
  scene.add(L.world);

  scene.background = new THREE.Color(P.sky);
  scene.fog = new THREE.Fog(P.fog, P.fogNear, P.fogFar);
  hemi.color.set(P.hemiSky); hemi.groundColor.set(P.hemiGround); hemi.intensity = 1.1;
  sun.color.set(P.sunColor); sun.intensity = P.sunI;

  const T = buildTerrain(P); L.grid = T.grid; L.world.add(T.mesh);

  if (P.hazard) {
    const hz = P.hazard;
    const hm = new THREE.Mesh(new THREE.PlaneGeometry(SIZE, SIZE, 1, 1), new THREE.MeshStandardMaterial({
      color: hz.color, emissive: hz.harmful ? hz.color : 0x000000, emissiveIntensity: hz.harmful ? 0.7 : 0,
      transparent: true, opacity: hz.harmful ? 0.92 : 0.72, roughness: 0.15, metalness: 0.1,
    }));
    hm.rotation.x = -Math.PI / 2; hm.position.y = hz.level; hm.receiveShadow = true; L.world.add(hm); L.hazardMesh = hm;
  }

  buildSky(P);
  buildDecor(P);

  const r = buildRocket(); L.rocket = r; r.restY = H(0, 0) + 0.2; r.group.position.set(0, r.restY, 0); L.world.add(r.group);
  L.colliders.push({ x: 0, z: 0, r: 1.8 });

  const folkColors = [0xff8a3a, 0x3a9aff, 0xffd23f, 0xff5ab0, 0x7ad04a, 0xb07aff];
  for (let k = 0; k < P.folks; k++) {
    const p = randomSpot(25, BOUND - 12);
    const f = buildFolk(folkColors[k % folkColors.length]);
    f.group.position.copy(p); L.world.add(f.group);
    L.folks.push({ ...f, pos: p, home: p.clone(), t: rand(0, 10), wanderA: rand(0, 6.28), saved: false, beamT: 0, beam: null });
  }

  const enemyMul = 1 + i * 0.07;
  const E = P.enemies;
  const gloobColor = [0xff6a1a, 0x9cff3a, 0x6ad04a, 0xd04a8a, 0xb05ae0, 0xe0b030, 0x3ad8e0, 0x4a7aff, 0xc0a0ff][i];
  for (let k = 0; k < (E.gloob || 0); k++) spawnEnemy('gloob', randomSpot(18, BOUND - 6), enemyMul, gloobColor);
  for (let k = 0; k < (E.saucer || 0); k++) spawnEnemy('saucer', randomSpot(25, BOUND - 10, 0), enemyMul);
  for (let k = 0; k < (E.tripod || 0); k++) spawnEnemy('tripod', randomSpot(28, BOUND - 10), enemyMul, [0x8a96a8, 0xa86a3a][k % 2]);
  // guards near some folks
  L.folks.forEach((f, k) => {
    if (k % 2 !== 0) return;
    const gx = f.pos.x + rand(-6, 6), gz = f.pos.z + rand(-6, 6);
    if (!hazardAt(gx, gz, 0.5) && Math.hypot(gx, gz) < BOUND - 4) spawnEnemy('gloob', new THREE.Vector3(gx, 0, gz), enemyMul, gloobColor);
  });

  // pickups: lines of bolts, oil cans, atoms
  for (let k = 0; k < 9; k++) {
    const a = randomSpot(12, BOUND - 10); const dir = rand(0, Math.PI * 2);
    for (let b = 0; b < 5; b++) { const x = a.x + Math.cos(dir) * b * 2.2, z = a.z + Math.sin(dir) * b * 2.2; if (!hazardAt(x, z, 0.8) && Math.hypot(x, z) < BOUND) addPickup('bolt', x, z); }
  }
  for (let k = 0; k < 4; k++) { const p = randomSpot(20, BOUND - 10); addPickup('oil', p.x, p.z); }
  for (let k = 0; k < 2; k++) { const p = randomSpot(30, BOUND - 10); addPickup('atom', p.x, p.z); }

  // player
  player.hp = player.maxHp; player.lives = 3; player.triple = 0;
  respawnPlayer();
  art.group.visible = true;
  Sound.setSong(P.music);
  updateHUD(true);
  showBanner(`PLANET ${i + 1} OF ${PLANETS.length} · ${P.kind.toUpperCase()}`, P.name, P.tag);
}

function respawnPlayer() {
  player.pos.set(0, H(0, 6) + 0.1, 6.5); player.vel.set(0, 0, 0); player.facing = 0; player.inv = 2; player.jumps = 0;
  cam.yaw = 0; cam.pitch = 0.32;
  art.group.visible = true;
}

function unloadLevel() {
  if (!L) return;
  scene.remove(L.world); disposeTree(L.world);
  L.skyObjs.forEach((o) => { scene.remove(o); disposeTree(o); });
  $('floaters').innerHTML = '';
  L = null;
}

function buildSky(P) {
  const add = (o) => { scene.add(o); L.skyObjs.push(o); return o; };
  const skyGroup = add(new THREE.Group());
  if (P.sky3d.tilt) skyGroup.rotation.z = Math.PI / 2.2;
  if (P.stars) {
    const n = 1500; const arr = new Float32Array(n * 3);
    for (let k = 0; k < n; k++) { const v = new THREE.Vector3().randomDirection(); if (v.y < -0.1) v.y = -v.y; v.multiplyScalar(600); arr.set([v.x, v.y, v.z], k * 3); }
    const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.BufferAttribute(arr, 3));
    skyGroup.add(new THREE.Points(g, new THREE.PointsMaterial({ color: 0xffffff, size: 1.6, sizeAttenuation: false, fog: false })));
  }
  const s3 = P.sky3d;
  const sunDisc = (size, col) => { const m = new THREE.Mesh(new THREE.SphereGeometry(size, 24, 16), new THREE.MeshBasicMaterial({ color: col, fog: false })); m.position.copy(SUN_DIR).multiplyScalar(650); return m; };
  if (s3.sun) skyGroup.add(sunDisc(s3.sun, 0xfff4b0));
  else skyGroup.add(sunDisc(s3.sunSmall ? 4 : 10, 0xfff8e0));
  if (s3.moon) { const m = new THREE.Mesh(new THREE.SphereGeometry(22, 24, 16), new THREE.MeshBasicMaterial({ color: 0xeeeeee, fog: false, transparent: true, opacity: 0.85 })); m.position.set(-300, 220, -420); skyGroup.add(m); }
  if (s3.moons) for (let k = 0; k < s3.moons; k++) {
    const m = new THREE.Mesh(new THREE.SphereGeometry(8 + k * 5, 20, 14), new THREE.MeshStandardMaterial({ color: [0xc0b0a0, 0xd8d0b8, 0xa08070, 0xe0c080][k % 4], fog: false, roughness: 1 }));
    const a = -1.2 + k * 0.7; m.position.set(Math.cos(a) * 500, 120 + k * 60, Math.sin(a) * 500); skyGroup.add(m);
  }
  if (s3.rings) {
    const ringGeo = new THREE.RingGeometry(380, 560, 96, 4);
    const pos = ringGeo.attributes.position; const cols = [];
    for (let k = 0; k < pos.count; k++) { const r = Math.hypot(pos.getX(k), pos.getY(k)); const b = 0.6 + 0.4 * Math.sin(r * 0.08); cols.push(1 * b, 0.9 * b, 0.7 * b); }
    ringGeo.setAttribute('color', new THREE.Float32BufferAttribute(cols, 3));
    const ring = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.DoubleSide, transparent: true, opacity: 0.55, fog: false, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2 + 0.28; ring.position.y = -60;
    skyGroup.add(ring);
  }
}

function buildDecor(P) {
  for (const [kind, count, color] of P.decor) {
    const mat = kind === 'crystal'
      ? std(color, { emissive: color, emissiveIntensity: 0.35, roughness: 0.15, metalness: 0.2, flatShading: true, transparent: true, opacity: 0.88 })
      : std(color, { flatShading: true, roughness: 0.85 });
    const r = seeded(P.seed * 31 + count);
    for (let k = 0; k < count; k++) {
      const a = r() * Math.PI * 2, d = 14 + r() * (BOUND - 10);
      const x = Math.cos(a) * d, z = Math.sin(a) * d; const h = H(x, z);
      if (P.hazard && P.hazard.harmful && h < P.hazard.level + 0.4 && kind !== 'cloud') continue;
      let o, col = 0;
      const s = 0.7 + r() * 1.4;
      switch (kind) {
        case 'rock': o = M(new THREE.DodecahedronGeometry(1, 0), mat); o.scale.set(s * (0.8 + r()), s * (0.5 + r() * 0.6), s * (0.8 + r())); o.position.set(x, h + s * 0.2, z); o.rotation.set(r() * 3, r() * 3, r() * 3); col = s * 0.9; break;
        case 'crystal': o = M(new THREE.OctahedronGeometry(0.6, 0), mat); o.scale.set(s * 0.6, s * 2.2, s * 0.6); o.position.set(x, h + s * 0.9, z); o.rotation.set((r() - 0.5) * 0.5, r() * 3, (r() - 0.5) * 0.5); col = s * 0.4; break;
        case 'obelisk': o = M(new THREE.CylinderGeometry(0.3 * s, 0.8 * s, 6 * s, 4), mat); o.position.set(x, h + 2.8 * s, z); o.rotation.y = r() * 3; col = 0.8 * s; break;
        case 'tree': {
          o = new THREE.Group();
          o.add(M(new THREE.CylinderGeometry(0.18 * s, 0.25 * s, 1.4 * s, 6), std(0x6a4a2a, { flatShading: true }), 0, 0.7 * s, 0));
          o.add(M(new THREE.ConeGeometry(1.2 * s, 2.6 * s, 7), mat, 0, 2.4 * s, 0));
          o.add(M(new THREE.ConeGeometry(0.9 * s, 2.0 * s, 7), mat, 0, 3.4 * s, 0));
          o.position.set(x, h, z); col = 0.45 * s; break;
        }
        case 'mushroom': {
          o = new THREE.Group();
          o.add(M(new THREE.CylinderGeometry(0.2 * s, 0.3 * s, 1.6 * s, 8), std(0xf4e9cf, { flatShading: true }), 0, 0.8 * s, 0));
          const capM = M(new THREE.SphereGeometry(1.1 * s, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat, 0, 1.5 * s, 0); o.add(capM);
          o.position.set(x, h, z); col = 0.4 * s; break;
        }
        case 'kelp': {
          o = new THREE.Group(); const segs = 5;
          for (let q = 0; q < segs; q++) o.add(M(new THREE.SphereGeometry(0.25 * s, 6, 5), mat, Math.sin(q) * 0.2, q * 0.55 * s, 0));
          o.position.set(x, h, z); L.decorAnim.push({ o, t: r() * 6 }); break;
        }
        case 'cloud': {
          o = new THREE.Group(); const cm = std(color, { roughness: 1, transparent: true, opacity: 0.85 });
          for (let q = 0; q < 5; q++) o.add(new THREE.Mesh(new THREE.SphereGeometry(1.5 + r() * 1.5, 10, 8), cm).translateX((q - 2) * 1.6).translateY(r()));
          o.position.set(x, Math.max(h, P.hazard ? P.hazard.level : 0) + 12 + r() * 8, z); o.scale.setScalar(s); L.decorAnim.push({ o, t: r() * 6, drift: true }); break;
        }
      }
      if (o) { o.traverse((m) => { if (m.isMesh) m.receiveShadow = true; }); L.world.add(o); if (col) L.colliders.push({ x, z, r: col }); }
    }
  }
}

function spawnEnemy(type, pos, mul = 1, color = 0x6ad04a) {
  let model, hp, r;
  if (type === 'gloob') { model = buildGloob(color); hp = 1; r = 1.1; }
  else if (type === 'saucer') { model = buildSaucer(1); hp = 2; r = 1.5; }
  else if (type === 'tripod') { model = buildTripod(color); hp = 4; r = 1.3; }
  else if (type === 'boss') { model = buildSaucer(5.5, 0xff4fa0); hp = 60; r = 6.5; }
  const e = { type, ...model, pos: pos.clone(), hp, maxHp: hp, r, mul, t: rand(0, 10), cd: rand(1, 3), wanderA: rand(0, 6.28), wanderT: 0, flash: 0, chasing: false, orbitA: rand(0, 6.28), spawnCd: 6 };
  e.pos.y = H(e.pos.x, e.pos.z) + 1;
  e.group.position.copy(e.pos);
  L.world.add(e.group); L.enemies.push(e);
  if (type === 'boss') L.boss = e;
  return e;
}

function addPickup(kind, x, z, y) {
  const g = buildPickup(kind);
  const base = y !== undefined ? y : floorH(x, z) + 0.9;
  g.position.set(x, base, z); L.world.add(g);
  L.pickups.push({ kind, group: g, base, t: rand(0, 6), vel: null });
}

/* =========================================================================
   Effects
   ========================================================================= */
const partGeo = new THREE.BoxGeometry(0.22, 0.22, 0.22);
const partMats = new Map();
const partMat = (c) => { if (!partMats.has(c)) partMats.set(c, new THREE.MeshBasicMaterial({ color: c, transparent: true })); return partMats.get(c); };
function burst(pos, color, n = 14, speed = 7, life = 0.8, up = 4) {
  if (!L) return;
  for (let k = 0; k < n && L.parts.length < 400; k++) {
    const m = new THREE.Mesh(partGeo, partMat(color)); m.position.copy(pos);
    const v = new THREE.Vector3().randomDirection().multiplyScalar(rand(0.3, 1) * speed); v.y += up;
    L.world.add(m); L.parts.push({ m, v, life, max: life });
  }
}
function floater(text, pos, color = '#ffd23f') {
  const el = document.createElement('div'); el.className = 'floater'; el.textContent = text; el.style.color = color;
  $('floaters').appendChild(el);
  if (L) L.floaters = (L.floaters || []).concat([{ el, pos: pos.clone(), t: 0 }]);
}
let msgTimer = 0;
function message(text, dur = 2.6) { const m = $('hud-msg'); m.textContent = text; m.classList.add('show'); msgTimer = dur; }
function showBanner(sub, title, tag) {
  const b = $('banner'); $('banner-sub').textContent = sub; $('banner-title').textContent = title; $('banner-tag').textContent = tag;
  b.hidden = true; void b.offsetWidth; b.hidden = false; b.style.animation = 'none'; void b.offsetWidth; b.style.animation = '';
  clearTimeout(showBanner._t); showBanner._t = setTimeout(() => { b.hidden = true; }, 4300);
}

/* =========================================================================
   Input
   ========================================================================= */
const keys = {};
const input = { jump: false, fire: false, joy: { x: 0, y: 0 }, camDX: 0, camDY: 0, mouseFire: false, touchFire: false };
addEventListener('keydown', (e) => {
  if (state === 'arriving' && arriveT > 0.4 && !e.repeat) { e.preventDefault(); finishArrival(); return; }
  if (e.repeat && (e.code === 'Space' || e.code === 'KeyD')) { e.preventDefault(); return; }
  keys[e.code] = true;
  if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) e.preventDefault();
  if (state === 'playing') {
    if (e.code === 'KeyD' || e.code === 'Space') input.jump = true;
    if (e.code === 'KeyP' || e.code === 'Escape') pauseGame();
  } else if (state === 'paused' && (e.code === 'KeyP' || e.code === 'Escape')) resumeGame();
  else if (state === 'map') mapKey(e);
  if (e.code === 'KeyM') { Sound.setMuted(!Sound.muted); if (state === 'playing') message(Sound.muted ? 'SOUND OFF' : 'SOUND ON', 1.2); }
});
addEventListener('keyup', (e) => { keys[e.code] = false; });
addEventListener('pointerdown', () => { if (state === 'arriving' && arriveT > 0.4) finishArrival(); });
addEventListener('blur', () => { for (const k in keys) keys[k] = false; input.mouseFire = false; if (state === 'playing') pauseGame(); });

const canvas = renderer.domElement;
let pointerLocked = false, dragging = false;
canvas.addEventListener('mousedown', (e) => {
  if (state !== 'playing') return;
  if (e.button === 0) input.mouseFire = true;
  dragging = true;
});
addEventListener('mouseup', () => { input.mouseFire = false; dragging = false; });
addEventListener('mousemove', (e) => {
  if (state !== 'playing') return;
  if (pointerLocked || dragging) { input.camDX += e.movementX; input.camDY += e.movementY; }
});
canvas.addEventListener('contextmenu', (e) => e.preventDefault());
document.addEventListener('pointerlockchange', () => {
  const was = pointerLocked; pointerLocked = document.pointerLockElement === canvas;
  if (was && !pointerLocked && state === 'playing') pauseGame();
});

// touch controls
(function touchControls() {
  if (!isTouch) return;
  const zone = $('stick-zone'), stick = $('stick'), knob = stick.querySelector('i');
  let stickId = null, origin = null, camId = null, camLast = null;
  zone.addEventListener('touchstart', (e) => {
    const t = e.changedTouches[0]; stickId = t.identifier;
    const r = stick.getBoundingClientRect(); origin = { x: r.left + r.width / 2, y: r.top + r.height / 2 };
    moveStick(t); e.preventDefault();
  }, { passive: false });
  const moveStick = (t) => {
    let dx = t.clientX - origin.x, dy = t.clientY - origin.y; const d = Math.hypot(dx, dy), max = 50;
    if (d > max) { dx *= max / d; dy *= max / d; }
    knob.style.transform = `translate(${dx}px, ${dy}px)`; input.joy.x = dx / max; input.joy.y = dy / max;
  };
  addEventListener('touchmove', (e) => {
    for (const t of e.changedTouches) {
      if (t.identifier === stickId) moveStick(t);
      else if (t.identifier === camId && camLast) { input.camDX += (t.clientX - camLast.x) * 1.6; input.camDY += (t.clientY - camLast.y) * 1.2; camLast = { x: t.clientX, y: t.clientY }; }
    }
  }, { passive: true });
  const end = (e) => {
    for (const t of e.changedTouches) {
      if (t.identifier === stickId) { stickId = null; input.joy.x = 0; input.joy.y = 0; knob.style.transform = ''; }
      if (t.identifier === camId) { camId = null; camLast = null; }
    }
  };
  addEventListener('touchend', end); addEventListener('touchcancel', end);
  canvas.addEventListener('touchstart', (e) => { const t = e.changedTouches[0]; if (camId === null) { camId = t.identifier; camLast = { x: t.clientX, y: t.clientY }; } }, { passive: true });
  const jb = $('t-jump'), zb = $('t-zap');
  jb.addEventListener('touchstart', (e) => { e.preventDefault(); if (state === 'playing') input.jump = true; }, { passive: false });
  zb.addEventListener('touchstart', (e) => { e.preventDefault(); input.touchFire = true; }, { passive: false });
  zb.addEventListener('touchend', () => { input.touchFire = false; });
  $('t-pause').addEventListener('click', () => { if (state === 'playing') pauseGame(); });
})();

/* =========================================================================
   Player update
   ========================================================================= */
const tmpV = new THREE.Vector3(), tmpV2 = new THREE.Vector3();
function updatePlayer(dt) {
  const P = L.P;
  const G = 32 * P.gravity;
  // camera control
  // automatic follow camera; a mouse drag or touch drag can nudge it and it recentres on its own
  if (input.camDX || input.camDY) cam.manualT = 1.5;
  cam.manualT = Math.max(0, (cam.manualT || 0) - dt);
  cam.yaw -= input.camDX * 0.0045; cam.pitch = clamp(cam.pitch + input.camDY * 0.003, 0.05, 1.1);
  input.camDX = 0; input.camDY = 0;

  // movement input relative to camera
  let ix = 0, iz = 0;
  if (keys.ArrowUp) iz -= 1;
  if (keys.ArrowDown) iz += 1;
  if (keys.ArrowLeft) ix -= 1;
  if (keys.ArrowRight) ix += 1;
  ix += input.joy.x; iz += input.joy.y;
  const il = Math.hypot(ix, iz); if (il > 1) { ix /= il; iz /= il; }
  // Directions are read relative to the camera as it was when this input started, so the camera can
  // swing around (e.g. after pressing Down to turn back) without bending Arti's path.
  const inAng = Math.atan2(ix, iz);
  if (il < 0.15) player.ctrlYaw = null;
  else if (player.ctrlYaw == null || Math.abs(Math.atan2(Math.sin(inAng - player.inAng), Math.cos(inAng - player.inAng))) > 0.4) { player.ctrlYaw = cam.yaw; player.inAng = inAng; }
  const cy = player.ctrlYaw ?? cam.yaw;
  const fwdX = -Math.sin(cy), fwdZ = -Math.cos(cy), rgtX = Math.cos(cy), rgtZ = -Math.sin(cy);
  const mx = rgtX * ix + fwdX * -iz, mz = rgtZ * ix + fwdZ * -iz;
  // swing in behind Arti while moving, including all the way around when he turns back toward the camera
  const hSpeed = Math.hypot(player.vel.x, player.vel.z);
  if (cam.manualT <= 0 && hSpeed > 1.5) {
    let d = (player.facing + Math.PI) - cam.yaw; d = Math.atan2(Math.sin(d), Math.cos(d));
    cam.yaw += d * (1 - Math.exp(-2.0 * Math.min(1, hSpeed / 8) * dt));
    cam.pitch = lerp(cam.pitch, 0.32, 1 - Math.exp(-0.8 * dt));
  }

  const floor = floorH(player.pos.x, player.pos.z);
  const inWater = P.hazard && !P.hazard.harmful && player.pos.y < P.hazard.level - 0.2;
  let speed = 9 * (inWater ? 0.55 : 1);
  if (P.gravity > 1.3) speed *= 0.9;
  const accel = player.onGround ? (P.slippery ? 1.6 : 14) : 4;
  player.vel.x = lerp(player.vel.x, mx * speed, 1 - Math.exp(-accel * dt));
  player.vel.z = lerp(player.vel.z, mz * speed, 1 - Math.exp(-accel * dt));
  if (Math.hypot(mx, mz) > 0.1) {
    const target = Math.atan2(mx, mz);
    let d = target - player.facing; d = Math.atan2(Math.sin(d), Math.cos(d));
    player.facing += d * (1 - Math.exp(-12 * dt));
  }

  // wind (Gustopia)
  if (P.wind) {
    L.gustT -= dt;
    if (L.gustT <= 0) { L.gustT = rand(3, 6); const a = rand(0, Math.PI * 2); L.windTarget = new THREE.Vector3(Math.cos(a), 0, Math.sin(a)).multiplyScalar(P.wind * rand(0.4, 1)); if (L.windTarget.length() > P.wind * 0.75) message('WHOOSH! A GUST!', 1.2); }
    if (L.windTarget) L.wind.lerp(L.windTarget, 1 - Math.exp(-1.2 * dt));
    player.pos.addScaledVector(L.wind, dt * (player.onGround ? 0.5 : 1));
  }

  // jumping & jets
  if (input.jump) {
    if (player.onGround) { player.vel.y = 13 * Math.sqrt(Math.max(0.7, P.gravity) * 0.9 + 0.1) * (P.gravity > 1.3 ? 0.85 : 1); player.onGround = false; player.jumps = 1; Sound.sfx('jump'); }
    else if (player.jumps < 2) { player.vel.y = 11 * Math.sqrt(Math.max(0.6, P.gravity)); player.jumps = 2; player.jetT = 0.5; Sound.sfx('jet'); burst(tmpV.copy(player.pos), 0xffa020, 10, 3, 0.4, -3); }
  }
  input.jump = false;
  player.jetT = Math.max(0, player.jetT - dt);
  player.vel.y -= G * dt;
  if (inWater) player.vel.y = Math.max(player.vel.y, -4);

  player.pos.x += player.vel.x * dt; player.pos.z += player.vel.z * dt; player.pos.y += player.vel.y * dt;

  // colliders
  for (const c of L.colliders) {
    const dx = player.pos.x - c.x, dz = player.pos.z - c.z; const d = Math.hypot(dx, dz); const min = c.r + 0.55;
    if (d < min && d > 0.001 && player.pos.y < H(c.x, c.z) + 6) { player.pos.x = c.x + dx / d * min; player.pos.z = c.z + dz / d * min; }
  }
  // bounds
  const pd = Math.hypot(player.pos.x, player.pos.z);
  if (pd > BOUND) { player.pos.x *= BOUND / pd; player.pos.z *= BOUND / pd; }

  // ground
  const g2 = floorH(player.pos.x, player.pos.z);
  if (player.pos.y <= g2) {
    // walking up steep slopes: just pop up (arcade)
    player.pos.y = g2; if (player.vel.y < 0) player.vel.y = 0;
    if (!player.onGround) player.jumps = 0;
    player.onGround = true;
  } else if (player.pos.y > g2 + 0.25) player.onGround = false;
  else if (player.vel.y <= 0) { player.pos.y = g2; player.onGround = true; player.jumps = 0; }

  // hazards
  if (P.hazard && P.hazard.harmful && player.pos.y < P.hazard.level + 0.15) {
    hurtPlayer(1, null, true);
    player.vel.y = 17 * Math.sqrt(Math.max(0.6, P.gravity));
    const back = tmpV.set(-player.pos.x, 0, -player.pos.z).normalize().multiplyScalar(6);
    player.vel.x = back.x; player.vel.z = back.z; player.onGround = false; player.jumps = 1;
    burst(tmpV2.copy(player.pos), P.hazard.color, 16, 6, 0.7, 5);
  }

  // shooting
  player.shootCd -= dt;
  const firing = keys.KeyS || keys.KeyF || keys.KeyJ || keys.KeyK || keys.Enter || input.mouseFire || input.touchFire;
  if (firing && player.shootCd <= 0) fire();
  player.triple = Math.max(0, player.triple - dt);
  player.inv = Math.max(0, player.inv - dt);

  // rocket
  if (L.ready && Math.hypot(player.pos.x, player.pos.z) < 4.2) startBoarding();

  animateArti(dt, Math.hypot(player.vel.x, player.vel.z));
  // camera shadow follow
  sun.position.copy(player.pos).addScaledVector(SUN_DIR, 80); sun.target.position.copy(player.pos);
}

function animateArti(dt, spd) {
  art.group.position.copy(player.pos);
  art.group.rotation.y = player.facing;
  player.walkT += dt * (player.onGround ? spd * 1.4 : 2);
  const sw = player.onGround ? Math.sin(player.walkT) * Math.min(1, spd / 6) : 0;
  art.legL.rotation.x = sw * 0.8; art.legR.rotation.x = -sw * 0.8;
  art.armL.rotation.x = -sw * 0.7; art.armR.rotation.x = sw * 0.7;
  if (!player.onGround) { art.armL.rotation.z = -0.6; art.armR.rotation.z = 0.6; } else { art.armL.rotation.z = lerp(art.armL.rotation.z, 0, 0.2); art.armR.rotation.z = lerp(art.armR.rotation.z, 0, 0.2); }
  art.body.position.y = player.onGround ? Math.abs(Math.sin(player.walkT)) * 0.08 * Math.min(1, spd / 4) : 0;
  const jet = player.jetT > 0 || (!player.onGround && player.jumps === 2 && player.vel.y > 0);
  art.flames.forEach((f) => { f.visible = jet; f.scale.y = 0.7 + Math.random() * 0.6; });
  const t = performance.now() / 1000;
  art.bulb.visible = Math.sin(t * 6) > -0.3;
  art.lights.forEach((l, k) => { l.visible = Math.sin(t * 5 + k * 2) > 0; });
  art.brain.rotation.y += dt * 0.8;
  art.group.visible = player.inv <= 0 || Math.floor(player.inv * 14) % 2 === 0;
}

function fire() {
  player.shootCd = 0.2;
  const origin = tmpV.copy(player.pos); origin.y += 1.2;
  origin.x += Math.sin(player.facing) * 0.7; origin.z += Math.cos(player.facing) * 0.7;
  // soft auto-aim
  let best = null, bestScore = Infinity;
  const fx = Math.sin(player.facing), fz = Math.cos(player.facing);
  for (const e of L.enemies) {
    const dx = e.pos.x - player.pos.x, dz = e.pos.z - player.pos.z; const d = Math.hypot(dx, dz);
    const range = e.type === 'boss' ? 55 : 32;
    if (d > range) continue;
    const dot = (dx * fx + dz * fz) / (d || 1);
    if (dot < 0.7) continue;
    const sc = d * (2 - dot); if (sc < bestScore) { bestScore = sc; best = e; }
  }
  const dir = new THREE.Vector3(fx, 0, fz);
  if (best) dir.copy(best.pos).sub(origin).normalize();
  const shots = player.triple > 0 ? [-0.18, 0, 0.18] : [0];
  for (const a of shots) {
    const d = dir.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), a);
    const m = new THREE.Mesh(new THREE.SphereGeometry(0.2, 8, 6), new THREE.MeshBasicMaterial({ color: player.triple > 0 ? 0xff4fa0 : 0x7ff6ff }));
    m.scale.set(1, 1, 2.4); m.position.copy(origin); m.lookAt(origin.clone().add(d));
    L.world.add(m); L.shots.push({ m, v: d.multiplyScalar(42), life: 1.1, from: 'player', dmg: 1 });
  }
  art.armR.rotation.x = -1.4;
  Sound.sfx('zap');
}

function enemyShot(from, target, speed = 15, color = 0x9cff3a, size = 0.32) {
  const d = target.clone().sub(from).normalize();
  const m = new THREE.Mesh(new THREE.SphereGeometry(size, 10, 8), new THREE.MeshBasicMaterial({ color }));
  m.position.copy(from); L.world.add(m);
  L.shots.push({ m, v: d.multiplyScalar(speed), life: 4, from: 'enemy', dmg: 1 });
}

function hurtPlayer(n, src, hazard = false) {
  if (player.inv > 0 || state !== 'playing') return;
  player.hp -= n; player.inv = 1.4; cam.shake = 0.4;
  Sound.sfx('hurt');
  if (src && !hazard) {
    const k = tmpV2.copy(player.pos).sub(src); k.y = 0; k.normalize().multiplyScalar(9);
    player.vel.x = k.x; player.vel.z = k.z; player.vel.y = 7; player.onGround = false;
  }
  if (hazard) message(`OUCH! HOT ${L.P.hazard.label.toUpperCase()}!`, 1.4);
  updateHUD();
  if (player.hp <= 0) killPlayer();
}

function killPlayer() {
  state = 'dead'; player.deadT = 2.2; player.lives--;
  Sound.sfx('die'); burst(tmpV.copy(player.pos).setY(player.pos.y + 1), 0xd9dee8, 30, 9, 1.2, 5); burst(tmpV, 0xe2402f, 20, 8, 1.2, 5);
  art.group.visible = false; cam.shake = 0.8;
  updateHUD();
  message(player.lives > 0 ? 'ARTI GOT SCRAMBLED! REBOOTING…' : 'OUT OF SPARE PARTS!', 2.2);
}

/* =========================================================================
   Enemies, folks, pickups, shots
   ========================================================================= */
function updateEnemies(dt) {
  const P = L.P;
  for (let k = L.enemies.length - 1; k >= 0; k--) {
    const e = L.enemies[k]; e.t += dt;
    const dx = player.pos.x - e.pos.x, dz = player.pos.z - e.pos.z; const dist = Math.hypot(dx, dz);
    const alive = state === 'playing';
    if (e.type === 'gloob') {
      e.chasing = alive && dist < 24;
      let ax, az;
      if (e.chasing) { ax = dx / (dist || 1); az = dz / (dist || 1); }
      else { e.wanderT -= dt; if (e.wanderT <= 0) { e.wanderA = rand(0, 6.28); e.wanderT = rand(2, 4); } ax = Math.cos(e.wanderA); az = Math.sin(e.wanderA); }
      const sp = (e.chasing ? 4.3 : 1.6) * e.mul;
      const nx = e.pos.x + ax * sp * dt, nz = e.pos.z + az * sp * dt;
      if (!hazardAt(nx, nz, 0.4) && Math.hypot(nx, nz) < BOUND - 2) { e.pos.x = nx; e.pos.z = nz; } else e.wanderA += Math.PI * 0.7;
      const hopSpeed = e.chasing ? 3.2 : 1.8;
      const hop = Math.abs(Math.sin(e.t * hopSpeed * Math.PI * 0.5)) * 1.3 * (P.gravity < 0.5 ? 2 : 1);
      e.pos.y = floorH(e.pos.x, e.pos.z) + 0.9 + hop;
      const sq = 1 + (hop < 0.15 ? 0.25 : -0.08);
      e.blob.scale.set(sq, 2 - sq, sq);
      e.group.rotation.y = Math.atan2(ax, az);
      if (alive && Math.hypot(dx, dz) < 1.6 && Math.abs(player.pos.y + 1 - e.pos.y) < 1.8) hurtPlayer(1, e.pos);
    } else if (e.type === 'saucer') {
      let tx, tz;
      if (alive && dist < 42) { e.orbitA += dt * 0.5 * e.mul; tx = player.pos.x + Math.cos(e.orbitA) * 11; tz = player.pos.z + Math.sin(e.orbitA) * 11; }
      else { e.wanderT -= dt; if (e.wanderT <= 0) { e.wanderA = rand(0, 6.28); e.wanderT = rand(3, 6); } tx = e.pos.x + Math.cos(e.wanderA) * 10; tz = e.pos.z + Math.sin(e.wanderA) * 10; }
      const mx = tx - e.pos.x, mz = tz - e.pos.z; const ml = Math.hypot(mx, mz) || 1; const sp = Math.min(ml, 7 * e.mul);
      e.pos.x += mx / ml * sp * dt; e.pos.z += mz / ml * sp * dt;
      const pdist = Math.hypot(e.pos.x, e.pos.z); if (pdist > BOUND - 4) { e.pos.x *= (BOUND - 4) / pdist; e.pos.z *= (BOUND - 4) / pdist; }
      const gy = Math.max(H(e.pos.x, e.pos.z), P.hazard ? P.hazard.level : -99);
      e.pos.y = lerp(e.pos.y, gy + 5.5 + Math.sin(e.t * 2) * 0.6, 1 - Math.exp(-3 * dt));
      e.group.rotation.y += dt * 2;
      e.lights.forEach((l, q) => { l.visible = (Math.floor(e.t * 8) + q) % 3 !== 0; });
      e.cd -= dt;
      if (alive && dist < 30 && e.cd <= 0) { e.cd = rand(2.2, 3.2) / e.mul; enemyShot(e.pos.clone().setY(e.pos.y - 0.4), player.pos.clone().setY(player.pos.y + 1), 14, 0x9cff3a); Sound.sfx('ezap'); }
    } else if (e.type === 'tripod') {
      e.chasing = alive && dist < 34;
      let ax = 0, az = 0, sp = 0;
      if (e.chasing && dist > 8) { ax = dx / dist; az = dz / dist; sp = 2.4 * e.mul; }
      else if (!e.chasing) { e.wanderT -= dt; if (e.wanderT <= 0) { e.wanderA = rand(0, 6.28); e.wanderT = rand(3, 5); } ax = Math.cos(e.wanderA); az = Math.sin(e.wanderA); sp = 1.2; }
      const nx = e.pos.x + ax * sp * dt, nz = e.pos.z + az * sp * dt;
      if (!hazardAt(nx, nz, 0.2) && Math.hypot(nx, nz) < BOUND - 3) { e.pos.x = nx; e.pos.z = nz; } else e.wanderA += 2;
      e.pos.y = floorH(e.pos.x, e.pos.z) + 3 + Math.sin(e.t * 4) * 0.12 * (sp > 0 ? 1 : 0);
      const face = e.chasing ? Math.atan2(dx, dz) : Math.atan2(ax, az);
      let d = face - e.group.rotation.y; d = Math.atan2(Math.sin(d), Math.cos(d)); e.group.rotation.y += d * Math.min(1, dt * 4);
      e.legs.forEach((l, q) => { l.rotation.x = Math.sin(e.t * 4 + q * 2.1) * 0.35 * (sp > 0 ? 1 : 0.1); });
      e.cd -= dt;
      if (alive && e.chasing && dist < 26 && e.cd <= 0) {
        e.cd = rand(2.5, 3.5) / e.mul;
        const from = e.pos.clone().add(new THREE.Vector3(Math.sin(e.group.rotation.y) * 0.8, 0, Math.cos(e.group.rotation.y) * 0.8));
        enemyShot(from, player.pos.clone().setY(player.pos.y + 1), 18, 0xff3030, 0.25); Sound.sfx('ezap');
      }
      e.lens.scale.setScalar(e.cd < 0.5 ? 1.4 : 1);
    } else if (e.type === 'boss') {
      updateBoss(e, dt, dist, alive);
    }
    // hit flash
    if (e.flash > 0) { e.flash -= dt; e.mats.forEach((m) => m.emissive && m.emissive.setRGB(1, 1, 1)); if (e.flash <= 0) e.mats.forEach((m) => m.emissive && m.emissive.set(m.userData.em ?? (m.userData.em = 0x000000))); }
    e.group.position.copy(e.pos);
    if (e.type === 'gloob') e.group.position.y -= 0.0;
  }
}

function updateBoss(e, dt, dist, alive) {
  const enraged = e.hp < e.maxHp / 2;
  e.orbitA += dt * (enraged ? 0.32 : 0.2);
  const R = 22;
  const tx = Math.cos(e.orbitA) * R + player.pos.x * 0.25, tz = Math.sin(e.orbitA) * R + player.pos.z * 0.25;
  e.pos.x = lerp(e.pos.x, tx, 1 - Math.exp(-0.8 * dt)); e.pos.z = lerp(e.pos.z, tz, 1 - Math.exp(-0.8 * dt));
  e.pos.y = lerp(e.pos.y, H(e.pos.x, e.pos.z) + 13 + Math.sin(e.t) * 1.2, 1 - Math.exp(-1.5 * dt));
  e.group.rotation.y += dt * 0.6;
  e.lights.forEach((l, q) => { l.visible = (Math.floor(e.t * 6) + q) % 2 === 0; });
  if (!alive) return;
  e.cd -= dt;
  if (e.cd <= 0) {
    e.cd = enraged ? 1.4 : 2.1;
    const n = enraged ? 7 : 5; const target = player.pos.clone().setY(player.pos.y + 1);
    for (let q = 0; q < n; q++) {
      const off = new THREE.Vector3((q - (n - 1) / 2) * 2.2, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), Math.atan2(target.x - e.pos.x, target.z - e.pos.z));
      enemyShot(e.pos.clone().setY(e.pos.y - 2), target.clone().add(off), 13, 0xff4fa0, 0.45);
    }
    Sound.sfx('ezap');
  }
  e.spawnCd -= dt;
  if (e.spawnCd <= 0) {
    e.spawnCd = enraged ? 7 : 10;
    const gloobs = L.enemies.filter((x) => x.type === 'gloob').length;
    if (gloobs < 10) for (let q = 0; q < 2; q++) { const p = new THREE.Vector3(e.pos.x + rand(-4, 4), 0, e.pos.z + rand(-4, 4)); if (!hazardAt(p.x, p.z)) { const g = spawnEnemy('gloob', p, 1.3, 0xc0a0ff); burst(g.pos, 0xff4fa0, 12, 5, 0.6); } }
    message('THE MOTHERSHIP DROPS MORE GLOOBS!', 1.6);
  }
}

function damageEnemy(e, dmg, at) {
  e.hp -= dmg; e.flash = 0.08;
  e.mats.forEach((m) => { if (m.userData.em === undefined && m.emissive) m.userData.em = m.emissive.getHex(); });
  Sound.sfx('hit');
  burst(at, 0xffffff, 4, 4, 0.3, 1);
  if (e.type === 'boss') updateBossBar();
  if (e.hp <= 0) killEnemy(e);
}

function killEnemy(e) {
  const idx = L.enemies.indexOf(e); if (idx >= 0) L.enemies.splice(idx, 1);
  L.world.remove(e.group); disposeTree(e.group);
  const pts = { gloob: 25, saucer: 50, tripod: 80, boss: 2000 }[e.type];
  L.kills++; L.score += pts;
  floater(`+${pts}`, e.pos, '#ff8a6a');
  if (e.type === 'boss') {
    L.boss = null; Sound.sfx('bigboom'); cam.shake = 1.4;
    for (let q = 0; q < 6; q++) setTimeout(() => { if (L) burst(e.pos.clone().add(new THREE.Vector3(rand(-5, 5), rand(-2, 2), rand(-5, 5))), pick([0xff4fa0, 0xffd23f, 0xffffff]), 30, 14, 1.4, 3); }, q * 180);
    for (let q = 0; q < 12; q++) { const a = (q / 12) * Math.PI * 2; addPickup('bolt', e.pos.x + Math.cos(a) * 5, e.pos.z + Math.sin(a) * 5); }
    $('boss-bar').hidden = true;
    message('THE MOTHERSHIP IS DOWN! THE GLORPIANS FLEE!', 3.5);
    checkReady();
  } else {
    Sound.sfx('boom');
    const col = e.type === 'gloob' ? e.mats[0].color.getHex() : 0xb8c0cc;
    burst(e.pos, col, 18, 8, 0.9, 3); burst(e.pos, 0xffd23f, 6, 6, 0.6, 3);
    const roll = Math.random();
    if (roll < 0.12) addPickup('oil', e.pos.x, e.pos.z);
    else if (roll < 0.5 || e.type !== 'gloob') { const n = e.type === 'tripod' ? 4 : e.type === 'saucer' ? 3 : 1; for (let q = 0; q < n; q++) addPickup('bolt', e.pos.x + rand(-1.5, 1.5), e.pos.z + rand(-1.5, 1.5)); }
  }
  updateHUD();
}

function updateFolks(dt) {
  for (const f of L.folks) {
    f.t += dt;
    if (f.saved) {
      if (f.beamT > 0) {
        f.beamT -= dt;
        f.group.position.y += dt * 6; f.group.rotation.y += dt * 8; f.group.scale.setScalar(Math.max(0.01, f.beamT / 1.4));
        f.beam.material.opacity = 0.5 * (f.beamT / 1.4);
        if (f.beamT <= 0) { L.world.remove(f.group); L.world.remove(f.beam); disposeTree(f.beam); f.group.visible = false; }
      }
      continue;
    }
    const dx = player.pos.x - f.pos.x, dz = player.pos.z - f.pos.z; const dist = Math.hypot(dx, dz);
    if (dist < 14) {
      // excited: face player, jump, wave
      f.group.rotation.y = Math.atan2(dx, dz);
      f.pos.y = floorH(f.pos.x, f.pos.z) + Math.abs(Math.sin(f.t * 7)) * 0.5;
      f.armL.rotation.z = -2.6 + Math.sin(f.t * 12) * 0.5; f.armR.rotation.z = 2.6 - Math.sin(f.t * 12) * 0.5;
    } else {
      f.wanderA += (Math.random() - 0.5) * dt * 2;
      const nx = f.pos.x + Math.cos(f.wanderA) * dt * 0.8, nz = f.pos.z + Math.sin(f.wanderA) * dt * 0.8;
      if (!hazardAt(nx, nz, 0.8) && Math.hypot(nx - f.home.x, nz - f.home.z) < 6) { f.pos.x = nx; f.pos.z = nz; } else f.wanderA += Math.PI;
      f.pos.y = floorH(f.pos.x, f.pos.z);
      f.group.rotation.y = Math.PI / 2 - f.wanderA;
      f.armL.rotation.z = -0.2 + Math.sin(f.t * 4) * 0.2; f.armR.rotation.z = 0.2 - Math.sin(f.t * 4) * 0.2;
    }
    f.marker.position.y = 2.0 + Math.sin(f.t * 3) * 0.15; f.marker.rotation.y += dt * 3;
    f.group.position.copy(f.pos);
    if (state === 'playing' && dist < 1.8 && Math.abs(player.pos.y - f.pos.y) < 2.5) rescueFolk(f);
  }
}

function rescueFolk(f) {
  f.saved = true; f.beamT = 1.4; L.saved++; L.score += 100;
  f.marker.visible = false;
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.9, 0.9, 40, 16, 1, true), new THREE.MeshBasicMaterial({ color: 0x7ff6ff, transparent: true, opacity: 0.5, side: THREE.DoubleSide, depthWrite: false }));
  beam.position.set(f.pos.x, f.pos.y + 20, f.pos.z); L.world.add(beam); f.beam = beam;
  Sound.sfx('rescue');
  floater('SAVED! +100', f.pos.clone().setY(f.pos.y + 2), '#7ff6ff');
  burst(f.pos.clone().setY(f.pos.y + 1), 0x7ff6ff, 16, 4, 1.0, 4);
  const left = L.total - L.saved;
  if (left > 0) message(left === 1 ? 'ONE MORE TO GO!' : `${left} FOLKS LEFT TO RESCUE`, 1.8);
  checkReady();
  updateHUD();
}

function checkReady() {
  if (L.saved < L.total) return;
  if (L.P.boss && !L.bossSpawned) {
    L.bossSpawned = true;
    const b = spawnEnemy('boss', new THREE.Vector3(30, 0, -30), 1);
    b.pos.y = H(30, -30) + 30; b.cd = 3;
    $('boss-bar').hidden = false; updateBossBar();
    message('EVERYONE’S SAFE… BUT HERE COMES THE GLORP MOTHERSHIP!', 3.5);
    Sound.sfx('bigboom'); cam.shake = 0.6;
    return;
  }
  if (L.boss) return;
  if (!L.ready) {
    L.ready = true; L.rocket.beam.visible = true; L.rocket.ringMat.color.set(0x7dff6a);
    message('ALL FOLKS ABOARD! HEAD BACK TO THE ROCKET!', 3.2); Sound.sfx('ready');
  }
}

function updateBossBar() { if (L && L.boss) $('boss-fill').style.width = `${Math.max(0, L.boss.hp / L.boss.maxHp) * 100}%`; }

function updatePickups(dt) {
  for (let k = L.pickups.length - 1; k >= 0; k--) {
    const p = L.pickups[k]; p.t += dt;
    const g = p.group;
    g.rotation.y += dt * 2.5;
    const dx = player.pos.x - g.position.x, dz = player.pos.z - g.position.z, dy = player.pos.y + 1 - g.position.y;
    const d = Math.hypot(dx, dy, dz);
    if (p.kind === 'bolt' && d < 4.5 && state === 'playing') { g.position.x += dx * dt * 6; g.position.z += dz * dt * 6; g.position.y += dy * dt * 6; }
    else g.position.y = p.base + Math.sin(p.t * 2.5) * 0.2;
    if (d < 1.4 && state === 'playing') {
      L.pickups.splice(k, 1); L.world.remove(g); disposeTree(g);
      if (p.kind === 'bolt') { L.bolts++; L.score += 10; Sound.sfx('bolt'); }
      else if (p.kind === 'oil') { player.hp = Math.min(player.maxHp, player.hp + 2); Sound.sfx('heal'); floater('+2 BATTERY', g.position, '#4fd1c5'); }
      else if (p.kind === 'atom') { player.triple = 15; Sound.sfx('power'); message('TRIPLE ZAP! 15 SECONDS', 1.8); }
      updateHUD();
    }
  }
}

function updateShots(dt) {
  for (let k = L.shots.length - 1; k >= 0; k--) {
    const s = L.shots[k]; s.life -= dt;
    s.m.position.addScaledVector(s.v, dt);
    let dead = s.life <= 0;
    const p = s.m.position;
    if (!dead && p.y < H(p.x, p.z)) { dead = true; burst(p, s.from === 'player' ? 0x7ff6ff : 0x9cff3a, 4, 3, 0.3, 1); }
    if (!dead && s.from === 'player') {
      for (const e of L.enemies) { if (p.distanceTo(e.pos) < e.r) { damageEnemy(e, s.dmg, p.clone()); dead = true; break; } }
    } else if (!dead && s.from === 'enemy' && state === 'playing') {
      if (p.distanceTo(tmpV.copy(player.pos).setY(player.pos.y + 1.1)) < 1.0) { hurtPlayer(s.dmg, p.clone()); dead = true; }
    }
    if (dead) { L.world.remove(s.m); s.m.geometry.dispose(); s.m.material.dispose(); L.shots.splice(k, 1); }
  }
}

function updateParticles(dt) {
  for (let k = L.parts.length - 1; k >= 0; k--) {
    const p = L.parts[k]; p.life -= dt;
    p.v.y -= 14 * dt; p.m.position.addScaledVector(p.v, dt);
    p.m.scale.setScalar(Math.max(0.01, p.life / p.max)); p.m.rotation.x += dt * 6;
    if (p.life <= 0) { L.world.remove(p.m); L.parts.splice(k, 1); }
  }
  if (L.floaters) {
    L.floaters = L.floaters.filter((f) => {
      f.t += dt; f.pos.y += dt * 1.5;
      const v = tmpV.copy(f.pos).project(camera);
      if (v.z > 1) f.el.style.display = 'none';
      else { f.el.style.display = ''; f.el.style.left = `${(v.x * 0.5 + 0.5) * innerWidth}px`; f.el.style.top = `${(-v.y * 0.5 + 0.5) * innerHeight}px`; f.el.style.opacity = String(1 - f.t / 1.2); }
      if (f.t > 1.2) { f.el.remove(); return false; }
      return true;
    });
  }
  for (const d of L.decorAnim) { d.t += dt; if (d.drift) { d.o.position.x += dt * 1.2; if (d.o.position.x > BOUND) d.o.position.x = -BOUND; } else d.o.rotation.z = Math.sin(d.t * 1.5) * 0.15; }
  if (L.hazardMesh) { L.hazardMesh.position.y = L.P.hazard.level + Math.sin(L.time * 1.3) * 0.08; if (L.P.hazard.harmful) L.hazardMesh.material.emissiveIntensity = 0.55 + Math.sin(L.time * 2.5) * 0.15; }
}

/* =========================================================================
   Camera
   ========================================================================= */
function updateCamera(dt) {
  const target = tmpV.copy(player.pos); target.y += 1.6;
  const d = cam.dist;
  const want = tmpV2.set(target.x + Math.sin(cam.yaw) * Math.cos(cam.pitch) * d, target.y + Math.sin(cam.pitch) * d, target.z + Math.cos(cam.yaw) * Math.cos(cam.pitch) * d);
  const gh = H(want.x, want.z) + 1.0; if (want.y < gh) want.y = gh;
  cam.pos.lerp(want, 1 - Math.exp(-10 * dt));
  camera.position.copy(cam.pos);
  if (cam.shake > 0) { cam.shake = Math.max(0, cam.shake - dt); const s = cam.shake * 0.5; camera.position.x += rand(-s, s); camera.position.y += rand(-s, s); }
  camera.lookAt(target);
  if (L && L.P.roll) camera.rotateZ(L.P.roll);
}

/* =========================================================================
   Launch sequence & results
   ========================================================================= */
let launchT = 0;
function startLaunch() {
  state = 'launching'; launchT = 0;
  art.group.visible = false; L.rocket.beam.visible = false; L.rocket.flame.visible = true;
  Sound.sfx('launch'); message('3… 2… 1… BLAST OFF!', 2.5);
}

// --- walking paths for the hatch cutscenes
function makePath(pts) {
  const seg = []; let total = 0;
  for (let k = 1; k < pts.length; k++) { const d = pts[k].distanceTo(pts[k - 1]); seg.push(d); total += d; }
  return { pts, seg, total };
}
function pathAt(p, s, out) {
  s = clamp(s, 0, p.total);
  for (let k = 0; k < p.seg.length; k++) {
    if (s <= p.seg[k] || k === p.seg.length - 1) return out.lerpVectors(p.pts[k], p.pts[k + 1], p.seg[k] ? clamp(s / p.seg[k], 0, 1) : 1);
    s -= p.seg[k];
  }
  return out.copy(p.pts[p.pts.length - 1]);
}
function rampPoints() {
  const gy = L.rocket.group.position.y;
  return [
    new THREE.Vector3(0, gy + HATCH.hingeY, 0.35),                                            // inside the airlock
    new THREE.Vector3(0, gy + HATCH.hingeY, HATCH.hingeZ),                                    // top of the ramp
    new THREE.Vector3(0, gy + HATCH.hingeY - HATCH.len * Math.sin(HATCH.open), HATCH.hingeZ + HATCH.len * Math.cos(HATCH.open)), // foot of the ramp
    new THREE.Vector3(0, H(0, 4.3), 4.3),
  ];
}
function setHatch(k) { L.rocket.hatch.rotation.x = lerp(HATCH.closed, HATCH.open, smooth(0, 1, k)); }
function walkArti(dt, from, to) {
  const dx = to.x - from.x, dz = to.z - from.z;
  if (Math.hypot(dx, dz) > 0.001) player.facing = Math.atan2(dx, dz);
  player.pos.copy(to); player.onGround = true; player.jumps = 0; player.jetT = 0;
  animateArti(dt, Math.hypot(dx, dz) / Math.max(dt, 1e-4));
}
function cutsceneCamera(dt, look, at, rate = 2.5) {
  cam.pos.lerp(at, 1 - Math.exp(-rate * dt));
  camera.position.copy(cam.pos);
  if (cam.shake > 0) { cam.shake = Math.max(0, cam.shake - dt); const s = cam.shake * 0.5; camera.position.x += rand(-s, s); camera.position.y += rand(-s, s); }
  camera.lookAt(look);
  if (L.P.roll) camera.rotateZ(L.P.roll);
  sun.position.copy(look).addScaledVector(SUN_DIR, 80); sun.target.position.copy(look);
}

// --- arrival: the rocket lands, the hatch drops, Arti walks out
const ARRIVE = { land: 3.0, settle: 3.5, open: 4.4, walk: 7.0, close: 7.8 };
let arriveT = 0, arrivePath = null;
function startArrival() {
  state = 'arriving'; arriveT = 0; player.inv = 0;
  const r = L.rocket; r.group.position.y = r.restY + 70; r.flame.visible = true; setHatch(0);
  art.group.visible = false;
  arrivePath = null;
  cam.pos.set(13, r.restY + 9, 19);
  Sound.sfx('land');
  message('PRESS ANY KEY TO SKIP', 2.5); $('hud-hint').style.opacity = 0;
}
function updateArrival(dt) {
  arriveT += dt;
  const r = L.rocket, g = r.group, t = arriveT;
  if (t < ARRIVE.land) {
    const k = t / ARRIVE.land;
    g.position.y = r.restY + 70 * Math.pow(1 - k, 3);
    r.flame.visible = true; r.flame.scale.set(1 + Math.random() * 0.3, 1.2 + Math.random() * 0.6, 1);
    if (Math.random() < 0.8) burst(tmpV.copy(g.position).setY(g.position.y - 1), pick([0xffa020, 0xffd23f, 0xdddddd]), 2, 3, 0.7, -2);
  } else if (g.position.y !== r.restY) {
    g.position.y = r.restY; r.flame.visible = false; cam.shake = 0.35;
    burst(tmpV.copy(g.position).setY(g.position.y + 0.3), 0xcfc6b8, 30, 9, 0.9, 1);
    Sound.sfx('thud');
  }
  if (t >= ARRIVE.settle && t < ARRIVE.open + 0.05) {
    if (!r.opening) { r.opening = true; Sound.sfx('hatch'); }
    setHatch((t - ARRIVE.settle) / (ARRIVE.open - ARRIVE.settle));
  }
  if (t >= ARRIVE.open && t < ARRIVE.walk) {
    if (!arrivePath) { const p = rampPoints(); p.push(new THREE.Vector3(0, H(0, 6.5), 6.5)); arrivePath = makePath(p); art.group.visible = true; }
    const prev = tmpV2.copy(player.pos.lengthSq() ? player.pos : arrivePath.pts[0]);
    const s = smooth(0, 1, (t - ARRIVE.open) / (ARRIVE.walk - ARRIVE.open)) * arrivePath.total;
    walkArti(dt, prev.clone(), pathAt(arrivePath, s, new THREE.Vector3()));
  }
  if (t >= ARRIVE.walk) {
    if (art.group.visible === false) art.group.visible = true;
    player.pos.set(0, H(0, 6.5), 6.5); player.facing = 0; animateArti(dt, 0);
    art.armR.rotation.z = 2.4 + Math.sin(t * 14) * 0.4;  // wave hello
    setHatch(1 - (t - ARRIVE.walk) / (ARRIVE.close - ARRIVE.walk));
    if (r.opening) { r.opening = false; Sound.sfx('hatch'); }
  }
  const look = t < ARRIVE.land ? tmpV.copy(g.position).setY(g.position.y + 3) : tmpV.set(0, r.restY + 2.2, 2.5);
  const at = t < ARRIVE.open ? tmpV2.set(13, r.restY + 9, 19) : tmpV2.set(4.5, r.restY + 3.4, 14);
  cutsceneCamera(dt, look.clone(), at.clone(), t < ARRIVE.open ? 1.5 : 1.2);
  if (t >= ARRIVE.close) finishArrival();
}
function finishArrival() {
  if (state !== 'arriving') return;
  const r = L.rocket;
  r.group.position.y = r.restY; r.flame.visible = false; r.opening = false; setHatch(0);
  respawnPlayer(); player.inv = 1;
  state = 'playing';
  $('touch').hidden = !isTouch;
  cam.pos.set(player.pos.x, player.pos.y + 4, player.pos.z + 10);
  clearTimeout(finishArrival._t);
  $('hud-hint').style.opacity = 0.7; finishArrival._t = setTimeout(() => { $('hud-hint').style.opacity = 0; }, 12000);
}

// --- departure: Arti walks up the ramp, the hatch shuts, then lift-off
let boardT = 0, boardPath = null, boardWalk = 0;
function startBoarding() {
  state = 'boarding'; boardT = 0;
  const ramp = rampPoints().reverse();             // ground -> foot of ramp -> top -> inside
  const pts = [player.pos.clone()];
  if (player.pos.z < 3.5) {                         // behind or beside the rocket: walk round the front first
    const side = player.pos.x >= 0 ? 1 : -1;
    if (player.pos.z < 0) pts.push(new THREE.Vector3(side * 4.4, H(side * 4.4, 0), 0));
    pts.push(new THREE.Vector3(side * 3.2, H(side * 3.2, 4.6), 4.6));
  }
  boardPath = makePath(pts.concat(ramp));
  boardWalk = clamp(boardPath.total / 5.5, 1.4, 3.2);
  player.vel.set(0, 0, 0); player.triple = 0;
  L.rocket.beam.visible = false;
  $('touch').hidden = true;
  Sound.sfx('hatch');
  message('ALL ABOARD!', 1.6);
}
function updateBoarding(dt) {
  boardT += dt;
  const t = boardT, open = 0.7, walkEnd = open + boardWalk, shut = walkEnd + 0.8;
  if (t < open) { setHatch(t / open); animateArti(dt, 0); }
  else if (t < walkEnd) {
    setHatch(1);
    const s = smooth(0, 1, (t - open) / boardWalk) * boardPath.total;
    walkArti(dt, player.pos.clone(), pathAt(boardPath, s, new THREE.Vector3()));
  } else {
    art.group.visible = false;
    if (!L.rocket.closing) { L.rocket.closing = true; Sound.sfx('hatch'); }
    setHatch(1 - (t - walkEnd) / 0.8);
  }
  const gy = L.rocket.restY;
  cutsceneCamera(dt, tmpV.set(player.pos.x * 0.5, gy + 2.4, player.pos.z * 0.5 + 1.2).clone(), tmpV2.set(6, gy + 4, 13).clone(), 2);
  if (t >= shut) { setHatch(0); L.rocket.closing = false; startLaunch(); }
}
function updateLaunch(dt) {
  launchT += dt;
  const r = L.rocket.group;
  const vy = launchT < 0.8 ? 0 : (launchT - 0.8) * (launchT - 0.8) * 8;
  r.position.y += vy * dt; r.position.x += Math.sin(launchT * 40) * 0.02 * (launchT < 0.8 ? 1 : 0);
  L.rocket.flame.scale.set(1 + Math.random() * 0.3, 1 + Math.random() * 0.8 + launchT * 0.3, 1);
  if (Math.random() < 0.9) burst(r.position.clone().setY(r.position.y - 1), pick([0xffa020, 0xffd23f, 0xdddddd]), 3, 4, 0.9, -2);
  cam.shake = 0.15;
  camera.position.lerp(tmpV.set(14, H(14, 14) + 5, 14), 1 - Math.exp(-2 * dt));
  camera.lookAt(r.position.x, r.position.y + 4, r.position.z);
  if (launchT > 3.6) levelComplete();
}

function levelComplete() {
  const i = L.i; const P = L.P;
  const timeBonus = Math.max(0, Math.round(600 - L.time) * 2);
  const livesBonus = player.lives * 150;
  const total = L.score + timeBonus + livesBonus;
  if (!save.cleared.includes(i)) save.cleared.push(i);
  save.unlocked = Math.max(save.unlocked, Math.min(PLANETS.length, i + 2));
  const prevBest = save.best[i] || 0;
  if (total > prevBest) { save.score += total - prevBest; save.best[i] = total; }
  writeSave();
  const final = i === PLANETS.length - 1;
  showResult({
    eyebrow: final ? 'THE TOASTY SYSTEM IS SAVED' : `PLANET ${i + 1} CLEARED`,
    title: final ? 'Victory, Arti!' : `${P.name} Is Safe!`,
    text: final
      ? 'The Glorp Mothership is scrap and the Glorpians have scrambled off the edge of the map. Every folk is home, and Valentoid throws the biggest party the Toasty System has ever seen.'
      : `All ${L.total} folks are heading home. Next stop: ${PLANETS[i + 1].name}.`,
    stats: [['Folks saved', `${L.saved}/${L.total}`], ['Bolts', L.bolts], ['Glorpians zapped', L.kills], ['Time', fmtTime(L.time)], ['Time bonus', timeBonus], ['Spare-parts bonus', livesBonus], ['Planet score', total, true]],
    main: final ? 'Back to the Solar Map' : `On to ${PLANETS[i + 1].name}`,
    onMain: () => { mapSel = final ? i : i + 1; toMap(); },
  });
  if (final) Sound.sfx('ready');
}
const fmtTime = (t) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

function gameOver() {
  const i = L.i;
  showResult({
    eyebrow: 'MISSION FAILED', title: 'Out of Spare Parts',
    text: `The Glorpians got the better of Arti on ${L.P.name}. The folks are still waiting, so dust off and try again.`,
    stats: [['Folks saved', `${L.saved}/${L.total}`], ['Bolts', L.bolts], ['Glorpians zapped', L.kills]],
    main: 'Try Again', onMain: () => startLevel(i),
    alt: 'Back to Solar Map', onAlt: () => toMap(),
  });
}

function showResult(o) {
  state = 'result';
  document.exitPointerLock && document.pointerLockElement && document.exitPointerLock();
  $('res-eyebrow').textContent = o.eyebrow; $('res-title').textContent = o.title; $('res-text').textContent = o.text;
  $('res-stats').innerHTML = o.stats.map(([k, v, tot]) => `<dt class="${tot ? 'total' : ''}">${k}</dt><dd class="${tot ? 'total' : ''}">${v}</dd>`).join('');
  const main = $('btn-res-main'), alt = $('btn-res-alt');
  main.textContent = o.main; main.onclick = () => { Sound.sfx('select'); o.onMain(); };
  if (o.alt) { alt.hidden = false; alt.textContent = o.alt; alt.onclick = () => { Sound.sfx('select'); o.onAlt(); }; } else alt.hidden = true;
  $('result').hidden = false; $('hud').hidden = true; $('touch').hidden = true;
  setTimeout(() => main.focus(), 50);
}

/* =========================================================================
   HUD
   ========================================================================= */
const radar = $('radar'), rctx = radar.getContext('2d');
let hudCache = {};
function updateHUD(force) {
  if (!L) return;
  const set = (id, v) => { if (force || hudCache[id] !== v) { hudCache[id] = v; $(id).textContent = v; } };
  set('hud-planet', L.P.name.toUpperCase());
  set('hud-folks', `${L.saved}/${L.total}`);
  set('hud-bolts', String(L.bolts));
  set('hud-score', String(L.score));
  set('hud-lives', `SPARE ARTIS × ${Math.max(0, player.lives - 1)}`);
  const hpKey = `${player.hp}/${player.maxHp}`;
  if (force || hudCache.hp !== hpKey) {
    hudCache.hp = hpKey;
    $('hud-hp').innerHTML = Array.from({ length: player.maxHp }, (_, k) => `<i class="${k < player.hp ? '' : 'empty'}"></i>`).join('');
    $('hud-hp').classList.toggle('low', player.hp <= 2);
  }
}
function drawRadar() {
  const w = radar.width, h = radar.height, cx = w / 2, cy = h / 2, R = w / 2 - 4, range = 70;
  rctx.clearRect(0, 0, w, h);
  rctx.fillStyle = 'rgba(13,20,36,0.72)'; rctx.beginPath(); rctx.arc(cx, cy, R, 0, Math.PI * 2); rctx.fill();
  rctx.strokeStyle = 'rgba(79,209,197,0.35)'; rctx.lineWidth = 2;
  [0.33, 0.66].forEach((f) => { rctx.beginPath(); rctx.arc(cx, cy, R * f, 0, Math.PI * 2); rctx.stroke(); });
  // sweep
  const sw = (performance.now() / 1000 * 2) % (Math.PI * 2);
  const grd = rctx.createConicGradient ? rctx.createConicGradient(sw, cx, cy) : null;
  if (grd) { grd.addColorStop(0, 'rgba(79,209,197,0.35)'); grd.addColorStop(0.12, 'rgba(79,209,197,0)'); grd.addColorStop(1, 'rgba(79,209,197,0)'); rctx.fillStyle = grd; rctx.beginPath(); rctx.arc(cx, cy, R, 0, Math.PI * 2); rctx.fill(); }
  const fx = -Math.sin(cam.yaw), fz = -Math.cos(cam.yaw), rx = Math.cos(cam.yaw), rz = -Math.sin(cam.yaw);
  const plot = (x, z, color, size, clampEdge) => {
    const dx = x - player.pos.x, dz = z - player.pos.z;
    let sx = (dx * rx + dz * rz) / range * R, sy = -(dx * fx + dz * fz) / range * R;
    const d = Math.hypot(sx, sy);
    if (d > R - size) { if (!clampEdge) return; sx *= (R - size) / d; sy *= (R - size) / d; }
    rctx.fillStyle = color; rctx.beginPath(); rctx.arc(cx + sx, cy + sy, size, 0, Math.PI * 2); rctx.fill();
  };
  for (const e of L.enemies) plot(e.pos.x, e.pos.z, e.type === 'boss' ? '#ff4fa0' : '#e8503a', e.type === 'boss' ? 12 : 5, e.type === 'boss');
  for (const f of L.folks) if (!f.saved) plot(f.pos.x, f.pos.z, '#ffd23f', 7, true);
  plot(0, 0, L.ready ? '#7dff6a' : '#f4e9cf', L.ready ? 10 : 6, true);
  rctx.fillStyle = '#7ff6ff'; rctx.beginPath(); rctx.moveTo(cx, cy - 10); rctx.lineTo(cx + 7, cy + 7); rctx.lineTo(cx - 7, cy + 7); rctx.closePath();
  rctx.save(); rctx.translate(cx, cy); rctx.rotate(-(player.facing - (cam.yaw + Math.PI))); rctx.translate(-cx, -cy); rctx.fill(); rctx.restore();
}

/* =========================================================================
   Solar map
   ========================================================================= */
const mapCanvas = $('map-canvas'), mctx = mapCanvas.getContext('2d');
const mapStars = Array.from({ length: 260 }, () => ({ x: Math.random(), y: Math.random(), r: Math.random() * 1.4 + 0.2, t: Math.random() * 6 }));
let mapPos = [];
function resizeMap() { const dpr = Math.min(devicePixelRatio || 1, 2); mapCanvas.width = innerWidth * dpr; mapCanvas.height = innerHeight * dpr; mctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
function drawMap(t) {
  const w = innerWidth, h = innerHeight;
  mctx.fillStyle = '#0d1424'; mctx.fillRect(0, 0, w, h);
  for (const s of mapStars) { mctx.globalAlpha = 0.4 + 0.6 * Math.abs(Math.sin(t * 0.8 + s.t)); mctx.fillStyle = '#f4e9cf'; mctx.fillRect(s.x * w, s.y * h, s.r, s.r); }
  mctx.globalAlpha = 1;
  const narrow = w < 700;
  const panelW = narrow ? 0 : Math.min(330, w - 32) + 32;
  const avail = w - panelW;
  const cx = narrow ? w * 0.5 : avail * 0.5 + 8, cy = narrow ? h * 0.34 : h * 0.54;
  const squash = 0.48;
  const maxR = narrow ? Math.min(w * 0.46, h * 0.42) : Math.min(avail * 0.46, (h * 0.36) / squash);
  const minR = maxR * 0.17;
  // Big Toasty
  const sg = mctx.createRadialGradient(cx, cy, 0, cx, cy, minR * 0.6);
  sg.addColorStop(0, '#fff6c0'); sg.addColorStop(0.5, '#ffd23f'); sg.addColorStop(0.8, 'rgba(255,140,40,.6)'); sg.addColorStop(1, 'rgba(255,100,40,0)');
  mctx.fillStyle = sg; mctx.beginPath(); mctx.arc(cx, cy, minR * 0.6, 0, Math.PI * 2); mctx.fill();
  mctx.font = '600 11px "Chakra Petch", sans-serif'; mctx.textAlign = 'center'; mctx.fillStyle = 'rgba(255,210,63,.85)';
  mctx.fillText('BIG TOASTY', cx, cy - minR * 0.55 - 6);
  mapPos = [];
  PLANETS.forEach((P, i) => {
    const r = minR + (i + 1) / PLANETS.length * (maxR - minR);
    mctx.strokeStyle = i === mapSel ? 'rgba(255,210,63,.55)' : 'rgba(244,233,207,.14)'; mctx.lineWidth = i === mapSel ? 1.6 : 1;
    mctx.setLineDash(i < save.unlocked ? [] : [3, 5]);
    mctx.beginPath(); mctx.ellipse(cx, cy, r, r * squash, 0, 0, Math.PI * 2); mctx.stroke();
    mctx.setLineDash([]);
    const a = i * 2.4 + 0.6 + t * 0.12 / Math.sqrt(i + 1);
    const x = cx + Math.cos(a) * r, y = cy + Math.sin(a) * r * squash;
    const size = P.mapSize * (narrow ? 0.75 : 1) * Math.max(0.8, Math.min(1.25, maxR / 360));
    mapPos.push({ x, y, size: Math.max(size, 12), i });
  });
  // draw planets back-to-front (by y)
  [...mapPos].sort((a, b) => a.y - b.y).forEach(({ x, y, i }) => {
    const P = PLANETS[i]; const locked = i >= save.unlocked; const cleared = save.cleared.includes(i);
    const size = P.mapSize * (narrow ? 0.75 : 1) * Math.max(0.8, Math.min(1.25, maxR / 360));
    mctx.globalAlpha = locked ? 0.35 : 1;
    if (P.ring) {
      mctx.strokeStyle = '#f4e0a0'; mctx.lineWidth = 2;
      mctx.beginPath(); mctx.ellipse(x, y, size * 1.9, size * 0.55, P.ringTilt ? 1.35 : -0.2, 0, Math.PI * 2); mctx.stroke();
    }
    const g = mctx.createRadialGradient(x - size * 0.35, y - size * 0.35, size * 0.1, x, y, size);
    g.addColorStop(0, '#ffffff'); g.addColorStop(0.25, P.mapColor); g.addColorStop(1, '#101626');
    mctx.fillStyle = g; mctx.beginPath(); mctx.arc(x, y, size, 0, Math.PI * 2); mctx.fill();
    if (i === 2) { mctx.fillStyle = '#3f8a3a'; mctx.beginPath(); mctx.arc(x - size * 0.2, y - size * 0.1, size * 0.4, 0, Math.PI * 2); mctx.fill(); }
    if (P.heart) { mctx.fillStyle = 'rgba(255,240,230,.9)'; mctx.font = `${Math.max(8, size)}px sans-serif`; mctx.fillText('♥', x + 1, y + size * 0.35); }
    mctx.globalAlpha = 1;
    if (i === mapSel) {
      const pr = size + 8 + Math.sin(t * 4) * 2;
      mctx.strokeStyle = '#ffd23f'; mctx.lineWidth = 2; mctx.beginPath(); mctx.arc(x, y, pr, 0, Math.PI * 2); mctx.stroke();
    }
    mctx.font = `400 ${narrow ? 10 : 12}px "Bungee", sans-serif`; mctx.textAlign = 'center';
    mctx.fillStyle = locked ? 'rgba(154,166,191,.7)' : (i === mapSel ? '#ffd23f' : '#f4e9cf');
    mctx.fillText(P.name.toUpperCase() + (cleared ? ' ✓' : ''), x, y + size + (narrow ? 14 : 18));
  });
}
function selectPlanet(i) {
  mapSel = clamp(i, 0, PLANETS.length - 1);
  const P = PLANETS[mapSel]; const locked = mapSel >= save.unlocked;
  $('mp-order').textContent = `PLANET ${mapSel + 1} OF ${PLANETS.length}${save.cleared.includes(mapSel) ? ' · CLEARED' : ''}`;
  $('mp-name').textContent = P.name; $('mp-was').textContent = P.kind;
  $('mp-tag').textContent = P.tag;
  $('mp-grav').textContent = `${P.gravity.toFixed(2)} g`;
  $('mp-haz').textContent = P.hazard ? P.hazard.label : 'None';
  $('mp-folks').textContent = String(P.folks) + (P.boss ? ' + Boss' : '');
  $('mp-gim').textContent = P.gim;
  $('btn-launch').disabled = locked; $('btn-launch').textContent = locked ? 'Locked' : `Launch to ${P.name}`;
  $('mp-locked').hidden = !locked;
}
mapCanvas.addEventListener('click', (e) => {
  let best = null, bd = Infinity;
  for (const p of mapPos) { const d = Math.hypot(e.clientX - p.x, e.clientY - p.y); if (d < p.size + 22 && d < bd) { bd = d; best = p; } }
  if (best) { selectPlanet(best.i); Sound.sfx('select'); }
});
function mapKey(e) {
  if (['ArrowRight', 'ArrowUp', 'KeyD', 'KeyW'].includes(e.code)) { selectPlanet(mapSel + 1); Sound.sfx('select'); }
  if (['ArrowLeft', 'ArrowDown', 'KeyA', 'KeyS'].includes(e.code)) { selectPlanet(mapSel - 1); Sound.sfx('select'); }
  if (e.code === 'Enter' && mapSel < save.unlocked && document.activeElement?.tagName !== 'BUTTON') startLevel(mapSel);
}

/* =========================================================================
   Screen flow
   ========================================================================= */
function hideScreens() { ['title', 'map', 'pause', 'result'].forEach((id) => { $(id).hidden = true; }); }
function toMap() {
  unloadLevel(); art.group.visible = false;
  hideScreens(); $('hud').hidden = true; $('touch').hidden = true; $('banner').hidden = true;
  state = 'map'; $('map').hidden = false; $('map-score').textContent = save.score.toLocaleString();
  Sound.setSong({ root: 220, scale: 'lydian', seed: 99 });
  resizeMap(); selectPlanet(mapSel);
}
function startLevel(i) {
  Sound.init(); hideScreens();
  loadLevel(i);
  $('hud').hidden = false; $('touch').hidden = true; $('boss-bar').hidden = true;
  hudCache = {}; updateHUD(true);
  player.pos.set(0, 0, 0);
  startArrival();
}
function pauseGame() {
  if (state !== 'playing') return;
  state = 'paused'; $('pause').hidden = false;
  if (document.pointerLockElement) document.exitPointerLock();
  input.mouseFire = false; input.touchFire = false;
  setTimeout(() => $('btn-resume').focus(), 30);
}
function resumeGame() { if (state !== 'paused') return; $('pause').hidden = true; state = 'playing'; clock.getDelta(); }

$('btn-start').addEventListener('click', () => { Sound.init(); Sound.sfx('select'); toMap(); });
$('btn-reset').addEventListener('click', () => {
  save = { unlocked: 1, cleared: [], score: 0, best: {} }; writeSave(); mapSel = 0;
  $('reset-confirm').hidden = false;
});
$('btn-launch').addEventListener('click', () => { if (mapSel < save.unlocked) { Sound.sfx('select'); startLevel(mapSel); } });
$('btn-resume').addEventListener('click', resumeGame);
$('btn-restart').addEventListener('click', () => startLevel(L ? L.i : mapSel));
$('btn-tomap').addEventListener('click', () => toMap());

addEventListener('resize', () => {
  renderer.setSize(innerWidth, innerHeight); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix();
  if (state === 'map') resizeMap();
});

/* =========================================================================
   Title-screen backdrop: Arti floating in front of a spinning planet
   ========================================================================= */
const titleGroup = new THREE.Group(); scene.add(titleGroup);
(function buildTitleScene() {
  const pl = new THREE.Mesh(new THREE.SphereGeometry(30, 48, 32), new THREE.MeshStandardMaterial({ color: 0xd0603a, roughness: 0.9, flatShading: true }));
  const pos = pl.geometry.attributes.position;
  for (let i = 0; i < pos.count; i++) { const v = new THREE.Vector3().fromBufferAttribute(pos, i); const n = fbm(v.x * 0.08 + 50, v.z * 0.08 + v.y * 0.05, 4, 4); v.multiplyScalar(1 + (n - 0.5) * 0.08); pos.setXYZ(i, v.x, v.y, v.z); }
  pl.geometry.computeVertexNormals();
  pl.position.set(0, -34, -10); titleGroup.add(pl); titleGroup.userData.planet = pl;
  const n = 1200; const arr = new Float32Array(n * 3);
  for (let k = 0; k < n; k++) { const v = new THREE.Vector3().randomDirection().multiplyScalar(300); arr.set([v.x, v.y, v.z], k * 3); }
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(arr, 3));
  titleGroup.add(new THREE.Points(sg, new THREE.PointsMaterial({ color: 0xffffff, size: 1.5, sizeAttenuation: false })));
  const sat = buildSaucer(1.2); sat.group.position.set(9, 6, -14); titleGroup.add(sat.group); titleGroup.userData.saucer = sat;
})();
function updateTitle(t) {
  scene.background = new THREE.Color(0x0d1424); scene.fog = null;
  hemi.color.set(0xa0b8ff); hemi.groundColor.set(0x301810); hemi.intensity = 0.8;
  sun.color.set(0xfff0d0); sun.intensity = 3; sun.position.set(20, 30, 20); sun.target.position.set(0, 0, 0);
  titleGroup.visible = true;
  titleGroup.userData.planet.rotation.y = t * 0.05;
  const s = titleGroup.userData.saucer; s.group.position.set(Math.cos(t * 0.4) * 10, 6 + Math.sin(t * 0.9), -14 + Math.sin(t * 0.4) * 3); s.group.rotation.y = t * 2;
  const wide = innerWidth / innerHeight > 1.25; art.group.visible = true; art.group.position.set(wide ? 4.6 * (innerWidth / innerHeight) / 1.6 : 0, wide ? -1.2 + Math.sin(t * 1.2) * 0.3 : -3.4 + Math.sin(t * 1.2) * 0.2, wide ? 0 : -1); art.group.rotation.y = -0.4 + Math.sin(t * 0.5) * 0.5;
  art.flames.forEach((f) => { f.visible = true; f.scale.y = 0.8 + Math.random() * 0.5; });
  art.armL.rotation.z = -0.5 + Math.sin(t * 2) * 0.1; art.armR.rotation.z = 0.5;
  art.legL.rotation.x = 0; art.legR.rotation.x = 0; art.body.position.y = 0;
  art.bulb.visible = Math.sin(t * 6) > -0.3; art.brain.rotation.y = t;
  camera.position.set(0, 1.4, 7.5); camera.lookAt(0, 0.4, 0);
}

/* =========================================================================
   Main loop
   ========================================================================= */
const clock = new THREE.Clock();
function frame() {
  requestAnimationFrame(frame);
  const dt = Math.min(clock.getDelta(), 1 / 30);
  const t = clock.elapsedTime;

  if (state === 'map') { drawMap(t); Sound.update(dt, true); return; }
  if (state === 'title' || !L) { updateTitle(t); renderer.render(scene, camera); return; }
  titleGroup.visible = false;

  if (state === 'playing' || state === 'dead') {
    L.time += state === 'playing' ? dt : 0;
    if (state === 'playing') updatePlayer(dt);
    else {
      player.deadT -= dt;
      if (player.deadT <= 0) {
        if (player.lives <= 0) gameOver();
        else { player.hp = player.maxHp; respawnPlayer(); state = 'playing'; updateHUD(); message('REBOOTED! BACK AT THE ROCKET.', 1.8); }
      }
    }
    updateEnemies(dt); updateFolks(dt); updatePickups(dt); updateShots(dt); updateParticles(dt);
    if (state === 'playing' || state === 'dead') updateCamera(dt);
    if (player.triple > 0) { $('hud-power').hidden = false; $('hud-power-t').textContent = Math.ceil(player.triple); } else $('hud-power').hidden = true;
    updateHUD(); drawRadar();
    if (L.ready) { L.rocket.beam.rotation.y += dt; L.rocket.beam.material.opacity = 0.14 + Math.sin(t * 4) * 0.06; }
  } else if (state === 'arriving' || state === 'boarding') {
    if (state === 'arriving') updateArrival(dt); else updateBoarding(dt);
    updateEnemies(dt); updateFolks(dt); updatePickups(dt); updateShots(dt); updateParticles(dt);
    drawRadar();
  } else if (state === 'launching') {
    updateLaunch(dt); updateParticles(dt); updateFolks(dt);
  } else if (state === 'paused' || state === 'result') {
    // frozen frame
  }
  if (msgTimer > 0) { msgTimer -= dt; if (msgTimer <= 0) $('hud-msg').classList.remove('show'); }
  Sound.update(dt, state === 'playing' || state === 'dead');
  if (L) renderer.render(scene, camera);
}
frame();

// expose a tiny debug hook for testing in the console
window.__arti = { get state() { return state; }, setCutT(t) { if (state === "arriving") arriveT = t; else boardT = t; }, get L() { return L; }, player, startLevel, PLANETS, save };
