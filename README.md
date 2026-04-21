# Astro Salvage Cinematic

## How the 8 Key Requirements Are Satisfied

### 1. 3+ Scenes
The project has three distinct Phaser.Scene classes: StudioIntro, WorldTease, 
and MainMenu, each with a unique scene key defined in the constructor.

### 2. 2+ Audio Assets
- `music.mp3` — background music that plays during the studio intro, looping.
- `sfx.mp3` — a sound effect that plays during the world tease scene.
Both audio files were sourced from silent placeholder tracks generated programmatically.

### 3. 2+ Image Assets
- `starfield.png` — a deep space background image used in multiple scenes.
  Sourced from the Rocket Patrol project assets.
- `asteroids.png` — a procedurally generated asteroid field illustration used in the WorldTease scene.
  Created using Python (struct/zlib PNG generation with circle rendering).
- `rocket.png` — sourced from the Rocket Patrol project assets (transparent background).
- `pirate_drone.png` — procedurally generated drone sprite with transparent background,
  created using Python (struct/zlib PNG generation).

### 4. 2+ Geometric Shapes
Two black semi-transparent rectangles are rendered in the WorldTease scene 
using `this.add.rectangle` to frame the narrative text blocks. Additional 
rectangles and rotated diamond shapes appear in the MainMenu scene as 
UI elements.

### 5. 1+ Logotype Text
The "Nova Drift Studios" logotype is displayed as a PNG image asset 
(`nova_drift_logo.png`) loaded with `this.load.image` and displayed with
`this.add.image`. It was created programmatically as a white glow overlay on a transparent background.

### 6. 1+ Multi-line Text
Multi-line text is rendered in the WorldTease scene using `this.add.text` 
with `\n` line breaks:
- "In the outer rings of Titan-9, \nwreckage drifts for miles."
- "Lost energy cores are worth a fortune.\nBut you are not the only scavenger."

### 7. 1+ Fading Scene Transition
Each scene uses `this.cameras.main.fadeIn` on entry and 
`this.cameras.main.fadeOut` before transitioning to the next scene, 
creating a fade-to-black effect between all three scenes.

### 8. 1+ Object Motion Animation
In the MainMenu scene, the player rocket slides in from the left side of 
the screen using `this.tweens.add` animating its x position. Two pirate 
drones also tween in from the right side of the screen.