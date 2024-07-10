export class AjusteScene extends Phaser.Scene  {
    constructor() {
        super({ key: 'ajuste' });
    }

    create() {
        // Fondo semitransparente para el menú de ajuste
        this.add.rectangle(800, 300, 1600, 600, 0x000000, 0.5);

        // Título del menú de ajuste
        this.add.text(800, 150, 'Opciones de Ajuste', { fontSize: '52px', fill: '#fff' }).setOrigin(0.5);

        // Mostrar las teclas de movimiento
        this.add.text(800, 300, 'Teclas de Movimiento', { fontSize: '42px', fill: '#fff' }).setOrigin(0.5);
        this.add.text(800, 350, 'Mover a la izquierda: A', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
        this.add.text(800, 400, 'Mover a la derecha: D', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);
        this.add.text(800, 450, 'Saltar: W', { fontSize: '32px', fill: '#fff' }).setOrigin(0.5);

        // Botón para volver al menú principal
        let volverButton = this.add.text(800, 550, 'Volver', { fontSize: '42px', fill: '#fff' }).setOrigin(0.5).setInteractive();

        volverButton.on('pointerdown', () => {
            this.scene.start('level1');
        });

        volverButton.on('pointerover', () => {
            this.game.canvas.style.cursor = 'pointer';
        });

        volverButton.on('pointerout', () => {
            this.game.canvas.style.cursor = 'default';
        });
    }
}