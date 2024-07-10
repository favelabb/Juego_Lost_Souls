export class Chimi {
    constructor(scene) {
        this.myScene = scene;
        this.sprite = null; // Añadir esta línea para mantener la referencia del sprite del jugador
    }

    preload() {
        // cargar sprites de chimi
        this.myScene.load.spritesheet('chimimove', './assets/dr_chimi/dr_chimi.png', { frameWidth: 100, frameHeight: 100 });
    }

    create() {
        //cargar animacion del chimi
        const chimimove = this.myScene.anims.create({
            key: 'bailar',
            frames : this.myScene.anims.generateFrameNumbers('chimimove',{start: 0 , end:6}),
            frameRate: 10
        })

        //const move = this.myScene.add.sprite(1300,150, 'chimimove').setScale(1)
        this.sprite = this.myScene.physics.add.sprite(1300,200,'chimimove').setScale(1);
        this.sprite.setCollideWorldBounds(true); 
        this.sprite.play({key: 'bailar',repeat: -1});
    }

    update() {
    }
}