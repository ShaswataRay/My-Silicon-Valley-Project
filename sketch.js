var PLAY = 1;
var END = 0;
var gameState

var bgImg;
var edges;
var blank;

//Hulk 
var hulk;
var hulkStanding;
var hulkWalking;
var hulkSmash;
var hulkPunch;

var evilCraig, evilCraigIdle, evilCraigRunning, evilCraigPunchStomp, evilCraigStomp, evilCraigDie;
var zombie, zombie_1, zombie_2, zombie_3, zombie_4, zombieBike;

//IronMan
var ironMan, ironManImg;
var ironManFireBeam, ironManFireBeamImg;
var ironManMissile, ironManMissileImg;
var ironManShooting;

var airPollution, airPollutionImg;
var cleanAir, cleanAirImg;
var pollutionBullets, pollutionBulletsImg;
var boom;

var dragon, dragonAni;
var dragonBeam, dragonBeamAni;

var earthSaved, earthSavedImg;
var ironManDone, ironManDoneImg;


//Aquaman
var aquaman, aquamanImg;
var tridentSpinBlockAni;
var trident, tridentAni;
var tridentStrikeAni;
var aquamanSwimmingAni;

var aquamanBarrier;

var sharkGarbage, sharkGarbageAni;
var dolphin1, dolphin2, dolphin1Ani, dolphin2Ani;

var godzilla, godzillaAni;
var atomicBlast, atomicBlastAni;

//Ground
var ground;

//Buttons
var hulkButton;
var hulkGO;
var hulkBg;
var hulkGoBack, hulkGoBackImg;

var ironManButton;
var ironManGO;
var ironManBg;
var ironManGoBack, ironManGoBackImg;

var aquamanButton;
var aquamanGO;
var aquamanBg;
var aquamanGoBack, aquamanGoBackImg;

//HPs of every hero
var hulkHp = 10;
var ironManHp = 100;
var aquamanHp = 100;

//HealthKits of every hero
var health, healthImg;

//HPs of every boss
var hulkBossHp = 1000;
var ironManBossHp = 1000;
var aquamanBossHp = 1000;

//Groups
var ironManFireBeamGroup, ironManMissileGroup;
var cleanAirGroup, airPollutionGroup; 
var dragonBeamGroup;

var zombieGroup;
var healthGroup;

var sharkGarbageGroup, dolphin1Group, dolphin2Group;
var tridentGroup, tridentLeftGroup;
var atomicBlastGroup;

// Creating frames for every stage to spawn bosses at times only!
var hulkFrame = 0;
var ironFrame = 0;
var aquaFrame = 0;

//Music
var gameStartMusic;
var ironManMissileMusic, ironManFireBeamMusic, dragonFlap;
var hulkSmashSound, hulkPunchSound;
var tridentThrowSound, tridentSpinWhooshSound, atomicBlastSound;

//AFTER GAME ENDS
var cleanEarth, cleanEarthImg;

