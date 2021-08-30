// initialize context
kaboom();

//set our constants, speeds
const MOVE_SPEED = 200;
let INVADER_SPEED = 100;
let CURRENT_SPEED = INVADER_SPEED;
const LEVEL_DOWN = 100;
const STAR_SPEED = 32;

// load assets
loadSprite("space-invader2", "sprites/space-invader2.png");
loadSprite("space-invader", "sprites/space-invader.png");
loadSprite("space-ship", "sprites/space-ship.png");
loadSprite("stars", "sprites/stars.png");
loadSprite("wall", "sprites/wall.png");
loadSound("invaders", "sounds/invaders.mp3");
loadSound("stageClear", "sounds/stageClear.mp3");
loadSound("gameOver", "sounds/gameOver.mp3");
loadSound("pew", "sounds/pew.mp3");
loadSound("splode", "sounds/splode.mp3");



scene("main", () => {

//add the music
const music = play('invaders');
music.loop();

  add([
    rect(width(), height()),
    color(0,0,0,1),
  ]);


  addLevel([
    '!                &',
    '!^@^@^@^@^@      &',
    '!@^@^@^@^@^      &',
    '!^@^@^@^@^@      &',
    '!                &',
    '!                &',
    '!                &',
    '!                &',
    '!                &',
    '!                &',
    '!                &',
    '!                &',
    '!                &',
    '!                &',
    '!                &',
    '!                &',
    '!                &',
    '!                &',
    '!                &',
    '!                &',
    '!                &',
  ], {
    width: 30,
    height: 22,
    '^' : [ sprite('space-invader'), scale(0.5), 'space-invader'],
    '@' : [ sprite('space-invader2'), scale(0.5), 'space-invader'],
    '!' : [ sprite('wall'), 'left-wall'],
    '&' : [ sprite('wall'), 'right-wall']
    
  })

//player is spaceship
const player = add([
  sprite('space-ship'),
  pos(width() / 2, height() - 16),
  origin('center')
]); 

//move player left
  keyDown('left', () => {
    player.move(-MOVE_SPEED, 0);
    if(player.pos.x < 40) {
      player.pos.x = 40;
    }
  })

  //move player right
  keyDown('right', () => {
    player.move(MOVE_SPEED, 0);
    if(player.pos.x > width()-20){
      player.pos.x = width()-20;
    }
  })
})

go("main");