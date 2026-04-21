export default class WorldTease extends Phaser.Scene {
  constructor() { super('WorldTease'); }

  preload() {
    this.load.image('asteroids', 'assets/asteroids.png');
    this.load.audio('sfx', 'assets/sfx.mp3');
  }

  create() {
    this.add.image(640, 360, 'asteroids').setDisplaySize(1280, 720);

    // geometric shapes (black boxes behind text)
    this.add.rectangle(310, 130, 620, 160, 0x000000, 0.7);
    this.add.rectangle(970, 560, 380, 130, 0x000000, 0.7);

    // multi-line text
    this.add.text(50, 60, 'In the outer rings of Titan-9,\nwreckage drifts for miles.', {
      fontSize: '36px', fill: '#ffffff', wordWrap: { width: 580 }
    });

    this.add.text(790, 510, 'Lost energy cores are worth a fortune.\nBut you are not the only scavenger.', {
      fontSize: '28px', fill: '#ffffff', wordWrap: { width: 400 }
    });

    this.sound.add('sfx').play();

    this.cameras.main.fadeIn(1500);
    this.time.delayedCall(5000, () => {
      this.cameras.main.fadeOut(1500);
      this.time.delayedCall(1500, () => this.scene.start('MainMenu'));
    });
  }
}