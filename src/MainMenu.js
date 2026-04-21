export default class MainMenu extends Phaser.Scene {
  constructor() { super('MainMenu'); }

  preload() {
    this.load.image('starfield2', 'assets/starfield.png');
    this.load.image('pirate', 'assets/pirate_drone.png');
    this.load.image('rocket', 'assets/rocket.png');
  }

  create() {
    this.add.image(640, 360, 'starfield2').setDisplaySize(1280, 720);

    // title bar shape
    this.add.rectangle(640, 100, 1100, 90, 0xdddddd);
    this.add.text(640, 100, 'ASTRO SALVAGE', {
      fontSize: '48px', fill: '#000000', fontStyle: 'bold'
    }).setOrigin(0.5);

    // menu button shapes
    ['Start', 'Options', 'Quit'].forEach((label, i) => {
      const y = 380 + i * 80;
      this.add.rectangle(255, y, 220, 50, 0xcccccc);
      this.add.text(255, y, label, { fontSize: '28px', fill: '#000000' }).setOrigin(0.5);
      // diamond shape
      this.add.rectangle(130, y, 15, 15, 0xffffff).setAngle(45);
    });

    // rocket slides in from the left
    const rocket = this.add.image(-100, 360, 'rocket').setScale(0.4);
    this.tweens.add({
      targets: rocket,
      x: 200,
      duration: 1500,
      ease: 'Power2'
    });

    // pirate drones slide in from right
    const drone1 = this.add.image(1400, 200, 'pirate').setScale(0.4);
    const drone2 = this.add.image(1400, 540, 'pirate').setScale(0.4);
    this.tweens.add({ targets: [drone1, drone2], x: 950, duration: 1800, ease: 'Power2' });

    this.cameras.main.fadeIn(1500);
  }
}