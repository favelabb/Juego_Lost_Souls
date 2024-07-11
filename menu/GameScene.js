import { Player } from "./Player.js";
import { Chimi } from "./chimi.js";
import { personaje1 } from "./persona1.js";

export class GameScene extends Phaser.Scene {
    
    constructor() {
        super({ key: 'gameScene' });
        this.player = new Player(this);
        this.chimi= new Chimi(this);
        this.personaje1 = new personaje1(this);
    }

    preload() {
        this.load.image('ciudad',   'assets/assetsdeljuego/fondo.png');
        this.load.image('recurso',  'assets/assetsdeljuego/Ejemp1.png');
        this.load.image('recurso2', 'assets/assetsdeljuego/Ejemp2.png');
        this.load.image('recurso3', 'assets/assetsdeljuego/Ejemp3.png');
        this.load.image('recurso4', 'assets/assetsdeljuego/Ejemp4.jpg');
        this.load.image('recurso5', 'assets/assetsdeljuego/simillares.png');
        this.load.image('recurso6', 'assets/assetsdeljuego/escenarios_juntos.png');
        this.load.tilemapTiledJSON('tilmap', 'assets/mapa/Mapa.json');
        this.player.preload();
        this.chimi.preload();
        this.personaje1.preload();
    }

    create() {
        let fondo = this.add.image(700, 0, 'ciudad');
        fondo.setDisplaySize(1800, 600);

        let map = this.make.tilemap({ key: 'tilmap' });
        let tileset = map.addTilesetImage('Ejemp1', 'recurso');
        let tileset2 = map.addTilesetImage('Ejemp2', 'recurso2');
        let tileset3 = map.addTilesetImage('Ejemp3', 'recurso3');
        let tileset4 = map.addTilesetImage('Ejemp4', 'recurso4');
        let tileset5 = map.addTilesetImage('simillares', 'recurso5');
        let tileset6 = map.addTilesetImage('escenarios_juntos', 'recurso6');

        let baseLayer = map.createLayer('BASE PRINCIPAL', [tileset, tileset2, tileset3, tileset4, tileset5, tileset6]);
        let secondaryLayer = map.createLayer('BASE SECUNDARIA', [tileset, tileset2, tileset3, tileset4, tileset5, tileset6]);

        // Configuración correcta de colisiones
        baseLayer.setCollisionByProperty({ colision: true });
        secondaryLayer.setCollisionByProperty({ colision: true });

        this.cameras.main.setBounds(0, -380, map.widthInPixels, map.heightInPixels);

        this.player.create();
        this.chimi.create();
        this.personaje1.create();
        
        // Añadir colisiones entre el jugador y las capas
        this.physics.add.collider(this.player.sprite, baseLayer);
        this.physics.add.collider(this.player.sprite, secondaryLayer);

        this.physics.add.collider(this.chimi.sprite, baseLayer);
        this.physics.add.collider(this.chimi.sprite, secondaryLayer);

        this.physics.add.collider(this.personaje1.sprite, baseLayer);
        this.physics.add.collider(this.personaje1.sprite, secondaryLayer);

        // Configurar la cámara para que siga al jugador
        this.cameras.main.startFollow(this.player.sprite);
        this.cameras.main.setBounds(0, -250, map.widthInPixels, map.heightInPixels);


        this.input.keyboard.on('keydown-P', () => {
            this.scene.pause();
            this.scene.launch('Pause');
        });

        // Almacenar una referencia de la escena globalmente para acceso desde el formulario
        window.gameScene = this;
    }

    update() {
        // Lógica de actualización del juego si es necesario
        this.player.update();
        this.chimi.update();
        this.personaje1.update();
    }
}
