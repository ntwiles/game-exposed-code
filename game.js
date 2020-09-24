const config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    backgroundColor: '#282a36',
    useTicker: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);
let player;

function preload () {
    this.load.image('code', 'assets/code.png');
    this.load.image('megaman','assets/megaman.png');

    this.load.image('dungeon', 'assets/tilemaps/tiles/dungeon.png');
    this.load.tilemapTiledJSON('map', 'assets/tilemaps/maps/dungeon.json');
}

function create() {
    // Input 
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

    // Code background
    this.add.image(16, 16, 'code').setOrigin(0).setScale(.75, .75);

    // Tilemap
    const map = this.make.tilemap({ key: 'map' });
    const dungeonTiles = map.addTilesetImage('dungeon', 'dungeon');

    map.createStaticLayer('ground', dungeonTiles, 300, 200);

    // Entities
    player = this.add.image(400, 350, 'megaman').setOrigin(0).setScale(0.05,0.05);

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
}

function update() {
    if (keyA.isDown) {
        player.x -= 2;
    }

    if (keyD.isDown) {
        player.x += 2;
    }

    if (keyW.isDown) {
        player.y -= 2;
    }

    if (keyS.isDown) {
        player.y += 2;
    }
}