function preload(){
  bgImg = loadImage("bg/bg.jpg");
  cleanEarthImg = loadImage("cleanEarth.png");

  hulkGoBackImg = loadImage("buttonImg/goBack.png");
  ironManGoBackImg = loadImage("buttonImg/goBack.png");
  aquamanGoBackImg = loadImage("buttonImg/goBack.png");

  healthImg = loadImage("health.png");

  //Preloading music
  gameStartMusic = loadSound("avengersGameStartOption.wav");
  hulkSmashSound = loadSound("hulkSmash.mp3");
  hulkPunchSound = loadSound("hulkPunch.mp3");
  ironManMissileMusic = loadSound("missile.mp3");
  ironManFireBeamMusic = loadSound("repulsor.wav");
  dragonFlap = loadSound("dragonFlap.wav");
  tridentThrowSound = loadSound("tridentThrow.wav");
  tridentSpinWhooshSound = loadSound("tridentSpin1Whoosh.mp3");
  atomicBlastSound = loadSound("atomicLightning.mp3");


  //HEROES
  //HULK

  hulkStanding = loadAnimation("landPollution/hulkWalking5.png");

  hulkWalking = loadAnimation("landPollution/hulkWalking1.png", "landPollution/hulkWalking2.png", "landPollution/hulkWalking3.png",
  "landPollution/hulkWalking4.png", "landPollution/hulkWalking5.png", "landPollution/hulkWalking6.png","landPollution/hulkWalking7.png");

  hulkPunch = loadAnimation("landPollution/hulkPunch1.png", "landPollution/hulkPunch2.png", 
  "landPollution/hulkPunch3.png", "landPollution/hulkPunch4.png");

  hulkSmash = loadAnimation("landPollution/hulkSmash1.png","landPollution/hulkSmash2.png","landPollution/hulkSmash3.png",
  "landPollution/hulkSmash4.png","landPollution/hulkSmash5.png");

  hulkBg = loadImage("bg/hulkBg_2.jpg");

   //IronMan
  ironManImg = loadAnimation("airPollution/IronManFlying.png");
  ironManShooting = loadAnimation("airPollution/IronManShooting.png");
  ironManFireBeamImg = loadImage("airPollution/FIRE BEAM.png");
  ironManMissileImg = loadImage("airPollution/IRONMAN MISSILE.png");

  earthSavedImg = loadImage("airPollution/earthSaved.png");
  ironManDoneImg = loadImage("airPollution/ironManDone.png");

  ironManBg = loadImage("bg/ironManBg_1.jpg");

  dragonAni = loadAnimation("airPollution/dragon_1.png", "airPollution/dragon_2.png", 
  "airPollution/dragon_3.png", "airPollution/dragon_4.png", "airPollution/dragon_5.png", 
  "airPollution/dragon_6.png", "airPollution/dragon_7.png");

  dragonBeamAni = loadAnimation("airPollution/dragonBeam.png");

  // IronMan Opponents
  airPollutionImg = loadImage("airPollution/AIR_POLLUTION_1.png");
  cleanAirImg = loadImage("airPollution/CLEAN_AIR.png");
  boom = loadAnimation("airPollution/BOOM.png");


  //Aquaman
  aquamanAni = loadAnimation("waterPollution/aquamanStanding.png");
  tridentAni = loadAnimation("waterPollution/tridentStrikeTrident-4.png");
 
  tridentStrikeAni = loadAnimation("waterPollution/tridentStrike_1.png", "waterPollution/tridentStrike_1 - 2.png", 
  "waterPollution/tridentStrike_2.png","waterPollution/tridentStrike_2_1.png",  "waterPollution/tridentStrike_3.png", "waterPollution/tridentStrike_5.png");

   aquamanSwimmingAni = loadAnimation("waterPollution/Swimming_1.png", "waterPollution/Swimming_2.png", "waterPollution/Swimming_3.png", "waterPollution/Swimming_4.png",
   "waterPollution/Swimming_5.png", "waterPollution/Swimming_6.png", "waterPollution/Swimming_7.png", "waterPollution/Swimming_8.png");

   tridentSpinBlockAni = loadAnimation("waterPollution/tridentSpin_1.png", "waterPollution/tridentSpin_2.png", "waterPollution/tridentSpin_3.png"
   , "waterPollution/tridentSpin_4.png", "waterPollution/tridentSpin_5.png", "waterPollution/tridentSpin_6.png"
   , "waterPollution/tridentSpin_7.png", "waterPollution/tridentSpin_8.png");

  aquamanBg = loadImage("bg/aquamanBg_1.jpg");


  //EVIL
  //HULK EVIL
  evilCraigIdle = loadImage('landPollution/Evil/craigMullins-idle.png', "landPollution/Evil/craigMullins-idle_2.png");

  evilCraigRunning = loadAnimation("landPollution/Evil/craigMullins-running0.png", "landPollution/Evil/craigMullins-running1.png", "landPollution/Evil/craigMullins-running2.png",
   "landPollution/Evil/craigMullins-running4.png", "landPollution/Evil/craigMullins-running5.png", "landPollution/Evil/craigMullins-running6.png", "landPollution/Evil/craigMullins-running7.png");

   evilCraigPunchStomp = loadAnimation("landPollution/Evil/craigMullins-punchStomp_1.png", "landPollution/Evil/craigMullins-punchStomp_2.png", "landPollution/Evil/craigMullins-punchStomp_3.png",
   "landPollution/Evil/craigMullins-punchStomp_4.png", "landPollution/Evil/craigMullins-punchStomp_5.png", "landPollution/Evil/craigMullins-punchStomp_6.png",);

   evilCraigStomp = loadAnimation("landPollution/Evil/craigMullins-stompStomp_1.png", "landPollution/Evil/craigMullins-stompStomp_2.png", "landPollution/Evil/craigMullins-stompStomp_3.png",
   "landPollution/Evil/craigMullins-stompStomp_4.png", "landPollution/Evil/craigMullins-stompStomp_5.png", "landPollution/Evil/craigMullins-stompStomp_6.png",);

   evilCraigDie = loadAnimation("landPollution/Evil/craigMullins-death01.png", "landPollution/Evil/craigMullins-death02.png", 
   "landPollution/Evil/craigMullins-death03.png", "landPollution/Evil/craigMullins-death04.png", "landPollution/Evil/craigMullins-death05.png", 
   "landPollution/Evil/craigMullins-death06.png", );


  zombie_1 = loadAnimation("landPollution/Evil/zombie1_running_1.png", "landPollution/Evil/zombie1_running_2.png", 
  "landPollution/Evil/zombie1_running_3.png", "landPollution/Evil/zombie1_running_4.png", "landPollution/Evil/zombie1_running_5.png", 
  "landPollution/Evil/zombie1_running_6.png");

  zombie_2 = loadAnimation("landPollution/Evil/zombie2_running_1.png", "landPollution/Evil/zombie2_running_2.png",
  "landPollution/Evil/zombie2_running_3.png");

  zombie_3 = loadAnimation("landPollution/Evil/zombie3_running_1.png", "landPollution/Evil/zombie3_running_2.png", 
  "landPollution/Evil/zombie3_running_3.png", "landPollution/Evil/zombie3_running_4.png", "landPollution/Evil/zombie3_running_5.png", 
  "landPollution/Evil/zombie3_running_6.png", );

  zombie_4 = loadAnimation("landPollution/Evil/zombie4_running.png");

  zombieBike = loadAnimation("landPollution/Evil/zombieMotorBike.png");

  //AQUAMAN EVIL
  sharkGarbageAni = loadAnimation("waterPollution/Evil/shark_1.png", "waterPollution/Evil/shark_2.png", 
  "waterPollution/Evil/shark_3.png", "waterPollution/Evil/shark_4.png", "waterPollution/Evil/shark_5.png");

  dolphin1Ani = loadImage("waterPollution/dolphinH.png");
  dolphin2Ani = loadImage("waterPollution/dolphinParty.png");

  godzillaAni = loadAnimation("waterPollution/Evil/godzilla_1.png", "waterPollution/Evil/godzilla_2.png", 
  "waterPollution/Evil/godzilla_3.png", "waterPollution/Evil/godzilla_4.png", 
  "waterPollution/Evil/godzilla_5.png", "waterPollution/Evil/godzilla_6.png", 
  "waterPollution/Evil/godzilla_7.png", "waterPollution/Evil/godzilla_8.png");

  atomicBlastAni = loadAnimation("waterPollution/Evil/godzillaAtomicBlast_1.png", "waterPollution/Evil/godzillaAtomicBlast_2.png", 
  "waterPollution/Evil/godzillaAtomicBlast_3.png", "waterPollution/Evil/godzillaAtomicBlast_4.png", 
  "waterPollution/Evil/godzillaAtomicBlast_5.png", "waterPollution/Evil/godzillaAtomicBlast_6.png", 
  "waterPollution/Evil/godzillaAtomicBlast_7.png", "waterPollution/Evil/godzillaAtomicBlast_8.png", 
  "waterPollution/Evil/godzillaAtomicBlast_9.png", "waterPollution/Evil/godzillaAtomicBlast_10.png", 
  "waterPollution/Evil/godzillaAtomicBlast_11.png");

  }
