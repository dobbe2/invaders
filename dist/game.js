(()=>{kaboom();var s=200;loadSprite("space-invader2","sprites/space-invader2.png");loadSprite("space-invader","sprites/space-invader.png");loadSprite("space-ship","sprites/space-ship.png");loadSprite("stars","sprites/stars.png");loadSprite("wall","sprites/wall.png");loadSound("invaders","sounds/invaders.mp3");loadSound("stageClear","sounds/stageClear.mp3");loadSound("gameOver","sounds/gameOver.mp3");loadSound("pew","sounds/pew.mp3");loadSound("splode","sounds/splode.mp3");scene("main",()=>{play("invaders").loop(),add([rect(width(),height()),color(0,0,0,1)]),addLevel(["!                &","!^@^@^@^@^@      &","!@^@^@^@^@^      &","!^@^@^@^@^@      &","!                &","!                &","!                &","!                &","!                &","!                &","!                &","!                &","!                &","!                &","!                &","!                &","!                &","!                &","!                &","!                &","!                &"],{width:30,height:22,"^":[sprite("space-invader"),scale(.5),"space-invader"],"@":[sprite("space-invader2"),scale(.5),"space-invader"],"!":[sprite("wall"),"left-wall"],"&":[sprite("wall"),"right-wall"]});let e=add([sprite("space-ship"),pos(width()/2,height()-16),origin("center")]);keyDown("left",()=>{e.move(-s,0),e.pos.x<40&&(e.pos.x=40)}),keyDown("right",()=>{e.move(s,0),e.pos.x>width()-20&&(e.pos.x=width()-20)})});go("main");})();
//# sourceMappingURL=game.js.map
