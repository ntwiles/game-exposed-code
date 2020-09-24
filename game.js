const config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    backgroundColor: '#9adaea',
    useTicker: true,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let loop;
let bmd;

function preload () {
    this.load.image('test', 'assets/mario.png');
}

function create() {
    
    this.add.image(0,0,'test').setOrigin(0);
}

function update() {}