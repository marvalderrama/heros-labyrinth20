


class Game {
    
    level: ILevel;
    levelIndex: number = 1;
    
    hero: Hero;
    board: Board;
    background: Sprite;

    constructor(hero: Sprite) {
        console.log("Game constructor");
        this.level = levels[this.levelIndex];
        console.log("Level: " + this.levelIndex);
        this.background = sprites.create(image.create(160, 120));
        console.log("Background: " + this.background);
        this.board = new Board();
        console.log("Board: " + this.board);
        this.hero = new Hero(hero);
        console.log("Hero: " + this.hero);

        this.paint();
        console.log("Painted");
    }

    paint() {
        this.board.cells.map(i => i.map(ii => ii.clean()));
        this.background.setImage(this.level.background);
        this.level.cells.map(i => {
            let cell = this.board.getCell(i);
            cell.cellType = i;
            cell.drawCellType();
        })
        this.level.keys.map(i => new Key().move(this.board.getCell(i)));  
        this.level.swords.map(i => new Sword().move(this.board.getCell(i)));
        this.level.enemies.map(i => new Enemy().move(this.board.getCell(i)))
        this.level.oxygens.map(i => new Oxygen().move(this.board.getCell(i)))
        this.level.obstacles.map(i => new Obstacle().move(this.board.getCell(i)))
        this.hero.init(this.board.getCell(this.level.start));
        // this.hero.init(this.level.startDirection, this.board.getCell(this.level.start));
    }

    nextLevel() {
        music.playMelody("G A B C5 - - A C5 C5 C5 C5 ", 450)
        this.levelIndex++;
        if (this.levelIndex >= levels.length) {
            this.end();
        }
        else {
            this.level = levels[this.levelIndex];
            this.paint();
        }
    }

    end() {
        music.playMelody("G A B C5 - - A C5 C5 C5 C5 ", 450)
        let confetti = sprites.create(image.create(120, 2));
        confetti.setPosition(80, -2);
        confetti.startEffect(effects.confetti);
        basic.pause(100);
    }
    
}

// let hero = sprites.create(image.create(17, 17), SpriteKind.Player);

let GAME: Game; 
