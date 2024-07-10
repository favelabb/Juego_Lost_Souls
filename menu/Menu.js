import { GameScene } from "./GameScene.js"
import { Start } from "./start.js"
import { Level1 } from "./level1.js"
import { PauseScene } from "./Pause.js"

let config = {
    type: Phaser.AUTO,
    width: 1600,
    height: 600,
    scene: [Start, Level1, GameScene, PauseScene,],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    }
};

let game = new Phaser.Game(config);