function setup() {
  createCanvas(1536,720);
  cleanEarth = createSprite(750, 450, 40, 40);
  cleanEarth.addImage(cleanEarthImg);
  cleanEarth.scale = 0.8;
  cleanEarth.visible = false;

  // creating Groups
  airPollutionGroup = new Group();
  cleanAirGroup = new Group();
  ironManFireBeamGroup = new Group();
  ironManMissileGroup = new Group();
  zombieGroup = new Group();
  healthGroup = new Group();
  dragonBeamGroup = new Group();
  sharkGarbageGroup = new Group();
  dolphin1Group = new Group();
  dolphin2Group = new Group();
  tridentGroup = new Group();
  atomicBlastGroup = new Group();

  //Hero buttons (using buttons)
  hulkButton = createImg('landPollution/hulkButton.png');
  ironManButton = createImg('airPollution/ironManButton1.jpg');
  aquamanButton = createImg('waterPollution/aquamanButton.jpg');

  //GO BACK buttons (using sprites)
  hulkGoBack = createSprite(1450, 650, 60, 20);
  hulkGoBack.addImage(hulkGoBackImg);
  hulkGoBack.scale = 0.2;
  hulkGoBack.visible = false;

  ironManGoBack = createSprite(1450, 650, 60, 20);
  ironManGoBack.addImage(ironManGoBackImg);
  ironManGoBack.scale = 0.2;
  ironManGoBack.visible = false;

  aquamanGoBack = createSprite(1450, 650, 60, 20);
  aquamanGoBack.addImage(aquamanGoBackImg);
  aquamanGoBack.scale = 0.2;
  aquamanGoBack.visible = false;

  //Story Buttons
  //ironManGO = createButton("GO");
  //ironManGO.hide();

  //aquamanGO = createButton("GO");
  //aquamanGO.hide();
  
  // Ground
  ground = createSprite(900, 610, 2000, 20);
  ground.visible = false;

  //Hulk[
  hulk = createSprite(400, 200, 50, 50);
  hulk.scale = 0.4;
  hulk.visible = false;
  //hulk.debug =true;

  hulk.addAnimation("hulk", hulkStanding);
  hulk.addAnimation("hulkWalk", hulkWalking);
  hulk.addAnimation("hulkPunching", hulkPunch);
  hulk.addAnimation("hulkSmash", hulkSmash);

  //hulkEvil
  evilCraig = createSprite(900, 100, 20, 20);
  evilCraig.scale = 0.5;
  evilCraig.visible = false;

  evilCraig.addAnimation("evilCraigIdling", evilCraigIdle);
  evilCraig.addAnimation("evilCraigStomping", evilCraigStomp);
  evilCraig.addAnimation("evilCraigPunching", evilCraigPunchStomp);
  evilCraig.addAnimation("evilCraigRun", evilCraigRunning);
  //Hulk]

  
  //IronMan[
  ironMan = createSprite(500, 300, 30, 50);
  ironMan.visible = false;
  ironMan.scale = 0.8;
  ironMan.addAnimation("ironman",ironManImg);
  ironMan.addAnimation("ironmanShoot",ironManShooting);

  earthSaved = createSprite(1280, 450, 50, 50);
  earthSaved.addImage(earthSavedImg);
  earthSaved.visible = false;
  earthSaved.scale = 1;

  ironManDone = createSprite(200, 600, 50, 50);
  ironManDone.addImage(ironManDoneImg);
  ironManDone.scale = 0.7;
  ironManDone.visible = false;

  //ironManEvil
  dragon = createSprite(1300, 50, 50, 50);
  dragon.addAnimation("dragonStand", dragonAni);
  dragon.scale = 0.6;
  dragon.visible = false;
  //dragon.debug = true;
  dragon.setCollider("rectangle", -80, 0, 400, 500);
  //IronMan]


  //Aquaman[
  aquaman = createSprite(400, 400, 50, 50);
  aquaman.visible = false;
  aquaman.scale = 0.6;

  aquaman.addAnimation("aquamanStanding", aquamanAni);
  aquaman.addAnimation("aquamanSwimming", aquamanSwimmingAni);
  aquaman.addAnimation("tridentStriking", tridentStrikeAni);
  aquaman.addAnimation("tridentSpinning", tridentSpinBlockAni);

  //aquamanEvil
  godzilla = createSprite(1300, 50, 50, 50);
  godzilla.addAnimation("godzillaStand", godzillaAni);
  godzilla.scale = 0.8;
  godzilla.visible = false;
  //Aquaman]


  //HPs
  hulkHp = 100;
  ironManHp = 100;
  aquamanHp = 100;

  hulkBossHp = 200;
  ironManBossHp = 500;
  aquamanBossHp = 300;

  gameState = "start";
  }

