class End extends Phaser.Scene {
    constructor() {
        super("end");

        // Initialize a class variable "my" which is an object.
        // The object has one property, "sprite" which is also an object.
        // This will be used to hold bindings (pointers) to created sprites.
        this.my = {sprite: {}};
        
    }

    preload() {
        this.load.setPath("./assets/");
       //Load Duck Hunt Sprites
       this.load.atlasXML("SpriteHud", "Spritesheets/spritesheet_hud.png", "Spritesheets/spritesheet_hud.xml");
       this.load.atlasXML("SpriteObj", "Spritesheets/spritesheet_objects.png", "Spritesheets/spritesheet_objects.xml");
       this.load.atlasXML("SpriteStall", "Spritesheets/spritesheet_stall.png", "Spritesheets/spritesheet_stall.xml");
    }

    create() {
        let my = this.my;

        // Create key objects
        this.nextScene = this.input.keyboard.addKey("S");
        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        //Background Wall
        my.sprite.Wall = this.add.sprite(game.config.width/12.5, 200, "SpriteStall", "bg_wood.png");
        my.sprite.Wall = this.add.sprite(game.config.width/12.5, 420, "SpriteStall", "bg_wood.png");
        my.sprite.Wall = this.add.sprite(game.config.width/12.5, 640, "SpriteStall", "bg_wood.png");
        my.sprite.Wall = this.add.sprite(game.config.width/12.5, -20, "SpriteStall", "bg_wood.png");
       
        my.sprite.Wall = this.add.sprite(game.config.width/2.5, 200, "SpriteStall", "bg_wood.png");
        my.sprite.Wall = this.add.sprite(game.config.width/2.5, 420, "SpriteStall", "bg_wood.png");
        my.sprite.Wall = this.add.sprite(game.config.width/2.5, 640, "SpriteStall", "bg_wood.png");
        my.sprite.Wall = this.add.sprite(game.config.width/2.5, -20, "SpriteStall", "bg_wood.png");
       
        my.sprite.Wall = this.add.sprite(game.config.width/1.45, 200, "SpriteStall", "bg_wood.png");
        my.sprite.Wall = this.add.sprite(game.config.width/1.45, 420, "SpriteStall", "bg_wood.png");
        my.sprite.Wall = this.add.sprite(game.config.width/1.45, 640, "SpriteStall", "bg_wood.png");
        my.sprite.Wall = this.add.sprite(game.config.width/1.45, -20, "SpriteStall", "bg_wood.png");

        my.sprite.Wall = this.add.sprite(game.config.width/1.03, 200, "SpriteStall", "bg_wood.png");
        my.sprite.Wall = this.add.sprite(game.config.width/1.03, 420, "SpriteStall", "bg_wood.png");
        my.sprite.Wall = this.add.sprite(game.config.width/1.03, 640, "SpriteStall", "bg_wood.png");
        my.sprite.Wall = this.add.sprite(game.config.width/1.03, -20, "SpriteStall", "bg_wood.png");

        //Background Curtain Set Up
        my.sprite.sideCurtain = this.add.sprite(game.config.width/12.5, 200, "SpriteStall", "curtain.png");
        my.sprite.sideCurtain1 = this.add.sprite(game.config.width/1.05, 200, "SpriteStall", "curtain.png");
        my.sprite.sideCurtain1.flipX = true;
        my.sprite.topCurtain = this.add.sprite(game.config.width/3, 30, "SpriteStall", "curtain_top.png");
        my.sprite.topCurtain = this.add.sprite(game.config.width/1.72, 30, "SpriteStall", "curtain_top.png");
        my.sprite.topCurtain = this.add.sprite(game.config.width/11.5, 30, "SpriteStall", "curtain_top.png");
        my.sprite.topCurtain = this.add.sprite(664, 30, "SpriteStall", "curtain_top.png");
        my.sprite.topCurtain = this.add.sprite(863, 30, "SpriteStall", "curtain_top.png");

        //Background Stand
        my.sprite.Stand = this.add.sprite(game.config.width/1.03, 650, "SpriteStall", "bg_green.png");
        my.sprite.Stand = this.add.sprite(game.config.width/1.53, 650, "SpriteStall", "bg_green.png");
        my.sprite.Stand = this.add.sprite(game.config.width/3, 650, "SpriteStall", "bg_green.png");
        my.sprite.Stand = this.add.sprite(game.config.width/6.23, 650, "SpriteStall", "bg_green.png");
 
        // update HTML description
        document.getElementById('description').innerHTML = '<h2>Credits </h2><br>S: to return to Start'

        //Text Eleemnts
        my.sprite.GameOver = this.add.sprite(400,200, "SpriteHud", "text_gameover.png");
        my.sprite.score = this.add.sprite(400,300, "SpriteHud", "text_score.png");
        my.sprite.duck = this.add.sprite(400,500,"SpriteObj", "duck_yellow.png");
        my.sprite.hole = this.add.sprite(350,130,"SpriteObj", "shot_grey_large.png");
        my.sprite.hole = this.add.sprite(660,200,"SpriteObj", "shot_grey_large.png");
        my.sprite.hole = this.add.sprite(200,400,"SpriteObj", "shot_grey_large.png");
        my.sprite.gun = this.add.sprite(600, 400, "SpriteObj", "rifle.png");
        my.sprite.scoreNumber1 = this.add.sprite(370,400, "SpriteHud", "text_0.png");
        my.sprite.scoreNumber2 = this.add.sprite(420,400, "SpriteHud", "text_0.png");
    }

    update() {
        let my = this.my;

        if (Phaser.Input.Keyboard.JustDown(this.nextScene)) {
            this.scene.start("start");
        }
    }
}
         