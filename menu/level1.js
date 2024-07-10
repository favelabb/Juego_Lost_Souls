export class Level1 extends Phaser.Scene {
    constructor() {
        super({ key: 'level1' });
    }

    preload() {
        this.load.image('menu1', 'assets/img/menu1.webp');
        this.load.image('menu1', './assets/img/menu1.webp');
    }

    create() {
        let background = this.add.image(0, 0, 'menu1').setOrigin(0, 0).setDisplaySize(this.sys.game.config.width, this.sys.game.config.height);
        
        let title1 = this.add.text(800, 270, 'Inicio', { fontSize: '52px', fill: '#fff' }).setOrigin(0.5).setInteractive();
        let title2 = this.add.text(800, 350, 'Ajuste', { fontSize: '52px', fill: '#fff' }).setOrigin(0.5).setInteractive();
        let title3 = this.add.text(800, 440, 'Salir', { fontSize: '52px', fill: '#fff' }).setOrigin(0.5).setInteractive();

        title1.on('pointerdown', () => {
            this.scene.start('gameScene');
        });

        title2.on('pointerdown', () => {
            this.scene.start('Ajuste');
        });

        title3.on('pointerdown', () => {
            this.scene.start('start');
        });

        title1.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer';
        });

        title1.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default';
        });

        title2.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer';
        });

        title2.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default';
        });

        title3.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer';
        });

        title3.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default';
        });
    }

    update() {
        // Lógica de actualización si es necesario
    }
}