function draw(){
  drawSprites();

  if(gameState === "start"){
  background("skyblue");

  ironManButton.hide();
  hulkButton.hide();
  aquamanButton.hide();

  
  fill("black");
  textSize(20);
  text("Pollution: Pollution is the process of making land, water, air or other parts of the environment dirty and not safe or suitable to use.",50, 130);
  text("There are 3 main types of pollution: Air Pollution, Land Pollution, Water Pollution.",50, 155);

  text("Iron Man vs Air Pollution:",50, 205);
  text("Air pollution refers to the release of pollutants into the air that are detrimental to human health and the planet as a whole. ",50, 225);
  text("e.g: Burning fossil fuels (Coal), harmful emissions from factories, using petroleum, etc.",50, 246);
  text("Let us help Iron Man to fight against air pollution and create a cleaner atmosphere.",50, 267);

  text("Hulk vs Land Pollution:",50, 320);
  text("The deposition of solid or liquid waste materials on land in a manner that can contaminate the soil and groundwater, threaten to public health and nuisances.",50, 340);
  text("e.g: Deforestation, Soil Erosion, Construction Activities, Nuclear Waste, etc.",50, 360);
  text("Hulk is the one, who is willing to help but he needs our support. Help Hulk remove the garbage that cause land pollution and make a greener and cleaner surface.",50, 380);

  text("Aquaman vs Water Pollution:",50, 430);
  text("Water pollution occurs when harmful substances—often chemicals or microorganisms—contaminate a stream, river, lake, ocean, etc,",50, 450);
  text("degrading water quality and rendering it toxic to humans or the environment.",50, 470);
  text("e.g: Waste water, Oil Leaks and Spills, Leakage from Underground Storage, etc.",50, 490);
  text("Aquaman is the King of Atlantis and the Ocean Master, and I know he will definitely help us. “EVERY HERO NEEDS A COMMANDER”",50, 512);
  
  fill("red");
  textSize(30);
  text("LET THE GAME BEGIN!",550, 580);

  fill("red");
  textSize(25);
  text("Press the “enter” to start.",580, 610);

  textSize(40);
  fill("yellow");
  stroke("maroon");
  strokeWeight(6);
  text("Pollution : Endgame", 580, 50);

  
  if(keyDown("enter")){
    gameState = "gameStart";
    startMusic = createSprite(10, 10, 5, 5);
    startMusic.visible = false;
    gameStartMusic.play();
  }
}
  
  if(gameState === "gameStart"){
    background(bgImg); 

    hulkGoBack.visible = false;
    ironManGoBack.visible = false;
    aquamanGoBack.visible = false;

    textSize(70);
    fill("yellow");
    stroke("maroon");
    strokeWeight(10);
    text("Pollution : Endgame", 420, 180);

    ironManButton.show();
    hulkButton.show();
    aquamanButton.show();
    
  //Position and styling of the buttons
  ironManButton.position(300, 300);
  ironManButton.style('width', '250px');
  ironManButton.style('height', '180px');
  
  hulkButton.position(600, 300);
  hulkButton.style('width', '250px');
  hulkButton.style('height', '180px');
  
  aquamanButton.position(900, 300);
  aquamanButton.style('width', '250px');
  aquamanButton.style('height', '180px');

  hulkButton.mousePressed(function(){
  gameState = "hulkStartInitial"

      hulkButton.hide();
      ironManButton.hide();
      aquamanButton.hide();
      gameStartMusic.stop();
  })
  

  ironManButton.mousePressed(function(){
    gameState = 'ironManStartInitial';
    
    hulkButton.hide();
    ironManButton.hide();
    aquamanButton.hide();
    gameStartMusic.stop();
  })
 
  aquamanButton.mousePressed(function(){
    gameState = "aquamanStartInitial"

  hulkButton.hide();
  ironManButton.hide();
  aquamanButton.hide();
  gameStartMusic.stop();
})

}
  if(gameState === "hulkStartInitial"){
    hulkGOText();
  }

  if(gameState === "ironManStartInitial"){
    ironManGOText();
  }

  if(gameState === "aquamanStartInitial"){
    aquamanGOText();
  }



if(gameState==='hulkPlay'){
  background(hulkBg);
  hulkFrame = hulkFrame + 1;
  //console.log(hulkFrame);

  hulk.visible = true;
  hulkGO.visible = false;
  
  textSize(25);
  fill("white");
  text("Hp: " + hulkHp, 100, 100);

  //evilCraig.debug = true;
  evilCraig.setCollider("rectangle", 0, -50, 330, 450);
  
  // Giving velocities to hulk and boss so that, they stand on the ground
  hulk.velocityY = hulk.velocityY + 0.6;
  hulk.collide(ground);

  evilCraig.velocityY = evilCraig.velocityY + 0.9;
  evilCraig.collide(ground);
  
  //hulk.collide(evilCraig);

  //For changing boss animation
  rands = Math.round(random(1, 3));
  if(frameCount%90 === 0){
    switch(rands){
      case 1: evilCraig.changeAnimation("evilCraigIdling", evilCraigIdle);
      break;
      case 2: evilCraig.changeAnimation("evilCraigPunching", evilCraigPunchStomp); 
      break;
      case 3: evilCraig.changeAnimation("evilCraigStomping", evilCraigStomp);
      break;
      default: break;
    }

  }


  // Creating zombies at random positions
  ran = Math.round(random(1, 5));
  if(frameCount%10 === 0){
    //zombie.velocityX = 8;

    switch(ran){
      case 1: zombie = createSprite(1300, 530, 50, 50);
              zombie.addAnimation("zombie_1",zombie_1);
              zombie.velocityX = -8;
              zombie.scale = 0.4;
              //zombie.debug = true;
              zombie.setCollider("rectangle", 0, 0, 330, 450);
      break;
      case 2: zombie = createSprite(1300, 500, 50, 50);
              zombie.addAnimation("zombie_2", zombie_2);
              zombie.velocityX = -8;          
              zombie.scale = 0.4;
              //zombie.debug = true;
              zombie.setCollider("rectangle", 0, 0, 330, 450);
      break;
      case 3: zombie = createSprite(1300, 500, 50, 50);
              zombie.addAnimation("zombie_3", zombie_3);
              zombie.velocityX = -8;                        
              zombie.scale = 0.4;
              //zombie.debug = true;
              zombie.setCollider("rectangle", 0, 0, 330, 450);
      break;
      case 4: zombie = createSprite(1300, 530, 50, 50);
              zombie.addAnimation("zombie_4", zombie_4);
              zombie.velocityX = -8;     
              zombie.scale = 0.3;
              //zombie.debug = true;
              zombie.setCollider("rectangle", 0, 0, 330, 450);
      break;
      case 5: zombie = createSprite(1300, 530, 50, 50);
              zombie.addAnimation("zombieBiking", zombieBike);
              zombie.velocityX = -8;             
              zombie.scale = 0.4;
              //zombie.debug = true;
              zombie.setCollider("rectangle", 0, 0, 330, 450);
      break;
      default:break;
    }
    zombieGroup.add(zombie);
  }
  // Spawning and use (or function) of health
    spawnHealth();
    if(hulk.isTouching(healthGroup)){
      hulkHp = hulkHp + 20;
      healthGroup.destroyEach();
    }
  

// Hulk Movements
//Going Right
  hulk.velocityX = 0;
  hulk.changeAnimation("hulk", hulkStanding); 
  hulk.scale = 0.4;
  hulkSmashSound.stop();

 if(keyDown(RIGHT_ARROW)){
    hulk.velocityX = 3;
    hulk.changeAnimation("hulkWalk", hulkWalking);
  }

  //Going Left
  if(keyDown(LEFT_ARROW)){
    hulk.velocityX = - 3;
    hulk.changeAnimation("hulkWalk", hulkWalking);
  }


  //Punching
  if(keyDown("w")){
    hulk.changeAnimation("hulkPunching", hulkPunch);
    hulk.scale = 0.7;
  }

  //So that the sound does not repeat itself
  if(keyWentDown("w")){
    hulkPunchSongBox = createSprite(5,5,10,10);
    hulkPunchSound.play();
    hulkPunchSongBox.visible = false;
  }
  
  if(keyWentDown("d")){
    hulkSmashSongBox = createSprite(5,5,30,30);
    hulkSmashSound.play();
    hulkSmashSongBox.visible = false;
  }

 //Smashing
 if(keyDown("d")){
  hulk.changeAnimation("hulkSmash", hulkSmash);
  hulk.scale = 0.5;
  hulkSmashSound.play();
}

  //Jumping
  if(keyDown("space") && hulk.y >= 470){
    hulk.velocityY = -15;
  }
  

  //TOUCH ATTACK OF GROUPS

  for (var i =0; i < zombieGroup.length; i++) {
    if (keyDown("w") && zombieGroup.get(i).isTouching(hulk)) {
        zombieGroup.get(i).destroy();
    }

  }

  for (var i =0; i < zombieGroup.length; i++) {
    if (keyDown("q") && zombieGroup.get(i).isTouching(hulk)) {
        zombieGroup.get(i).destroy();
    }

  }

  for (var i =0; i < zombieGroup.length; i++) {
    if (keyDown("d") && zombieGroup.get(i).isTouching(hulk)) {
        zombieGroup.get(i).destroy();
    }

  }

  for (var i =0; i < zombieGroup.length; i++) {
    if (keyDown("a") && zombieGroup.get(i).isTouching(hulk)) {
        zombieGroup.get(i).destroy();
    }

  }

  for (var i =0; i < zombieGroup.length; i++) {
    if (zombieGroup.get(i).isTouching(hulk)) {
        hulkHp = hulkHp - 1;
    }

  }
  
// Displaying of the Boss
  if(hulkFrame >= 1300){
    zombieGroup.visible = false;
    evilCraig.visible = true;

    
  if(mousePressedOver(hulkGoBack)){
    hulkRestart();
    gameStartMusic.stop();
  }
    
    zombieGroup.destroyEach();
    zombieGroup.setVelocityXEach(0);

    textSize(25);
    text("Hp: " + hulkBossHp, 1000, 100);

    
    if(keyDown("w") && hulk.isTouching(evilCraig)){
      hulkBossHp = hulkBossHp -1;
    }

    if(evilCraig.isTouching(hulk)){
      hulkHp = hulkHp -1;
    }

    if(keyDown("d") && hulk.isTouching(evilCraig)){
      hulkBossHp = hulkBossHp -1;
    }

  }
  if(hulkBossHp <= -1){
    gameState = "hulkBossEnd"
  }

  if(hulkHp <= -1){
    gameState = "hulkEnd"
  }
}

  //If boss dies, following things will happen :
  if(gameState === "hulkBossEnd"){
      hulk.destroy();
      evilCraig.destroy();
      zombieGroup.destroyEach();
      healthGroup.destroyEach();
      hulkGoBack.visible = true;
    
  if(mousePressedOver(hulkGoBack)){
    hulkRestart();
    gameStartMusic.play();
  }
     
      textSize(50);
      fill("green");
      stroke("white");
      strokeWeight(5);
      text("YOU WIN!", 620, 300);

      textSize(40);
      fill("green");
      stroke("maroon");
      strokeWeight(5);
      text("You have saved the Earth from dangerous waste materials!", 320, 350);
      text("Well Done!!!", 650, 400);

      textSize(40);
      fill("maroon");
      stroke("white");
      strokeWeight(5);
      text("Press on 'Go Back' button to complete remaining challenges", 300, 470);
  }
    
    //When hulk dies, following will happen :
    if(gameState === "hulkEnd"){
      hulk.destroy();
      evilCraig.destroy();
      zombieGroup.destroyEach();
      healthGroup.destroyEach();

      textSize(50);
      fill("red");
      stroke("yellow");
      strokeWeight(2);
      text("YOU LOSE!", 620, 200);
      text("You Tried your BEST", 550, 300)
      text("Refresh the browser tab to RESTART the game again", 200, 420);
    }





//IRONMAN ANIMATION

  if(gameState === "ironManPlay"){
    background(ironManBg);
    ironFrame = ironFrame + 1;
    //console.log(ironFrame);

    ironMan.visible = true;
    ironManGO.visible = false;
    //ironMan.debug = true;
    ironMan.setCollider("rectangle", 130, 0, 270, 100);

    //Hp of ironMan
  textSize(25);
  fill("white");
  text("Hp: "+ ironManHp, 100, 100);

    //creating pollution(enemies) and cleanAir(revivers) at random positions
  rand = Math.round(random(1,2));
  switch (rand) {
    case 1:spawnPollution();
      break;
    case 2:spawnCleanAir();
      break;
  }

      if(frameCount%90===0){
        airPollutionGroup.velocityX = airPollutionGroup.velocityX - 5;
      }

      //IronMan's movements
  //Going Left
  if(keyDown(LEFT_ARROW)){
    ironMan.velocityX = -10;
  }

  if(keyWentUp(LEFT_ARROW)){
    ironMan.velocityX = 0
  }


  //Going Right
  if(keyDown(RIGHT_ARROW)){
    ironMan.velocityX = 10;
  }

  if(keyWentUp(RIGHT_ARROW)){
    ironMan.velocityX = 0
  }

  //Going Up
  if(keyDown(UP_ARROW)){
    ironMan.velocityY = -10;
  }

  if(keyWentUp(UP_ARROW)){
    ironMan.velocityY = 0
  }

  //Going Down
  if(keyDown(DOWN_ARROW)){
    ironMan.velocityY = 10;
  }

  if(keyWentUp(DOWN_ARROW)){
    ironMan.velocityY = 0
  }

  //For Shooting Beam
  if(keyWentDown("w")){
    ironMan.changeAnimation("ironmanShoot", ironManShooting);
    ironMan.scale = 0.5;

    ironManFireBeam = createSprite(ironMan.x + 160, ironMan.y - 8);
    ironManFireBeam.scale = 0.2;
    ironManFireBeam.addImage(ironManFireBeamImg);
    ironManFireBeam.velocityX = ironManFireBeam.velocityX + 10;
    ironManFireBeamGroup.add(ironManFireBeam);
    ironManFireBeamMusic.play();
  }

  if(keyWentUp("w")){
    ironMan.changeAnimation("ironman",ironManImg);
    ironMan.scale = 0.8;
  }

  //For Shooting Missile
  if(keyWentDown("q")){
    ironMan.changeAnimation("ironmanShoot", ironManShooting);
    ironMan.scale = 0.5;

    ironManMissile = createSprite(ironMan.x + 150, ironMan.y);
    ironManMissile.scale = 0.3;
    ironManMissile.addImage(ironManMissileImg);
    ironManMissile.velocityX = ironManMissile.velocityX + 10;
    ironManMissileGroup.add(ironManMissile);
    ironManMissileMusic.play();
  }

  if(keyWentUp("q")){
    ironMan.changeAnimation("ironman",ironManImg);
    ironMan.scale = 0.8;
  }


    //TOUCH ATTACK OF GROUPS

  for (var i =0; i < airPollutionGroup.length; i++) {
    if (airPollutionGroup.get(i).isTouching(ironManFireBeamGroup)) {
        airPollutionGroup.get(i).destroy();
        ironManFireBeamGroup.destroyEach();
    }

  }

  for (var i =0; i < airPollutionGroup.length; i++) {
    if (airPollutionGroup.get(i).isTouching(ironManMissileGroup)) {
        airPollutionGroup.get(i).destroy();
        ironManMissileGroup.destroyEach();
    }

  }

  for (var i =0; i < airPollutionGroup.length; i++) {
    if (airPollutionGroup.get(i).isTouching(ironMan)) {
      airPollutionGroup.get(i).destroy();
      ironManHp = ironManHp -5;
    }

  }

  for (var i =0; i < cleanAirGroup.length; i++) {
    if (cleanAirGroup.get(i).isTouching(ironMan)) {
        cleanAirGroup.get(i).destroy();
        ironManHp = ironManHp + 10;
    }

  }

  // Displaying of the Boss
  if(ironFrame >= 800){
    airPollutionGroup.visible = false;
    dragon.visible = true;
   // inceptionMusic.play();

    airPollutionGroup.destroyEach();
    airPollutionGroup.setVelocityXEach(0);

    spawnDragonBeam();

    textSize(25);
    text("Hp: " + ironManBossHp, 1000, 100);

    //console.log(dragon.y);

    if(dragon.y <= 50){
      dragon.velocityY = 5;
    }

    if(dragon.y >= 680){
      dragon.velocityY = -5;
    }

    for (var i =0; i < ironManFireBeamGroup.length; i++) {
      if (ironManFireBeamGroup.get(i).isTouching(dragon)) {
        ironManFireBeamGroup.get(i).destroy();
          ironManBossHp = ironManBossHp - 10;
      }
  
    }

    for (var i =0; i < dragonBeamGroup.length; i++) {
      if (dragonBeamGroup.get(i).isTouching(ironMan)) {
        dragonBeamGroup.get(i).destroy();
          ironManHp = ironManHp - 8;
      }
  
    }

    for (var i =0; i < ironManMissileGroup.length; i++) {
      if (ironManMissileGroup.get(i).isTouching(dragon)) {
          ironManMissileGroup.get(i).destroy();
          ironManBossHp = ironManBossHp - 5;
      }
  
    }
  }
  if(ironManBossHp <= -5){
    gameState = "ironManBossEnd"
  }

  if(ironManHp <= -5){
    gameState = "ironManEnd"
  }

  }


if(gameState === "ironManBossEnd"){
  //If boss dies, following things will happen :
    ironMan.destroy();
    dragon.destroy();
    dragonBeamGroup.destroyEach();
    cleanAirGroup.destroyEach();
    ironManFireBeamGroup.destroyEach();
    ironManMissileGroup.destroyEach();
    airPollutionGroup.destroyEach();

    if(mousePressedOver(ironManGoBack)){
      ironManRestart();
      gameStartMusic.play();
    }

    ironManFireBeamMusic.stop();
    ironManMissileMusic.stop();
    dragonFlap.stop();

    ironManGoBack.visible = true;
    earthSaved.visible = true;
    ironMan.visible = false;
    ironManDone.visible = true;

      textSize(40);
      fill("green");
      stroke("yellow");
      strokeWeight(3);
      text("YOU WIN!", 570, 250);

      textSize(30);
      fill("green");
    textFont("Times New Roman");
      stroke("yellow");
      strokeWeight(3);
      text("You have saved the Earth from intoxicating pollution which cause Global Warming!", 250, 300);
      text("And various Respiratory Problems!", 450, 350);
      text("Great Job!", 630, 400);

      fill("maroon");
      strokeWeight(2);
      text("Press on 'Go Back' button to complete other challenges", 370, 450);

}
if(gameState === "ironManEnd"){
// If IronMan dies, following things will happen :
    ironMan.destroy();
    dragon.destroy();
    dragonBeamGroup.destroyEach();
    cleanAirGroup.destroyEach();
    ironManFireBeamGroup.destroyEach();
    ironManMissileGroup.destroyEach();
    airPollutionGroup.destroyEach();

      textSize(40);
      fill("green");
      stroke("yellow");
      strokeWeight(3);
      text("YOU LOSE!", 560, 280);

      textSize(30);
      fill("green");
    textFont("Times New Roman");
      stroke("yellow");
      strokeWeight(2);
      text("DON'T LOSE HOPE!", 550, 350);
      text("Refresh the browser tab to RESTART the game again", 400, 400);
      
}

// AQUAMAN ANIMATION
 
if(gameState === "aquamanPlay"){
  background(aquamanBg);
  aquaFrame = aquaFrame + 1;
  console.log(aquaFrame);

  aquaman.visible =true;
  aquamanGO.visible = false;

// HP of aquaman
  textSize(25);
  fill("white");
  text("Hp: "+ aquamanHp, 100, 100);

  // Creating shark(enemies) and dolphins(revivers) at random positions
  rand = Math.round(random(1, 3));
  switch (rand) {
    case 1:spawnShark();
      break;
    case 2:spawnDolphin1();
      break;
    case 3:spawnDolphin2();
    break;
    default:break;
  }


// AQUAMAN MOVEMENTS

  //Going Right
  //Animation changes
if(keyDown(RIGHT_ARROW)){
  aquaman.changeAnimation("aquamanSwimming",aquamanSwimmingAni);
  aquaman.velocityX = 10;
}

//Animation changes back to normal
if(keyWentUp(RIGHT_ARROW)){
aquaman.changeAnimation("aquamanStanding", aquamanAni);
aquaman.velocityX = 0;
aquaman.scale = 0.6;
}

//Going Left
//Animation Changes
if(keyDown(LEFT_ARROW)){
  aquaman.changeAnimation("aquamanSwimming",aquamanSwimmingAni);
  aquaman.velocityX = -10;
}

//Changes Back to normal
if(keyWentUp(LEFT_ARROW)){
  aquaman.changeAnimation("aquamanStanding", aquamanAni);
  aquaman.velocityX = 0;
  aquaman.scale = 0.6;
  }

//Going Up
if(keyDown(UP_ARROW)){
  aquaman.velocityY = -10;
 }

 //Back to normal
 if(keyWentUp(UP_ARROW)){
  aquaman.changeAnimation("aquamanStanding", aquamanAni);
  aquaman.velocityY = 0;
  aquaman.scale = 0.6;
  }

//Going Down
if(keyDown(DOWN_ARROW)){
  aquaman.velocityY = 10;
}

//Back to normal
if(keyWentUp(DOWN_ARROW)){
  aquaman.changeAnimation("aquamanStanding", aquamanAni);
  aquaman.velocityY = 0;
  aquaman.scale = 0.6;
  }

//For striking with trident
//Animation changes to a throwing trident animation
if(keyWentDown("d")){
  aquaman.changeAnimation("tridentStriking", tridentStrikeAni);

  trident = createSprite(aquaman.x + 160, aquaman.y - 8);
  trident.scale = 1;
  trident.addAnimation("trident", tridentAni);
  trident.velocityX = trident.velocityX + 10;
  tridentGroup.add(trident);
  tridentThrowSound.play();
}

//Changes back to normal
if(keyWentUp("d")){
  aquaman.changeAnimation("aquamanStanding", aquamanAni);
  aquaman.scale = 0.6;
  }

  if(keyWentDown("s")){
    aquaman.changeAnimation("tridentSpinning", tridentSpinBlockAni);
    aquaman.scale = 0.9;
    aquaman.setCollider("rectangle", 0,0, 300, 300);

    aquamanBarrier = createSprite(aquaman.x + 150, aquaman.y, 20, 280);
    aquamanBarrier.visible = false;
    tridentSpinWhooshSound.play();
  }

  if(keyWentUp("s")){
    aquaman.changeAnimation("aquamanStanding", aquamanAni);
    aquaman.scale = 0.6;
    aquamanBarrier.destroy();
    }

 //TOUCH ATTACK OF GROUPS
 // So that they are destroyed one by one

 for (var i =0; i < sharkGarbageGroup.length; i++) {
  if (sharkGarbageGroup.get(i).isTouching(tridentGroup)) {
      sharkGarbageGroup.get(i).destroy();
      tridentGroup.destroyEach();
  }

}

for (var i =0; i < sharkGarbageGroup.length; i++) {
  if (sharkGarbageGroup.get(i).isTouching(aquaman)) {
    sharkGarbageGroup.get(i).destroy();
    aquamanHp = aquamanHp -5;
  }

}

for (var i =0; i < dolphin1Group.length; i++) {
  if (dolphin1Group.get(i).isTouching(aquaman)) {
      dolphin1Group.get(i).destroy();
      aquamanHp = aquamanHp + 10;
  }
}

for (var i =0; i < dolphin2Group.length; i++) {
  if (dolphin2Group.get(i).isTouching(aquaman)) {
      dolphin2Group.get(i).destroy();
      aquamanHp = aquamanHp + 10;
  }
}

// Displaying of the Boss after a particular time
if(aquaFrame >= 1000){
  sharkGarbageGroup.visible = false;
  dolphin1Group.visible = false;
  dolphin2Group.visible = false;

  godzilla.visible = true;

  sharkGarbageGroup.destroyEach();
  sharkGarbageGroup.setVelocityXEach(0);

  spawnAtomicBlast();

  textSize(25);
  text("Hp: " + aquamanBossHp, 1000, 100);

  //console.log(dragon.y);

  if(godzilla.y <= 50){
    godzilla.velocityY = 5;
  }

  if(godzilla.y >= 680){
    godzilla.velocityY = -5;
  }

  for (var i =0; i < tridentGroup.length; i++) {
    if (tridentGroup.get(i).isTouching(godzilla)) {
      tridentGroup.get(i).destroy();
        aquamanBossHp = aquamanBossHp - 5;
    }

  }
  
  for (var i =0; i < atomicBlastGroup.length; i++) {
    if (atomicBlastGroup.get(i).isTouching(aquaman)) {
      atomicBlastGroup.get(i).destroy();
        aquamanHp = aquamanHp - 10;
    }

  }

  for (var i =0; i < atomicBlastGroup.length; i++) {
    if (keyDown("s") && atomicBlastGroup.get(i).isTouching(aquamanBarrier)){
      atomicBlastGroup.get(i).destroy();
    }

  }
}
if(aquamanBossHp <= -5){
  gameState = "aquamanBossEnd"
}

if(aquamanHp <= -5){
  gameState = "aquamanEnd"
}
}

// This that will happen when the boss will die
if(gameState === "aquamanBossEnd"){
  aquamanGoBack.visible = true;

  aquaman.destroy();
  godzilla.destroy();

  // TO RESTART THE GAME AND TO END THE GAME OF HEROES IF BOSS IS DEAD!
  if(mousePressedOver(aquamanGoBack)){
    aquamanRestart();
    gameStartMusic.play();
  }

  tridentGroup.destroyEach();
  sharkGarbageGroup.destroyEach();
  dolphin1Group.destroyEach();
  dolphin2Group.destroyEach();
  atomicBlastGroup.destroyEach();
  
  
  textSize(40);
  fill("aqua");
  stroke("green");
  strokeWeight(3);
  text("YOU WIN!", 570, 250);

  textSize(25);
  fill("aqua");
  stroke("green");
  strokeWeight(3);
  text("You have saved the Earth, it's water and it's species from those DEADLY creatures!", 250, 300);
  text("HAIL TO THE ALL MIGHTY KING!", 480, 350);
  text("So proud of you!", 600, 400);

  fill("aqua");
  stroke("maroon");
  text("Press on 'Go Back' button to complete other challenges", 370, 450);
}

if(gameState === "aquamanEnd"){
  aquaman.destroy();
  godzilla.destroy();

  tridentGroup.destroyEach();
  sharkGarbageGroup.destroyEach();
  dolphin1Group.destroyEach();
  dolphin2Group.destroyEach();
  atomicBlastGroup.destroyEach();

  textSize(40);
  fill("aqua");
  stroke("olive");
  strokeWeight(3);
  text("YOU LOSE!", 630, 200);

  textSize(30);
  fill("aqua");
  stroke("olive");
  strokeWeight(3);
  text("Don't feel defeated! YOU CAN DO THIS! I believe in you!", 410, 300);
  text("Refresh the browser tab to RESTART the game again", 430, 400);
}









if(ironManBossHp <=0 && hulkBossHp <=0 && aquamanBossHp <=0){
  ironMan.destroy();
  ironManFireBeamGroup.destroyEach();
  ironManMissileGroup.destroyEach();
  dragon.destroy();
  dragonBeamGroup.destroyEach();

  hulk.destroy();
  healthGroup.destroyEach();
  evilCraig.destroy();

  aquaman.destroy();
  tridentGroup.destroyEach();
  godzilla.destroy();
  atomicBlastGroup.destroyEach();
  dolphin1Group.destroyEach();
  dolphin2Group.destroyEach();

  gameState = "END"
  gameStartMusic.stop();
}


if(gameState === "END"){
  background(0);
  ironManButton.hide();
  aquamanButton.hide();
  hulkButton.hide();
  cleanEarth.visible = true;

  textSize(40);
  fill("yellow");
  stroke("maroon");
  strokeWeight(6);
  text("Pollution : Endgame", 580, 50);

  textSize(35);
  fill("yellow");
  stroke("maroon");
  strokeWeight(6);
  text("Our heroes helped us in removing the various causes of ENVIRONMENT POLLUTION", 100, 100);
  text("Now it is our duty to maintain it", 500, 150);
  text("Let us take a oath to create......", 500, 200);
  text("A Greener, Cleaner and Healthier EARTH!!!", 400, 700);
}


  drawSprites();
}

