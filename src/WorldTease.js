export default class WorldTease extends Phaser.Scene {
  constructor() { super('WorldTease'); }

  preload() {
    this.load.image('asteroids', 'assets/asteroids.png');
    this.load.audio('sfx', 'assets/sfx.mp3');
  }

  create() {
    this.add.image(640, 360, 'asteroids').setDisplaySize(1280, 720);

    // --- Top-left text box: flies in from the left ---
    const box1 = this.add.container(-700, 0);
    box1.add(this.add.rectangle(310, 130, 620, 160, 0x000000, 0.7));
    box1.add(this.add.text(50, 60, 'In the outer rings of Titan-9,\nwreckage drifts for miles.', {
      fontSize: '36px', fill: '#ffffff', wordWrap: { width: 580 }
    }));

    this.tweens.add({
      targets: box1,
      x: 0,
      duration: 900,
      ease: 'Power2'
    });

    // --- Bottom-right text box: flies in from the right after box1 lands ---
    const box2 = this.add.container(1400, 0);
    box2.add(this.add.rectangle(970, 560, 380, 130, 0x000000, 0.7));
    box2.add(this.add.text(790, 510, 'Lost energy cores are worth a fortune.\nBut you are not the only scavenger.', {
      fontSize: '28px', fill: '#ffffff', wordWrap: { width: 400 }
    }));

    this.tweens.add({
      targets: box2,
      x: 0,
      delay: 1000,
      duration: 900,
      ease: 'Power2'
    });

    this.sound.add('sfx').play();

    this.cameras.main.fadeIn(1500);
    this.time.delayedCall(5000, () => {
      this.cameras.main.fadeOut(1500);
      this.time.delayedCall(1500, () => this.scene.start('ConflictTease'));
    });
  }
}
