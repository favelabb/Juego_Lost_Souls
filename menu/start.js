export class Start extends Phaser.Scene {
    constructor() {
        super({ key: 'start'});
    }

    preload() {
        this.load.image('menu2', '/assets/img/menu2.gif')
    }
    create() {

        let background = this.add.image(0, 0, 'menu2').setOrigin(0, 0).setDisplaySize(this.sys.game.config.width, this.sys.game.config.height).setInteractive();

        let title1 = this.add.text(800, 270, 'LOST SOULS', { fontSize: '52px', fill: '#fff' }).setOrigin(0.5).setInteractive();

        let playButton = document.getElementById('playButton');
        playButton.style.display = 'block';
        playButton.style.position = 'absolute';
        playButton.style.left = `${(this.sys.game.config.width / 2) - (playButton.offsetWidth / 2)}px`;
        playButton.style.top = `${(this.sys.game.config.height / 2) + 100}px`;

        playButton.onclick = () => {
            this.scene.start('level1');
            playButton.style.display = 'none';
        };
    }
}