//Hulk spawnHealth
function spawnHealth(){
  if(frameCount%130 === 0 && hulkHp <= 80){
    health = createSprite(random(100, 800), -20, 30, 30);
    health.addImage(healthImg);
    health.scale = 0.4;
    health.velocityY = 5;
    health.lifetime = 300;
    healthGroup.add(health);
  }
}


// IronMan Enemy
function spawnPollution(){
  if(frameCount%20===0){
    airPollution = createSprite(random(1600,1650), random(50,700), 20, 20);
      airPollution.addImage(airPollutionImg);
      //airPollution.debug = true;
      airPollution.setCollider("rectangle", 0, 0, 400, 200);
      airPollution.velocityX = airPollution.velocityX - 20;
      airPollution.scale = 0.6;
      airPollution.lifetime = 400;
      airPollutionGroup.add(airPollution);
      
    }
}

//IronMan Reviver
function spawnCleanAir(){
  if(ironFrame%200===0 && ironManHp <= 75){
    cleanAir = createSprite(random(1600,1650), random(10,730), 20, 20);
      cleanAir.addImage(cleanAirImg);
      // cleanAir.debug =true;
       cleanAir.setCollider("rectangle", 0, 0, 300, 200);
       cleanAir.velocityX = cleanAir.velocityX - 10;
       cleanAirGroup.add(cleanAir);
       cleanAir.scale = 0.6;
       cleanAir.lifetime = 400;
  }
}


