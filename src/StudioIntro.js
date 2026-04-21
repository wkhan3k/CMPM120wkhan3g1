export default class StudioIntro extends Phaser.Scene {
  constructor() { super('StudioIntro'); }

  preload() {
    this.load.image('starfield', 'assets/starfield.png');
    this.load.image('logo', 'assets/nova_drift_logo.png');
    this.load.audio('music', 'assets/music.mp3');
  }

  create() {
    this.add.image(640, 360, 'starfield').setDisplaySize(1280, 720);
    this.add.image(640, 360, 'logo');

    this.sound.add('music', { loop: true }).play();

    // Fade in, wait, fade out, then go to next scene
    this.cameras.main.fadeIn(1500);
    this.time.delayedCall(4000, () => {
      this.cameras.main.fadeOut(1500);
      this.time.delayedCall(1500, () => this.scene.start('WorldTease'));
    });
  }
}