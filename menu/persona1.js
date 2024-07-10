export class personaje1{
    constructor(scene) {
        this.myScene = scene;
        this.sprite = null; // La referencia del sprite del jugador
        this.detectionZone = null; // Referencia al área de detección
        this.attackDelay = 1000; // Tiempo entre ataques en milisegundos
        this.canAttack = true; // Controlar si el enemigo puede atacar
    }

    preload(){
        this.myScene.load.image('personaje1move1', './assets/enemigo1/mono_jugando1.png')
        this.myScene.load.image('personaje1move2', './assets/enemigo1/mono_jugando2.png')
        this.myScene.load.image('personaje1move3', './assets/enemigo1/mono_jugando3.png')
        this.myScene.load.image('personaje1move4', './assets/enemigo1/mono_jugando4.png')
    }

    create(){
        const personaje1_move =this.myScene.anims.create({
            key:'monojugando',
            frames: [
                {key: 'personaje1move1'},
                {key: 'personaje1move2'},
                {key: 'personaje1move3'},
                {key: 'personaje1move4'}
            ],
            frameRate: 10,
            repeat: -1
        });

        //const move = this.myScene.add.sprite(1300,150, 'personaje1_move').setScale(1)
        this.sprite = this.myScene.physics.add.sprite(1000,270,'personaje1_move').setScale(0.5);
        this.sprite.setCollideWorldBounds(true); 
        this.sprite.play({key: 'monojugando',repeat: -1});

        // Crear área de detección
        this.detectionZone = this.myScene.add.zone(this.sprite.x, this.sprite.y).setSize(300, 300);
        this.myScene.physics.world.enable(this.detectionZone);
        this.detectionZone.body.setAllowGravity(false);
        this.detectionZone.body.moves = false;

        // Añadir colisión entre el área de detección y el jugador
        this.myScene.physics.add.overlap(this.detectionZone, this.myScene.player.sprite, this.attackPlayer, null, this);
    }

    attackPlayer() {
        if (this.canAttack) {
            console.log('Enemigo ataca al jugador!');
            // Aquí puedes reducir la vida del jugador o cualquier otra lógica de ataque
            this.myScene.player.sprite.setTint(0xff0000); // Ejemplo: Cambiar color del jugador para indicar daño
            this.canAttack = false;
            this.myScene.time.addEvent({
                delay: this.attackDelay,
                callback: () => {
                    this.canAttack = true;
                    this.myScene.player.sprite.clearTint(); // Restaurar color del jugador
                },
                callbackScope: this
            });
        }
    }  
    
    update() {
        // Actualizar la posición del área de detección para que siga al enemigo
        this.detectionZone.x = this.sprite.x;
        this.detectionZone.y = this.sprite.y;
    }
}