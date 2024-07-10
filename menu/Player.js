export class Player {
    constructor(scene) {
        this.myScene = scene;
        this.sprite = null; // Añadir esta línea para mantener la referencia del sprite del jugador
    }

    preload() {
        // cargar sprites del prota
        this.myScene.load.spritesheet('playerrun', './assets/personaje/correr_personaje.png', { frameWidth: 100, frameHeight: 100 });
    }

    create() {
        // animaciones del prota
        this.myScene.anims.create({
            key: 'left_player',
            frames: this.myScene.anims.generateFrameNumbers('playerrun', { start: 4, end: 0 }),
            frameRate: 10,
            repeat: -1
        });

        this.myScene.anims.create({
            key: 'right_player',
            frames: this.myScene.anims.generateFrameNumbers('playerrun', { start: 8, end: 12 }),
            frameRate: 10,
            repeat: -1
        });

        // Crear el sprite del jugador con físicas habilitadas
        this.sprite = this.myScene.physics.add.sprite(100, 270, 'playerrun').setScale(0.30);
        this.sprite.setCollideWorldBounds(true); // Evitar que el jugador salga de los límites del mundo
        this.sprite.body.setGravityY(300);

        // controles
        this.cursors = this.myScene.input.keyboard.createCursorKeys();

        // controles-
        this.keyD = this.myScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.keyA = this.myScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.keyW = this.myScene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        window.gameScene = this;
    }

    update() {
        // Reiniciar la velocidad del jugador antes de aplicar el movimiento
        this.sprite.setVelocityX(0);

        if (this.keyA.isDown) {
            this.sprite.setVelocityX(-160);
            this.sprite.anims.play('left_player', true);

        } else if (this.keyD.isDown) {
            this.sprite.setVelocityX(160);
            this.sprite.anims.play('right_player', true);

        } else if(this.keyW.isDown){
            this.sprite.setVelocityY(-160);

        }else {
            this.sprite.anims.stop();
        }

        if (this.cursors.up.isDown && this.sprite.body.touching.down) {
            this.sprite.setVelocityY(-330); // Salto
        }
    }
}