//Dragon Flame
function spawnDragonBeam(){
  if(ironFrame%35 === 0){
    dragonBeam = createSprite(dragon.x -120, dragon.y - 5, 50, 50);
    dragonBeam.addAnimation("dragonFire", dragonBeamAni);
    dragonBeam.scale = 0.3;
    dragonBeam.velocityX= - 10;
    //dragonBeam.debug = true;
    dragonBeam.setCollider("circle", -120, 20, 150);
    dragonBeamGroup.add(dragonBeam);
    dragonBeam.lifetime = 400;
    dragonFlap.play();
  }
}


//Aquaman Enemy
function spawnShark(){
  if(aquaFrame%10 === 0){
  sharkGarbage = createSprite(random(1500, 1550), random(40, 680));
  sharkGarbage.addAnimation("sharkGarbageDash", sharkGarbageAni);
  //sharkGarbage.debug = true;
  sharkGarbage.velocityX = -20;
  sharkGarbage.scale = 0.6;
  sharkGarbageGroup.add(sharkGarbage);
  sharkGarbage.lifetime = 400;
  }
}

//Aquaman Reviver 1
function spawnDolphin1(){
  if(aquaFrame%100 === 0 && aquamanHp <= 70){
  dolphin1 = createSprite(random(1700, 1750), random(30, 700));
  dolphin1.addImage(dolphin1Ani);
  //dolphin1.debug = true;
  dolphin1.setCollider("rectangle", 0, 30, 400, 130);
  dolphin1.velocityX = -10;
  dolphin1Group.add(dolphin1);
  dolphin1.lifetime = 400;
}
}

