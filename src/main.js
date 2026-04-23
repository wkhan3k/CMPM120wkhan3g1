import StudioIntro from './StudioIntro.js?v=3';
import WorldTease from './WorldTease.js?v=3';
import ConflictTease from './ConflictTease.js?v=3';
import MainMenu from './MainMenu.js?v=3';

const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  backgroundColor: '#000000',
  scene: [StudioIntro, WorldTease, ConflictTease, MainMenu]
};

new Phaser.Game(config);
