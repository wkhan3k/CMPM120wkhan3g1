export default class MainMenu extends Phaser.Scene {
  constructor() { super('MainMenu'); }

  preload() {
    this.load.image('starfield_mm', 'assets/starfield.png');
  }

  create() {
    // Background
    this.add.image(640, 360, 'starfield_mm').setDisplaySize(1280, 720);

    // Title bar (geometric shape)
    this.add.rectangle(640, 100, 1100, 90, 0xdddddd);
    this.add.text(640, 100, 'ASTRO SALVAGE', {
      fontSize: '52px',
      fill: '#000000',
      fontStyle: 'bold'
    }).setOrigin(0.5);

    // Menu buttons (geometric shapes) with diamond bullet points
    ['Start', 'Options', 'Quit'].forEach((label, i) => {
      const y = 370 + i * 80;
      this.add.rectangle(255, y, 220, 50, 0xcccccc);
      this.add.text(255, y, label, {
        fontSize: '30px',
        fill: '#000000'
      }).setOrigin(0.5);
      // Diamond bullet (rotated square = geometric shape)
      this.add.rectangle(130, y, 14, 14, 0xffffff).setAngle(45);
    });

    this.cameras.main.fadeIn(1500);
  }
}
