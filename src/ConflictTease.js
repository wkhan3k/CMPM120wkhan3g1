export default class ConflictTease extends Phaser.Scene {
  constructor() { super('ConflictTease'); }

  preload() {
    // assets already loaded in prior scenes; re-declare in case of direct start
    this.load.image('starfield_ct', 'assets/starfield.png');
    this.load.image('rocket_ct', 'assets/rocket.png');
    this.load.image('pirate_ct', 'assets/pirate_drone.png');
  }

  create() {
    // Background
    this.add.image(640, 360, 'starfield_ct').setDisplaySize(1280, 720);

    // Player rocket slides in from the left
    const rocket = this.add.image(-120, 380, 'rocket_ct').setScale(0.5);
    this.tweens.add({
      targets: rocket,
      x: 260,
      duration: 1400,
      ease: 'Power2'
    });

    // Two pirate drones slide in from the right
    const drone1 = this.add.image(1420, 190, 'pirate_ct').setScale(0.9);
    const drone2 = this.add.image(1420, 530, 'pirate_ct').setScale(0.9);
    this.tweens.add({
      targets: [drone1, drone2],
      x: 950,
      duration: 1600,
      ease: 'Power2'
    });

    // "Pirate drones detected." text fades in after ships arrive
    const alertText = this.add.text(780, 370, 'Pirate drones detected.', {
      fontSize: '38px',
      fill: '#ff2222',
      fontStyle: 'bold'
    }).setAlpha(0);

    this.tweens.add({
      targets: alertText,
      alpha: 1,
      delay: 1600,
      duration: 600
    });

    // Fade in, hold, fade out to MainMenu
    this.cameras.main.fadeIn(1200);
    this.time.delayedCall(5000, () => {
      this.cameras.main.fadeOut(1200);
      this.time.delayedCall(1200, () => this.scene.start('MainMenu'));
    });
  }
}
