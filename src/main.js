import StudioIntro from './StudioIntro.js';
import WorldTease from './WorldTease.js';
import ConflictTease from './ConflictTease.js';
import MainMenu from './MainMenu.js';

const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  backgroundColor: '#000000',
  scene: [StudioIntro, WorldTease, ConflictTease, MainMenu]
};

new Phaser.Game(config);
