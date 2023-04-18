// namespace xxx {
//     export function init(): void {
//         GAME = new Game(hero)
//         hero.id = 100;
//     }
// }



// namespace vars {
//     //% fixedInstance
//     export let hero = sprites.create(image.create(17, 17), SpriteKind.Player);

//     //% fixedInstance
//     export const stalagtite_xlarge = image.ofBuffer(hex`e4184000eeee0e0000000000000000000000000000000000000000000000000000000000ddddeeee0e000000000000000000000000000000000000000000000000000000dddd1dddeeeeee00000000000000000000000000000000000000000000000000dddd11ddddddedeeee0e00000000000000000000000000000000000000000000dd1111dddd1d11ddddeeeeee0000000000000000000000000000000000000000dd1111dddd11111dddddd1ddeeee0e00000000000000000000000000000000001d11d1dd1111d111dd1111d11dd1eeeeee0000000000000000000000000000001d11d1dd1111ddd11d1111d111d1ddddddeeeeee0000000000000000000000001d11d1dd1111ddd11d11111d11dd11d1ddddddddeeee000000000000000000001d11d1dd1111ddd11d11111d111d11dd11d1d1dd1dddeeee0e000000000000001d11d1dd1111ddd11d11111dd11d111d11dd11dd11d11d11edeeee00000000001111d11d1111ddd11111111dd111111d111d111d11dd11d11111d1eeee0e00001111d11d1111dd111d11d11dd111d11d111d111d111d11d111d11d1111dddddd1111d11d1111dd111d11d111d111d111111d11dd111d11d11dd11101000000001111d11d1111dd111d11d111d111d11111dd11d111dd111111dd0000000000001111d11d1111dd111d11d111d111111d11d111111d110d0000000000000000001111d11d1111dd111d11d111d11d111d11d11d110000000000000000000000001111d1dd1111dd111d11d111111d11dd11d1dd000000000000000000000000001111d1dd1111dd11dd11d11111dd1100000000000000000000000000000000001d11d1dd1111d11dd11dd1dd01000000000000000000000000000000000000001d1111dd1111111d111d00000000000000000000000000000000000000000000dd1111d11d1111dd000000000000000000000000000000000000000000000000d11111111d000000000000000000000000000000000000000000000000000000d11d010000000000000000000000000000000000000000000000000000000000`);

// }

//% color=190 weight=100 icon="\uf1ec" block="Heroe"
namespace heroe {


    
    //% blockId=avanzar
    //% block
    export function avanzar(): void {
        GAME.hero.moveForward();
        // tank.move();
        // basic.pause(250);
    }

    //% blockId=girarDerecha
    //% block
    export function girarDerecha(): void {
        GAME.hero.rotateRight();
        // tank.rotateRight();
        // basic.pause(250);
    }

    //% blockId=girarIzquierda
    //% block
    export function girarIzquierda(): void {
        GAME.hero.rotateLeft();
        // tank.rotateLeft();
        // basic.pause(250);
    }

    //% blockId=atacar
    //% block
    export function atacar(): void {
        GAME.hero.hit();
        // tank.shoot();
        // basic.pause(250);
    }
}

//% color=190 weight=100 icon="\uf1ec" block="Laberinto"
namespace laberinto {
    //% blockId=iniciar
    //% block
    export function iniciar(sprite: Sprite): void {
        // hero.id = 100;
        sprite.id = 100;
        GAME = new Game(sprite);
        // GAME.nextLevel();
    }
}

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    GAME.hero.moveForward();
});

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    GAME.hero.hit();
});

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    GAME.hero.rotateLeft();
});

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    GAME.hero.rotateRight();
});

controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    // laberinto.avanzar();
    // laberinto.girarIzquierda();
    // laberinto.avanzar();
    // laberinto.girarIzquierda();
    // laberinto.avanzar();
    // laberinto.girarDerecha();
    // laberinto.girarDerecha();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.girarIzquierda();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.girarDerecha();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.girarIzquierda();
    // laberinto.avanzar();
    // laberinto.girarDerecha();
    // laberinto.avanzar();
    // laberinto.girarIzquierda();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.girarIzquierda();
    // laberinto.avanzar();
    // laberinto.girarIzquierda();
    // laberinto.avanzar();
    // laberinto.girarDerecha();
    // laberinto.avanzar();
    // laberinto.girarDerecha();
    // laberinto.avanzar();
    // laberinto.girarIzquierda();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.girarDerecha();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.girarDerecha();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.avanzar();

    heroe.girarIzquierda();
    heroe.girarIzquierda();
    heroe.avanzar();
    heroe.avanzar();
    heroe.avanzar();
    heroe.avanzar();
    heroe.avanzar();
    heroe.girarDerecha();
    heroe.avanzar();
    heroe.avanzar();
    heroe.girarDerecha();
    heroe.avanzar();
    heroe.girarIzquierda();
    heroe.avanzar();
    heroe.avanzar();
    heroe.girarIzquierda();
    heroe.avanzar();
    heroe.girarDerecha();
    heroe.avanzar();
    heroe.avanzar();
    heroe.atacar();
    heroe.avanzar();
    heroe.avanzar(); 
    heroe.girarDerecha();
    heroe.avanzar(); 
    heroe.avanzar(); 
    heroe.girarDerecha();
    heroe.avanzar(); 
    heroe.girarIzquierda();
    heroe.avanzar(); 
    heroe.atacar();
    heroe.avanzar();
    heroe.avanzar(); 
    heroe.avanzar(); 
    heroe.girarIzquierda();
    heroe.avanzar(); 
    heroe.girarIzquierda();
    heroe.girarIzquierda();
    heroe.avanzar(); 
    heroe.girarDerecha();
    heroe.avanzar();
    heroe.avanzar(); 
    heroe.girarIzquierda();
    heroe.avanzar(); 
    heroe.girarIzquierda();
    heroe.avanzar();
    heroe.atacar();
    heroe.avanzar(); 
    heroe.girarDerecha();
    heroe.avanzar();
    // movimientos.girarDerecha();
    // movimientos.avanzar();

    // laberinto.girarIzquierda();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.girarIzquierda();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.girarDerecha();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.girarDerecha();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.girarDerecha();
    // laberinto.avanzar();
    // laberinto.girarIzquierda();
    // laberinto.atacar();
    // laberinto.avanzar(); 
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.girarDerecha();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.girarIzquierda();
    // laberinto.girarIzquierda();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.girarDerecha();
    // laberinto.avanzar();
    // laberinto.avanzar();

    // laberinto.girarIzquierda();
    // laberinto.avanzar();
    // laberinto.girarIzquierda();
    // laberinto.avanzar(); 
    // laberinto.girarDerecha();
    // laberinto.avanzar();
    // laberinto.girarDerecha();
    // laberinto.avanzar();
    // laberinto.girarIzquierda();
    // laberinto.avanzar();
    // laberinto.girarDerecha();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.girarDerecha();
    // laberinto.avanzar();
    // laberinto.girarIzquierda();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.girarDerecha();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.girarDerecha();
    // laberinto.avanzar();
    // laberinto.girarIzquierda();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.girarIzquierda();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.avanzar();
    // laberinto.avanzar();






    
    // // GAME.levelIndex = GAME.levelIndex + 1;
    // // GAME.level = levels[GAME.levelIndex];
    // // GAME.paint();
});

