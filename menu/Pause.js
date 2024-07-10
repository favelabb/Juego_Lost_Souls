export class PauseScene extends Phaser.Scene {
    constructor() {
        super({ key: 'Pause' });
    }

    create() {
        // Fondo semitransparente para el menú de pausa
        this.add.rectangle(800, 300, 1600, 600, 0x000000, 0.5);

        // Texto del menú de pausa
        this.add.text(800, 270, 'Juego en Pausa', { fontSize: '52px', fill: '#fff' }).setOrigin(0.5);
        let resumeButton = this.add.text(800, 350, 'Reanudar', { fontSize: '42px', fill: '#fff' }).setOrigin(0.5).setInteractive();
        let salirButton = this.add.text(800,  400, 'Salir', { fontSize: '42px', fill: '#fff' }).setOrigin(0.5).setInteractive();

        // Evento para reanudar el juego
        resumeButton.on('pointerdown', () => {
            this.scene.resume('gameScene');
            this.scene.stop();
        });
        
        // Evento para salir del juego
        salirButton.on('pointerdown', () => {
            this.scene.stop('gameScene');
            this.scene.start('level1');
        });

        // Cambiar el cursor a pointer cuando se pasa sobre el texto interactivo
        resumeButton.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer';
        });
        
        salirButton.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer';
        });

        resumeButton.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default';
        });
        
        salirButton.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default';
        });
    }
}
