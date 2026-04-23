export default class WorldTease extends Phaser.Scene {
  constructor() { super('WorldTease'); }

  preload() {
    this.load.image('asteroids', 'assets/asteroids.png');
    this.load.audio('sfx', 'assets/sfx.mp3');
  }

  create() {
    this.add.image(640, 360, 'asteroids').setDisplaySize(1280, 720);

    // --- Top-left box flies in from the left ---
    // Final positions: rect at x=310, text at x=50 — start 800px to the left
    const rect1 = this.add.rectangle(310 - 800, 130, 620, 160, 0x000000, 0.7);
    const text1 = this.add.text(50 - 800, 60,
      'In the outer rings of Titan-9,\nwreckage drifts for miles.', {
        fontSize: '36px', fill: '#ffffff', wordWrap: { width: 580 }
      });

    this.tweens.add({
      targets: [rect1, text1],
      x: '+=800',
      duration: 900,
      ease: 'Power2'
    });

    // --- Bottom-right box flies in from the right after 1s ---
    // Final positions: rect at x=970, text at x=790 — start 800px to the right
    const rect2 = this.add.rectangle(970 + 800, 560, 380, 130, 0x000000, 0.7);
    const text2 = this.add.text(790 + 800, 510,
      'Lost energy cores are worth a fortune.\nBut you are not the only scavenger.', {
        fontSize: '28px', fill: '#ffffff', wordWrap: { width: 400 }
      });

    this.tweens.add({
      targets: [rect2, text2],
      x: '-=800',
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