//Aquaman Reviver 2
function spawnDolphin2(){
  if(aquaFrame%100 === 0 && aquamanHp <= 70){
  dolphin2 = createSprite(random(1700, 1750), random(30, 700));
  dolphin2.addImage(dolphin2Ani);
  //dolphin2.debug = true;
  dolphin2.velocityX = -10;
  dolphin2Group.add(dolphin2);
  dolphin2.lifetime = 400;
}
}

//Aquaman Boss Attack
function spawnAtomicBlast(){
  if(aquaFrame%31 ===0){
    atomicBlast = createSprite(godzilla.x - 110, godzilla.y - 130, 30, 30);
    atomicBlast.addAnimation("godzillaBlasting", atomicBlastAni);
    atomicBlast.scale = 0.2;
    //atomicBlast.debug = true;
    atomicBlast.setCollider("rectangle",0,20, atomicBlast.width, 170);
    atomicBlast.velocityX = -10;
    atomicBlastGroup.add(atomicBlast);
    atomicBlast.lifetime = 400;
    atomicBlastSound.play();
}
}


// For displaying text before the game starts [
function hulkGOText(){
  background("skyblue");

textSize(25);
fill("red");
stroke("yellow");
strokeWeight(3);
text("Hulk wants to make the Earth a better place by removing dirty waste,", 400, 100);
text("But some deadly garbages are blocking the path!!", 500, 150);
text("Help Hulk to destroy them and save the Earth from Land Pollution!", 400, 200);

fill("black");
text("CONTROLS:-", 600, 250);
text("Press 'w' to punch them", 600, 300);
text("Press 'd' for HULK SMASH!", 600, 330);
text("Press Space for Hulk Jump", 600, 360);
text("Arrow Keys for movement", 600, 390);

text("Start", 900, 600);

textSize(70);
fill("red");
stroke("yellow");
strokeWeight(5);
text("All The Best", 550, 500);

//This is created so that when a player sees the opening text then he should be able to start the game by clicking the button
  hulkGO = createSprite(900, 600, 100, 50);
  hulkGO.shapeColor = "violet";
  hulkGO.visible = false;

if(mousePressedOver(hulkGO)){
  gameState = "hulkPlay"
}
}

