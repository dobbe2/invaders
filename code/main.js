// initialize context
kaboom();

//set our constants, speeds
const MOVE_SPEED = 200;
let INVADER_SPEED = 100;
let CURRENT_SPEED = INVADER_SPEED;
const LEVEL_DOWN = 100;
const STAR_SPEED = 132;

//layers of the game board
layer(['obj', 'ui'], 'obj')

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
//loop incase level lasts longer than 45 seconds
// music.loop();

//background black as space!
  add([
    rect(width(), height()),
    color(0,0,0,1),
  ]);
//add stars
  add([
		sprite("stars"),
		scale(width() / 580, height() / 580),
		pos(50, 0),
		"stars",
	]);

	add([
		sprite("stars"),
		scale(width() / 680, height() / 680),
		pos(100, 80),
		"stars",
	]);

  add([
		sprite("stars"),
		scale(width() / 580, height() / 580),
		pos(150, 120),
		"stars",
	]);

	add([
		sprite("stars"),
		scale(width() / 680, height() / 680),
		pos(200, 260),
		"stars",
	]);

action("stars", (r) => {
		r.move(0, STAR_SPEED);
		if (r.pos.y >= height()) {
			r.pos.y -= height() * 2;
		}
	});

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
    '^' : [ sprite('space-invader'), scale(0.5), 'space-invader', layer("ui")],
    '@' : [ sprite('space-invader2'), scale(0.5), 'space-invader', layer("ui")],
    '!' : [ sprite('wall'), layer("ui"), 'left-wall'],
    '&' : [ sprite('wall'), layer("ui"), 'right-wall']
    
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

  //fire bullet
  function spawnBullet(p){
  add([
    rect(4,12), 
    pos(p), 
    origin('center'), 
    color(rand(rgb(0, 0, 0), rgb(1, 1, 1))), 
    'bullet'
    ])
}
//fire bullets
keyPress('space', () => {
  spawnBullet(player.pos.add(0, -17))
})

const BULLET_SPEED = 400
//move bullet
action('bullet', (b) => {
  b.move(0, -BULLET_SPEED)
  if(b.pos.y < 0) {
    destroy(b);
  }
})

  //move invaders
  action('space-invader', (s) => {
  s.move(CURRENT_SPEED, 0)
})

//right wall collision and reverse
// collides('space-invader', 'right-wall', () => {
//   CURRENT_SPEED = -INVADER_SPEED
//   every('space-invader', (s) => {
//      s.move(0, LEVEL_DOWN);
//   })
// })

})

go("main");