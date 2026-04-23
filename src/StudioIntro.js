export default class StudioIntro extends Phaser.Scene {
  constructor() { super('StudioIntro'); }

  preload() {
    this.load.image('starfield', 'assets/starfield.png');
    this.load.audio('music', 'assets/music.mp3');
  }

  create() {
    this.add.image(640, 360, 'starfield').setDisplaySize(1280, 720);

    // Logotype text object
    this.add.text(640, 360, 'NOVA DRIFT STUDIOS', {
      fontSize: '72px',
      fontFamily: '"Arial Black", Impact, sans-serif',
      color: '#ffffff',
      stroke: '#6699ff',
      strokeThickness: 3
    }).setOrigin(0.5);

    this.sound.add('music', { loop: true }).play();

    // Fade in, wait, fade out, then go to next scene
    this.cameras.main.fadeIn(1500);
    this.time.delayedCall(4000, () => {
      this.cameras.main.fadeOut(1500);
      this.time.delayedCall(1500, () => this.scene.start('WorldTease'));
    });
  }
}