function ironManGOText(){
  background("green");

textSize(20);
text("GO", 900, 600);

textSize(30);
fill("yellow");
stroke("red");
strokeWeight(3);
text("It was a Bright Sunny day, when everyone suddenly started coughing", 300, 100);
text("It is the Pollugon! And he is polluting the Atmosphere with his army!!", 350, 150);
text("But don't worry! Iron Man is gonna save the day!", 450, 200);

fill("white");
stroke("blue");
strokeWeight(2);
text("CONTROLS:-", 600, 270);
text("Press 'w' to shoot Fire Beam", 600, 310);
text("Press 'q' to shoot Missiles", 600, 350);
text("Arrow Keys for movement", 600, 390);

text("start", 900, 600);

textSize(70);
fill("yellow");
stroke("red");
strokeWeight(5);
text("All The Best", 600, 500);

//Same for here 
ironManGO = createSprite(900, 600, 100, 50);
ironManGO.visible = false;

if(mousePressedOver(ironManGO)){
  gameState = "ironManPlay"
}
}

function aquamanGOText(){
  background("gold");

textSize(20);
text("GO", 900, 600);

textSize(27);
fill("red");
textFont("Arial");
stroke("blue");
strokeWeight(3);
text("Aquaman is the King Of Atlantis and also the OCEAN MASTER! Hail to the King!", 300, 80);
text("But some dirty plastics bottles, cans,etc are being thrown in water", 400, 120);
text("Because of which some water species are out of control and are attacking everyone!", 300, 170);
text("Help Aquaman to defeat them and save the whole planet!", 430, 220);

fill("aqua");
stroke("olive");
strokeWeight(4);
text("CONTROLS:-", 600, 300);
text("Press 'd' to throw trident", 600, 340);
text("Hold 's' for blocking the enemy and their powers", 490, 380);
text("Arrow Keys for movement", 600, 420);

text("start", 900, 600);

textSize(70);
fill("brown");
stroke("skyblue");
strokeWeight(5);
text("All The Best", 550, 500);

//Same here as well
aquamanGO = createSprite(900, 600, 100, 50);
aquamanGO.visible = false;

if(mousePressedOver(aquamanGO)){
  gameState = "aquamanPlay"
}
}

//]


//For restarting from hulk
function hulkRestart(){
  gameState = "gameStart"
  hulkGoBack.visible = false;

  hulk.destroy();
  zombieGroup.destroyEach();
  evilCraig.destroy();
  healthGroup.destroyEach();
  

  // GO BACK hulk [
  // one
  if(hulkBossHp <= 0){
    hulkButton.hide();
    ironManButton.show();
    aquamanButton.show();
  }

  //two
  if(hulkBossHp <= 0 && ironManBossHp <= 0){
    hulkButton.hide();
    ironManButton.hide();
    aquamanButton.show();
  }

  if(hulkBossHp <= 0 && aquamanBossHp <= 0){
    hulkButton.hide();
    ironManButton.show();
    aquamanButton.hide();
  }

  //three
  if(hulkBossHp <= 0 && aquamanBossHp <= 0 && ironManBossHp <=0){
    hulkButton.hide();
    ironManButton.hide();
    aquamanButton.hide();
  }
//]
}


//For going back from ironMan
function ironManRestart(){
  gameState = "gameStart"
  ironManGoBack.visible = false;

  ironMan.destroy();
  ironManFireBeamGroup.destroyEach();
  ironManMissileGroup.destroyEach();
  dragon.destroy();
  dragonBeamGroup.destroyEach();
  ironManDone.destroy();
  earthSaved.destroy();
  airPollutionGroup.destroyEach();
  cleanAirGroup.destroyEach();


  // GO BACK IRONMAN[
    //one
    if(ironManBossHp <= 0){
      hulkButton.show();
      ironManButton.hide();
      aquamanButton.show();
    }

    //two
    if(ironManBossHp <= 0 && hulkBossHp <= 0){
      hulkButton.hide();
      ironManButton.hide();
      aquamanButton.show();
    }

    if(ironManBossHp <= 0 && aquamanBossHp <= 0){
      hulkButton.show();
      ironManButton.hide();
      aquamanButton.hide();
    }

    //three
    if(hulkBossHp <= 0 && aquamanBossHp <= 0 && ironManBossHp <=0){
      hulkButton.hide();
      ironManButton.hide();
      aquamanButton.hide();
    }
  //]
}


//For restarting from aquaman
function aquamanRestart(){
  gameState = "gameStart"
  aquamanGoBack.destroy();
  
  aquaman.destroy();
  godzilla.destroy();
  sharkGarbageGroup.destroyEach();
  dolphin1Group.destroyEach();
  dolphin2Group.destroyEach();
  tridentGroup.destroyEach();
  atomicBlastGroup.destroyEach();

  
  // GO BACK AQUAMAN [
  //one
  if(aquamanBossHp <= 0){
    hulkButton.show();
    ironManButton.show();
    aquamanButton.hide();
  }

  //two
  if(aquamanBossHp <= 0 && hulkBossHp <= 0){
    hulkButton.hide();
    ironManButton.show();
    aquamanButton.hide();
  }

  if(ironManBossHp <= 0 && aquamanBossHp <= 0){
    hulkButton.show();
    ironManButton.hide();
    aquamanButton.hide();
  }

  //three
  if(hulkBossHp <= 0 && aquamanBossHp <= 0 && ironManBossHp <=0){
    hulkButton.hide();
    ironManButton.hide();
    aquamanButton.hide();
  }

  //]
}

