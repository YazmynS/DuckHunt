class Level1 extends Phaser.Scene {
    constructor() {
        super("level1");
        // Initialize a class variable "my" which is an object.
        // The object has two properties, both of which are objects
        //  - "sprite" holds bindings (pointers) to created sprites
        //  - "text"   holds bindings to created bitmap text objects
        this.my = {sprite: {}, text: {}};
        // Create a property inside "sprite" named "bullet".
        // The bullet property has a value which is an array.
        // This array will hold bindings (pointers) to bullet sprites
        this.my.sprite.bullet = [];   
        this.maxBullets = 6;           // Don't create more than this many bullets
        this.my.sprite.breaks = [];
        this.maxBreaks = 1;
        // More typically want to use a global variable for score, since
        // it will be used across multiple scenes   
    }

    preload() {
        this.load.setPath("./assets/");
        
        //Load Duck Hunt Sprites
        this.load.atlasXML("SpriteHud", "Spritesheets/spritesheet_hud.png", "Spritesheets/spritesheet_hud.xml");
        this.load.atlasXML("SpriteObj", "Spritesheets/spritesheet_objects.png", "Spritesheets/spritesheet_objects.xml");
        this.load.atlasXML("SpriteStall", "Spritesheets/spritesheet_stall.png", "Spritesheets/spritesheet_stall.xml");

        // For animation
        this.load.image("whitePuff00", "whitePuff00.png");
        this.load.image("whitePuff01", "whitePuff01.png");
        this.load.image("whitePuff02", "whitePuff02.png");
        this.load.image("whitePuff03", "whitePuff03.png");

        // Load the Kenny Rocket Square bitmap font
        // This was converted from TrueType format into Phaser bitmap
        // format using the BMFont tool.
        // BMFont: https://www.angelcode.com/products/bmfont/
        // Tutorial: https://dev.to/omar4ur/how-to-create-bitmap-fonts-for-phaser-js-with-bmfont-2ndc
        this.load.bitmapFont("rocketSquare", "KennyRocketSquare_0.png", "KennyRocketSquare.fnt");

        // Sound asset from the Kenny Music Jingles pack
        // https://kenney.nl/assets/music-jingles
        this.load.audio("dadada", "jingles_NES13.ogg");
    }

    create() {
        let my = this.my;
        
        this.branch = false;
        this.myScore = 0;       // record a score as a class variable
        this.myTime = 90;
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

        //Duck Sprite Number 1
        my.sprite.duck1 = this.add.sprite(game.config.width/2, 170, "SpriteObj", "duck_target_white.png");
        my.sprite.duck1.setScale(1);
        my.sprite.duck1.scorePoints = 25;
        //Duck Stand
        my.sprite.dStand1 = this.add.sprite(my.sprite.duck1.x, my.sprite.duck1.y+110, "SpriteObj", "stick_wood.png");        

//Water
        my.sprite.water = this.add.sprite(70,300,"SpriteStall", "water2.png");
        my.sprite.water = this.add.sprite(200,300,"SpriteStall", "water2.png");
        my.sprite.water = this.add.sprite(330,300,"SpriteStall", "water2.png");
        my.sprite.water = this.add.sprite(460,300,"SpriteStall", "water2.png");
        my.sprite.water = this.add.sprite(590,300,"SpriteStall", "water2.png");
        my.sprite.water = this.add.sprite(720,300,"SpriteStall", "water2.png");

//Background Curtain Set Up
        my.sprite.sideCurtain = this.add.sprite(game.config.width/12.5, 200, "SpriteStall", "curtain.png");
        my.sprite.sideCurtain1 = this.add.sprite(game.config.width/1.05, 200, "SpriteStall", "curtain.png");
        my.sprite.sideCurtain1.flipX = true;
        my.sprite.topCurtain = this.add.sprite(game.config.width/3, 30, "SpriteStall", "curtain_top.png");
        my.sprite.topCurtain = this.add.sprite(game.config.width/1.72, 30, "SpriteStall", "curtain_top.png");
        my.sprite.topCurtain = this.add.sprite(game.config.width/11.5, 30, "SpriteStall", "curtain_top.png");
        my.sprite.topCurtain = this.add.sprite(664, 30, "SpriteStall", "curtain_top.png");
        my.sprite.topCurtain = this.add.sprite(863, 30, "SpriteStall", "curtain_top.png");

//Game Objects       
        //Duck Sprite Number 2
        my.sprite.duck2 = this.add.sprite(game.config.width/4, 320, "SpriteObj", "duck_target_yellow.png");
        my.sprite.duck2.setScale(1);
        my.sprite.duck2.scorePoints = 25;
        //Duck Stand
        my.sprite.dStand2 = this.add.sprite(my.sprite.duck2.x, my.sprite.duck2.y+110, "SpriteObj", "stick_wood.png");


        //Water2
        my.sprite.water = this.add.sprite(67,450,"SpriteStall", "water2.png");
        my.sprite.water = this.add.sprite(199,450,"SpriteStall", "water2.png");
        my.sprite.water = this.add.sprite(329,450,"SpriteStall", "water2.png");
        my.sprite.water = this.add.sprite(459,450,"SpriteStall", "water2.png");
        my.sprite.water = this.add.sprite(589,450,"SpriteStall", "water2.png");
        my.sprite.water = this.add.sprite(719,450,"SpriteStall", "water2.png");
        my.sprite.water = this.add.sprite(839,450,"SpriteStall", "water2.png");

        //Background Stand
        my.sprite.Stand = this.add.sprite(game.config.width/1.03, 650, "SpriteStall", "bg_green.png");
        my.sprite.Stand = this.add.sprite(game.config.width/1.53, 650, "SpriteStall", "bg_green.png");
        my.sprite.Stand = this.add.sprite(game.config.width/3, 650, "SpriteStall", "bg_green.png");
        my.sprite.Stand = this.add.sprite(game.config.width/6.23, 650, "SpriteStall", "bg_green.png");
        
        //player sprite
         my.sprite.gun = this.add.sprite(game.config.width/2, game.config.height - 40, "SpriteObj", "rifle.png");
         my.sprite.gun.setScale(0.60);

        //Tree Sprite
        my.sprite.tree = this.add.sprite(game.config.width/3, 170, "SpriteStall", "tree_oak.png");
        my.sprite.tree.setScale(0.40);
        my.sprite.tree.scorePoints = -25;
        
        //Health Bar
        my.sprite.healthEmpty1 = this.add.sprite(game.config.width/27.1, game.config.height - 20, "SpriteHud", "icon_bullet_empty_short.png");
        my.sprite.health1 = this.add.sprite(game.config.width/27.1, game.config.height - 20, "SpriteHud", "icon_bullet_gold_short.png");
        
        my.sprite.healthEmpty2 = this.add.sprite(game.config.width/14.1, game.config.height - 20, "SpriteHud", "icon_bullet_empty_short.png");
        my.sprite.health2 = this.add.sprite(game.config.width/14.1, game.config.height - 20, "SpriteHud", "icon_bullet_gold_short.png");

        my.sprite.healthEmpty3 = this.add.sprite(game.config.width/9.6, game.config.height - 20, "SpriteHud", "icon_bullet_empty_short.png");
        my.sprite.health3 = this.add.sprite(game.config.width/9.6, game.config.height - 20, "SpriteHud", "icon_bullet_gold_short.png");
       
        //crosshair
        my.sprite.aim = this.add.sprite(my.sprite.gun.x - 40, 200, "SpriteHud","crosshair_blue_small.png");

//Text Setup
        //Score Text
        my.sprite.Score = this.add.sprite(game.config.width/1.3, 30, "SpriteHud", "text_score_small.png");
        my.sprite.Score = this.add.sprite(690.30, "SpriteHud", "text_dots_small.png")
        my.sprite.ScoreDigit1 = this.add.sprite(710, 30, "SpriteHud", "text_0_small.png");
        my.sprite.SecondDigit2 = this.add.sprite(740, 30, "SpriteHud", "text_0_small.png");
        //Time Text
        my.sprite.TimesUp = this.add.sprite(400, 300, "SpriteHud", "text_timeup.png");
        my.sprite.TimeDigit1 = this.add.sprite(750, game.config.height - 20, "SpriteHud", "text_9_small.png");
        my.sprite.TimeDigit2 = this.add.sprite(780, game.config.height - 20, "SpriteHud", "text_0_small.png");
        my.sprite.TimesUp.visible = false;
        // Notice that in this approach, we don't create any bullet sprites in create(),
        // and instead wait until we need them, based on the number of space bar presses

        // Create white puff animation
        this.anims.create({
            key: "puff",
            frames: [
                { key: "whitePuff00" },
                { key: "whitePuff01" },
                { key: "whitePuff02" },
                { key: "whitePuff03" },
            ],
            frameRate: 20,    // Note: case sensitive (thank you Ivy!)
            repeat: 5,
            hideOnComplete: true
        });

        // Create key objects
        this.left = this.input.keyboard.addKey("A");
        this.right = this.input.keyboard.addKey("D");
        this.nextScene = this.input.keyboard.addKey("S");
        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

        // Set movement speeds (in pixels/tick)
        this.playerSpeed = 5;
        this.bulletSpeed = 50;

        // update HTML description
        document.getElementById('description').innerHTML = '<h2>Level 1</h2><br>A: left // D: right // Space: fire // S: End Game'

        // Put score on screen
        my.text.score = this.add.bitmapText(580, 0, "rocketSquare", "Score " + this.myScore);

        // Put title on screen
        this.add.text(10, 5, "Duck Hunt!", {
            fontFamily: 'Times, serif',
            fontSize: 24,
            wordWrap: {
                width: 60
            }
        });
    }

//Breaks function
    breaks() {
        let my = this.my;
        //Make Branches fly off
        this.breaks.visisble = true;
        for( let breaks of my.sprite.breaks)
        {
            breaks.y += 8;
            
            if (breaks.y > 600)
            {
                breaks.y = my.sprite.tree.y;
                breaks.x = my.sprite.tree.x;
                this.branch = false;
            }
        }
    };

    update() {
        let my = this.my;
        
        //Move Crosshair with gun
        my.sprite.aim.x = my.sprite.gun.x - 40;

        // Moving left
        if (this.left.isDown) {
            // Check to make sure the sprite can actually move left
            if (my.sprite.gun.x > (my.sprite.gun.displayWidth/2)) {
                my.sprite.gun.x -= this.playerSpeed;
            }
        }

        // Moving right
        if (this.right.isDown) {
            // Check to make sure the sprite can actually move right
            if (my.sprite.gun.x < (game.config.width - (my.sprite.gun.displayWidth/2))) {
                my.sprite.gun.x += this.playerSpeed;
            }
        }

        // Check for bullet being fired
        if (Phaser.Input.Keyboard.JustDown(this.space)) {
            // Are we under our bullet quota?
            
            if (my.sprite.bullet.length < this.maxBullets) {
                my.sprite.bullet.push(this.add.sprite(
                    my.sprite.gun.x-40, my.sprite.gun.y-(my.sprite.gun.displayHeight/2), "SpriteHud", "icon_bullet_silver_long.png"))        
            }
        }
         // Check for branches being fired
            // Are we under our bullet quota?
            if (my.sprite.breaks.length < this.maxBreaks) {
                my.sprite.breaks.push(this.add.sprite(
                    my.sprite.tree.x, my.sprite.tree.y-(my.sprite.tree.displayHeight/2), "SpriteObj", "stick_wood_broken.png"))        
            }
        

        // Remove all of the bullets which are offscreen
        // filter() goes through all of the elements of the array, and
        // only returns those which **pass** the provided test (conditional)
        // In this case, the condition is, is the y value of the bullet
        // greater than zero minus half the display height of the bullet? 
        // (i.e., is the bullet fully offscreen to the top?)
        // We store the array returned from filter() back into the bullet
        // array, overwriting it. 
        // This does have the impact of re-creating the bullet array on every 
        // update() call. 
        my.sprite.bullet = my.sprite.bullet.filter((bullet) => bullet.y > -(bullet.displayHeight/2));
        
        // Check for collision with the duck
        for (let bullet of my.sprite.bullet) {
            bullet.setScale(0.5); 
            bullet.visible = false;
            if (this.collides(my.sprite.duck1, bullet)) {
                // start animation
                this.puff = this.add.sprite(my.sprite.duck1.x, my.sprite.duck1.y, "whitePuff03").setScale(0.25).play("puff");
                // clear out bullet -- put y offscreen, will get reaped next update
                bullet.y = -100;
                my.sprite.duck1.visible = false;
                my.sprite.duck1.x = -100;
                // Update score
                this.myScore += my.sprite.duck1.scorePoints;
                this.updateScore();
                // Play sound
                this.sound.play("dadada", {
                    volume: 1   // Can adjust volume using this, goes from 0 to 1
                });
                // Have new duck appear after end of animation
                this.puff.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
                    this.my.sprite.duck1.visible = true;
                    this.my.sprite.duck1.x = Math.random()*config.width - 50;
                    this.my.sprite.dStand1.x = Math.random()*config.width - 50;
                    
                }, this);
            }
            else  if (this.collides(my.sprite.duck2, bullet)) {
                // start animation
                this.puff = this.add.sprite(my.sprite.duck2.x, my.sprite.duck2.y, "whitePuff03").setScale(0.25).play("puff");
                // clear out bullet -- put y offscreen, will get reaped next update
                bullet.y = -100;
                my.sprite.duck2.visible = false;
                my.sprite.duck2.x = -100;
                // Update score
                this.myScore += my.sprite.duck2.scorePoints;
                this.updateScore();
                // Play sound
                this.sound.play("dadada", {
                    volume: 1   // Can adjust volume using this, goes from 0 to 1
                });
                // Have new duck appear after end of animation
                this.puff.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
                    this.my.sprite.duck2.visible = true;
                    this.my.sprite.duck2.x = Math.random()*config.width - 10;
                }, this);
            }
        }
        //check for collision with tree      
        for (let bullet of my.sprite.bullet) {
            if (this.collides(my.sprite.tree, bullet)) {
                // start animation
                this.puff = this.add.sprite(my.sprite.tree.x, my.sprite.tree.y, "whitePuff03").setScale(0.25).play("puff");
                // clear out bullet -- put y offscreen, will get reaped next update
                bullet.y = -100;
                my.sprite.tree.visible = false;
                my.sprite.tree.x = -100;
                // Update score
                this.myScore += my.sprite.tree.scorePoints;
                this.updateScore();
                // Play sound
                this.sound.play("dadada", {
                    volume: 1   // Can adjust volume using this, goes from 0 to 1    
                }
                );    
                this.branch = true;   
                // Have new tree appear after end of animation
                this.puff.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
                    this.my.sprite.tree.visible = true;
                    this.my.sprite.tree.x = Math.random()*config.width - 10;
                }, this);
            }
        }
        if (this.branch == true){
            this.breaks();
        }
        else 
        { 
            for (let breaks of my.sprite.breaks)
            {
                breaks.y = my.sprite.tree.y;
                breaks.x = my.sprite.tree.x;
            }
        }

        //check for collision with player
        for (let breaks of my.sprite.breaks) {
            if (this.collides(my.sprite.gun, breaks)) {
                // start animation
                this.puff = this.add.sprite(my.sprite.gun.x, my.sprite.gun.y, "whitePuff03").setScale(0.25).play("puff");
                // clear out bullet -- put y offscreen, will get reaped next update
                breaks.y = -100;
               
                this.branch = false;
               if (my.sprite.health1.visible == true)
                {
                    my.sprite.health1.visible = false;
                }
                else if (my.sprite.health2.visible == true)
                {
                    my.sprite.health2.visible = false;
                }
                else
                {
                    this.scene.start("end");
                }    
               
                // Update score
                this.myScore += my.sprite.tree.scorePoints;
                this.updateScore();
                // Play sound
                this.sound.play("dadada", {
                    volume: 1   // Can adjust volume using this, goes from 0 to 1    
                }
                );       
   
                // Have new tree appear after end of animation
                this.puff.on(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
                    this.my.sprite.tree.visible = true;
                    this.my.sprite.tree.x = Math.random()*config.width;
                }, this);
            }
        }

        // Make all of the bullets move
        for (let bullet of my.sprite.bullet) {
            bullet.y -= this.bulletSpeed;
        }

        if (Phaser.Input.Keyboard.JustDown(this.nextScene)) {
            this.scene.start("level2");
        }

    }

    // A center-radius collision check
    collides(a, b) {
        if (Math.abs(a.x - b.x) > (a.displayWidth/2 + b.displayWidth/2)) return false;
        if (Math.abs(a.y - b.y) > (a.displayHeight/2 + b.displayHeight/2)) return false;
        return true;
    }

    updateScore() {
        let my = this.my;
        my.text.score.setText("Score " + this.myScore);
    }

}
         
//1.) I want the tree to shoot 3 branches when hit
//2.) I want the tree to shoot a single branch 2 seconds after being summoned before disappearing
//3.) I want the ducks and trees to move up out of the water stay for 2 seconds and retreat back into the water
//4.) I want to make Score match the text 
//Make ducks/trees not get to close to the right side of the screen
//In level to I want everything level one has but the ducks move up and down and to the left and right in a wave like motion
