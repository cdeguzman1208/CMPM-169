let mic, fft; 
let song, song1, song2, song3, song4; 
let analyzer; 
let c, increase; 
let s, n; 
let input, inputsong; 
let rotation, r, turn; 
let w = 1200; 
let h = 800; 
let sec;
let audio;
let particles = [];
let v; 
let f = true; 
let p = true; 

let visualization = [
  {
    'flower': true, 
    'particles': true, 
  }, 
  {
    'flower': true, 
    'particles': false, 
  }
]

let lyrics = [
    // empty
    [], 
    // cat & dog
    [
      {
        'start': 0, 
        'stop': 3, 
        'lyrics': "Turn me from a cat into a dog"
      },
      {
        'start': 3, 
        'stop': 6, 
        'lyrics': "Now I want you to take me on a walk"
      },
      {
        'start': 6, 
        'stop': 9, 
        'lyrics': "Watch me be the loyalest of all"
      },
      {
        'start': 9, 
        'stop': 12, 
        'lyrics': "Ok baby here’s the leash purr purr purr"
      },
      {
        'start': 12, 
        'stop': 13, 
        'lyrics': "I don’t wanna be just friends"
      },
      {
        'start': 13, 
        'stop': 16, 
        'lyrics': "It’s no coincidence it’s a kitty-incidence"
      },
      {
        'start': 16, 
        'stop': 19, 
        'lyrics': "They be testing out your patience but I’m here for it"
      },
      {
        'start': 19, 
        'stop': 21, 
        'lyrics': "Girl I promise"
      },
      {
        'start': 21, 
        'stop': 24, 
        'lyrics': "So get used to it, ain’t no stopping"
      },
      {
        'start': 24, 
        'stop': 25, 
        'lyrics': "Me when you walk in"
      },
      {
        'start': 25, 
        'stop': 28, 
        'lyrics': "Got me acting up all crazy, lemme be your pet"
      },
      {
        'start': 28, 
        'stop': 31, 
        'lyrics': "Baby make a lil room let me get next to ya"
      },
      {
        'start': 31, 
        'stop': 33, 
        'lyrics': "I was messin’"
      },
      {
        'start': 33, 
        'stop': 34, 
        'lyrics': "Now I’m thankin ya"
      },
      {
        'start': 34, 
        'stop': 36, 
        'lyrics': "I learned my lesson"
      },
      {
        'start': 36, 
        'stop': 39, 
        'lyrics': "Baby baby you give me a halo"
      },
      {
        'start': 39, 
        'stop': 42, 
        'lyrics': "I was far from cute before, now I’m an angel"
      },{
        'start': 42, 
        'stop': 45, 
        'lyrics': "So make room for me I hope you don’t let go"
      },
      {
        'start': 45, 
        'stop': 48, 
        'lyrics': "Cuz I’ve been such a good boy I hope you don’t say no"
      },
      {
        'start': 48, 
        'stop': 52, 
        'lyrics': "(But) oh my gawd, what is this new emotion?"
      },
      {
        'start': 52, 
        'stop': 55, 
        'lyrics': "Now I’m such, a puppy when you hold me"
      },
      {
        'start': 55, 
        'stop': 57, 
        'lyrics': "Feed me love, it’s perfect & you know it"
      },
      {
        'start': 57, 
        'stop': 60, 
        'lyrics': "Follow you in circles and no that is not a joke, babe"
      },
      {
        'start': 60, 
        'stop': 63, 
        'lyrics': "Oh oh oh oh"
      },
      {
        'start': 63, 
        'stop': 66, 
        'lyrics': "I’ll walk over the obstacles and be there til the bitter end"
      },
      {
        'start': 66, 
        'stop': 69, 
        'lyrics': "Oh oh oh oh"
      },
      {
        'start': 69, 
        'stop': 72, 
        'lyrics': "I just hope you understand purr purr purr"
      },
      {
        'start': 72, 
        'stop': 73, 
        'lyrics': "I don’t wanna be just friends"
      },
      {
        'start': 73, 
        'stop': 76, 
        'lyrics': "It’s no coincidence it’s a kitty-incidence"
      },
      {
        'start': 76, 
        'stop': 79, 
        'lyrics': "They be testing out your patience but I’m here for it"
      },
      {
        'start': 79, 
        'stop': 81, 
        'lyrics': "Girl I promise"
      },
      {
        'start': 81, 
        'stop': 84, 
        'lyrics': "So get used to it, ain’t no stopping"
      },
      {
        'start': 84, 
        'stop': 86, 
        'lyrics': "Me when you walk in"
      },
      {
        'start': 86, 
        'stop': 88, 
        'lyrics': "Got me acting up all crazy, lemme be your pet"
      },
      {
        'start': 88, 
        'stop': 91, 
        'lyrics': "Baby make a lil room let me get next to ya"
      },
      {
        'start': 91, 
        'stop': 93, 
        'lyrics': "I was messin’"
      },
      {
        'start': 93, 
        'stop': 94, 
        'lyrics': "Now I’m thankin ya"
      },
      {
        'start': 94, 
        'stop': 97, 
        'lyrics': "I learned my lesson"
      },
      {
        'start': 97, 
        'stop': 100, 
        'lyrics': "Im da one you can’t keep your keep your paws off"
      },
      {
        'start': 100, 
        'stop': 103, 
        'lyrics': "Go fetch, when you say that I’ma dog walk"
      },
      {
        'start': 103, 
        'stop': 105, 
        'lyrics': "Fight for you in the biggest pack of wolves"
      },
      {
        'start': 105, 
        'stop': 108, 
        'lyrics': "They be racing but I’m comin’ in first (woof woof) Impala"
      },
      {
        'start': 108, 
        'stop': 111, 
        'lyrics': "Come to me, yeah I like it when we cuddle"
      },
      {
        'start': 111, 
        'stop': 114, 
        'lyrics': "Come to me, yeah when you get yourself in trouble"
      },
      {
        'start': 114, 
        'stop': 115, 
        'lyrics': "I’m everything"
      },
      {
        'start': 115, 
        'stop': 117, 
        'lyrics': "From the soft side to the tough stuff,"
      },
      {
        'start': 117, 
        'stop': 120, 
        'lyrics': "Til we cross the rainbow bridge I’ll be the one you always dream of"
      },
      {
        'start': 120, 
        'stop': 123, 
        'lyrics': "Oh oh oh oh"
      },
      {
        'start': 123, 
        'stop': 126, 
        'lyrics': "Bet nobody else speaks the lil’ language between you & me"
      },
      {
        'start': 126, 
        'stop': 129, 
        'lyrics': "Oh oh oh oh"
      },
      {
        'start': 129, 
        'stop': 132, 
        'lyrics': "I just hope you understand purr purr purr"
      },
      {
        'start': 132, 
        'stop': 133, 
        'lyrics': "I don’t wanna be just friends"
      },
      {
        'start': 133, 
        'stop': 136, 
        'lyrics': "It’s no coincidence it’s a kitty-incidence"
      },
      {
        'start': 136, 
        'stop': 139, 
        'lyrics': "They be testing out your patience but I’m here for it"
      },
      {
        'start': 139, 
        'stop': 140, 
        'lyrics': "Girl I promise"
      },
      {
        'start': 140, 
        'stop': 144, 
        'lyrics': "So get used to it, ain't no stopping"
      },
      {
        'start': 144, 
        'stop': 145, 
        'lyrics': "Me when you walk in"
      },
      {
        'start':145, 
        'stop': 148, 
        'lyrics': "Got me acting up all crazy, lemme be your pet"
      },
      {
        'start': 148, 
        'stop': 151, 
        'lyrics': "Baby make a lil room let me get next to ya"
      },
      {
        'start': 151, 
        'stop': 153, 
        'lyrics': "I was messin’"
      },
      {
        'start': 153, 
        'stop': 154, 
        'lyrics': "Now I’m thankin ya"
      },
      {
        'start': 154, 
        'stop': 157, 
        'lyrics': "I learned my lesson"
      },
      {
        'start': 157, 
        'stop': 159, 
        'lyrics': "Let’s play forever I just wanna be your dog"
      },
      {
        'start': 159, 
        'stop': 164, 
        'lyrics': "Oh oh oh oh oh oh oh oh"
      },
      {
        'start': 164, 
        'stop': 165, 
        'lyrics': "I just wanna be your dog"
      },
      {
        'start': 165, 
        'stop': 169, 
        'lyrics': "Oh oh oh oh"
      },
      {
        'start': 169, 
        'stop': 172, 
        'lyrics': "Let’s play forever I just wanna be your dog"
      },
      {
        'start': 172, 
        'stop': 176, 
        'lyrics': "Oh oh oh oh oh oh oh oh"
      },
      {
        'start': 176, 
        'stop': 177, 
        'lyrics': "I just wanna be your dog"
      },
      {
        'start': 177, 
        'stop': 187, 
        'lyrics': "Oh oh oh oh"
      },
    ],
    // mind
    [
      {
        'start': 12,
        'stop': 17, 
        'lyrics': "You love how you push me to the point of crazy"
      }, 
      {
        'start': 18,
        'stop': 22, 
        'lyrics': "And I love when you're on your knees and begging for me"
      },
      {
        'start': 23,
        'stop': 27.5, 
        'lyrics': "You got me good with all these mind games"
      },
      {
        'start': 29,
        'stop': 32, 
        'lyrics': "There you go, you got my heart again"
      },
      {
        'start': 33.5,
        'stop': 36, 
        'lyrics': "Say my name, I wanna hear you call"
      },
      {
        'start': 39,
        'stop': 43.5, 
        'lyrics': "Hold me close, I wanna feel your heart"
      },
      {
        'start': 44.5,
        'stop': 47, 
        'lyrics': "I'm in a cold sweat and I want you bad"
      },
      {
        'start': 50,
        'stop': 54.5, 
        'lyrics': "Now you got me all in my head, like damn"
      },
      {
        'start': 57,
        'stop': 59, 
        'lyrics': "I'ma show you how, show you how, show you how"
      },
      {
        'start': 60,
        'stop': 61.5, 
        'lyrics': "To love again"
      },
      {
        'start': 62.5,
        'stop': 64.5, 
        'lyrics': "I'ma show you how, show you how, show you how"
      },
      {
        'start': 65,
        'stop': 67, 
        'lyrics': "To love again"
      },
      {
        'start': 68,
        'stop': 70, 
        'lyrics': "I'ma show you how, show you how, show you how"
      },
      {
        'start': 70.5,
        'stop': 72.5, 
        'lyrics': "To love again"
      },
      {
        'start': 73.5,
        'stop': 75, 
        'lyrics': "I'ma show you how, show you how, show you how"
      },
      {
        'start': 76,
        'stop': 77.5, 
        'lyrics': "To love again"
      },
      {
        'start': 100,
        'stop': 102.5, 
        'lyrics': "Say my name, I wanna hear you call"
      },
      {
        'start': 105.5,
        'stop': 109.5, 
        'lyrics': "Hold me close, I wanna feel your heart"
      },
      {
        'start': 110.5,
        'stop': 114, 
        'lyrics': "I'm in a cold sweat and I want you bad"
      },
      {
        'start': 116,
        'stop': 120, 
        'lyrics': "Now you got me all in my head, like damn"
      },
      {
        'start': 145,
        'stop': 147, 
        'lyrics': "I'ma show you how, show you how, show you how"
      },
      {
        'start': 148,
        'stop': 149.5, 
        'lyrics': "To love again"
      },
      {
        'start': 150.5,
        'stop': 152.5, 
        'lyrics': "I'ma show you how, show you how, show you how"
      },
      {
        'start': 153.5,
        'stop': 155, 
        'lyrics': "To love again"
      },
      {
        'start': 156,
        'stop': 158, 
        'lyrics': "I'ma show you how, show you how, show you how"
      },
      {
        'start': 159,
        'stop': 160.5, 
        'lyrics': "To love again"
      },
      {
        'start': 161.5,
        'stop': 163.5, 
        'lyrics': "I'ma show you how, show you how, show you how"
      },
      {
        'start': 164.5,
        'stop': 166, 
        'lyrics': "To love again"
      },
      {
        'start': 189.5,
        'stop': 191.5, 
        'lyrics': "I'ma show you how, show you how, show you how"
      },
      {
        'start': 192.5,
        'stop': 194, 
        'lyrics': "To love again"
      },
      {
        'start': 195,
        'stop': 197, 
        'lyrics': "I'ma show you how, show you how, show you how"
      },
      {
        'start': 198,
        'stop': 199.5, 
        'lyrics': "To love again"
      },
      {
        'start': 200.5,
        'stop': 202.5, 
        'lyrics': "I'ma show you how, show you how, show you how"
      },
      {
        'start': 203.5,
        'stop': 205, 
        'lyrics': "To love again"
      },
      {
        'start': 206,
        'stop': 208, 
        'lyrics': "I'ma show you how, show you how, show you how"
      },
      {
        'start': 209,
        'stop': 210.5, 
        'lyrics': "To love again"
      },
      {
        'start': 214,
        'stop': 216, 
        'lyrics': "To love again"
      },
      {
        'start': 219.5,
        'stop': 222, 
        'lyrics': "To love again"
      },
      {
        'start': 225,
        'stop': 227, 
        'lyrics': "To love again"
      },
    ],
    // fireflies
    [
      {
        'start': 22,
        'stop': 27, 
        'lyrics': "You would not believe your eyes if ten million fireflies"
      },
      {
        'start': 27,
        'stop': 30, 
        'lyrics': "Lit up the world as I fell asleep"
      },
      {
        'start': 32.5,
        'stop': 37, 
        'lyrics': "'Cause they'd fill the open air and leave teardrops everywhere"
      },
      {
        'start': 37,
        'stop': 42, 
        'lyrics': "You'd think me rude but I would just stand and stare"
      },
      {
        'start': 43.5,
        'stop': 47, 
        'lyrics': "I'd like to make myself believe"
      },
      {
        'start': 47,
        'stop': 52.5, 
        'lyrics': "That planet Earth turns slowly"
      },
      {
        'start': 53.5,
        'stop': 58, 
        'lyrics': "It's hard to say that I'd rather stay awake when I'm asleep"
      },
      {
        'start': 59,
        'stop': 64, 
        'lyrics': "'Cause everything is never as it seems"
      },
      {
        'start': 65,
        'stop': 69.5, 
        'lyrics': "'Cause I'd get a thousand hugs from ten thousand lightning bugs"
      },
      {
        'start': 69.5,
        'stop': 73, 
        'lyrics': "As they tried to teach me how to dance"
      },
      {
        'start': 75,
        'stop': 80, 
        'lyrics': "A foxtrot above my head, a sock hop beneath my bed"
      },
      {
        'start': 80,
        'stop': 85, 
        'lyrics': "A disco ball is just hanging by a thread"
      },
      {
        'start': 86,
        'stop': 90, 
        'lyrics': "I'd like to make myself believe"
      },
      {
        'start': 90,
        'stop': 96, 
        'lyrics': "That planet Earth turns slowly"
      },
      {
        'start': 96,
        'stop': 101, 
        'lyrics': "It's hard to say that I'd rather stay awake when I'm asleep"
      },
      {
        'start': 101.5,
        'stop': 108, 
        'lyrics': "'Cause everything is never as it seems (when I fall asleep)"
      },
      {
        'start': 110,
        'stop': 115, 
        'lyrics': "Leave my door open just a crack (please take me away from here)"
      },
      {
        'start': 115,
        'stop': 120.5, 
        'lyrics': "'Cause I feel like such an insomniac (please take me away from here)"
      },
      {
        'start': 120.5,
        'stop': 126, 
        'lyrics': "Why do I tire of counting sheep (please take me away from here)"
      },
      {
        'start': 126,
        'stop': 129, 
        'lyrics': "When I'm far too tired to fall asleep?"
      },
      {
        'start': 131.5,
        'stop': 134, 
        'lyrics': "To ten million fireflies"
      },
      {
        'start': 134,
        'stop': 136, 
        'lyrics': "I'm weird 'cause I hate goodbyes"
      },
      {
        'start': 136.5,
        'stop': 141, 
        'lyrics': "I got misty eyes as they said farewell (they said farewell)"
      },
      {
        'start': 142,
        'stop': 144, 
        'lyrics': "But I'll know where several are"
      },
      {
        'start': 144.5,
        'stop': 146, 
        'lyrics': "If my dreams get real bizarre"
      },
      {
        'start': 146.5,
        'stop': 151, 
        'lyrics': "'Cause I saved a few and I keep them in a jar"
      },
      {
        'start': 152.5,
        'stop': 156, 
        'lyrics': "I'd like to make myself believe"
      },
      {
        'start': 156.5,
        'stop': 162, 
        'lyrics': "That planet Earth turns slowly"
      },
      {
        'start': 163,
        'stop': 168, 
        'lyrics': "It's hard to say that I'd rather stay awake when I'm asleep"
      },
      {
        'start': 168,
        'stop': 174, 
        'lyrics': "'Cause everything is never as it seems (when I fall asleep)"
      },
      {
        'start': 174,
        'stop': 177, 
        'lyrics': "I'd like to make myself believe"
      },
      {
        'start': 177.5,
        'stop': 183.5, 
        'lyrics': "That planet Earth turns slowly"
      },
      {
        'start': 184,
        'stop': 189, 
        'lyrics': "It's hard to say that I'd rather stay awake when I'm asleep"
      },
      {
        'start': 189.5,
        'stop': 195.5, 
        'lyrics': "'Cause everything is never as it seems (when I fall asleep)"
      },
      {
        'start': 195.5,
        'stop': 198, 
        'lyrics': "I'd like to make myself believe"
      },
      {
        'start': 199,
        'stop': 205, 
        'lyrics': "That planet Earth turns slowly"
      },
      {
        'start': 205,
        'stop': 210, 
        'lyrics': "It's hard to say that I'd rather stay awake when I'm asleep"
      },
      {
        'start': 210.5,
        'stop': 215, 
        'lyrics': "Because my dreams are bursting at the seams"
      },
    ]
  ]

function preload(){
  song1 = loadSound('audio/Cat & Dog (English Version).mp3');
  song2 = loadSound('audio/Skrillex & Diplo - Mind feat. Kai.mp3'); 
  song3 = loadSound('audio/Owl City - Fireflies.mp3');
}

function setup() {
  createCanvas(w, h);
  s = [song1, song2, song3]; 
  n = 0; 
  song = s[n]; 
  song.play();
  
  input = document.getElementById("file-input");
  input.addEventListener("change", handleFile, false);
  
  analyzer = new p5.Amplitude();
  analyzer.setInput(song);
  
  fft = new p5.FFT();
  fft.setInput(song);
  
  colorMode(HSB);
  c = 0;
  increase = true; 
  angleMode(DEGREES); 
  rotation = 0; 
  r = 0.15;
  turn = false; 
  v = 0; 
}

function draw() {
  background(0, 0, 0, 10 / 255)
  
  analyzer.setInput(mic);
  let rms = analyzer.getLevel();
  let spectrum = fft.analyze(); 
  
  // set & update color
  fill(c, 255, 255, 10 / 255); 
  if (increase == true) {
    c += 0.2; 
  }
  else {
    c -= 0.2; 
  }
  if (c > 255) {
    increase = false; 
  }
  if (c < 0) {
    increase = true; 
  }
  stroke(0); 
  
  if (random(0, 500) < 1) {
    turn = true; 
  }
  if (turn == true) {
    r = -r; 
    turn = false; 
  }

 // particle shooter
  if (p == true) {
   push();
   let numParticles = map(rms, 0, 0.3, 0, 1);
   for (let i = 0; i < numParticles; i++) {
      if(rms > 0.5) {
          particles.push(new Particle());
      }
   }

   for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].display();

      // Remove particles that are out of bounds
      if (particles[i].isOffScreen()) {
          particles.splice(i, 1);
      }
   }
   pop();
  }
  
  // draw flower
  push();
  translate(w / 2, h / 2); 
  rotation += r;
  rotate(rotation);
  noStroke();
  for (var r1 = 0; r1 < 10; r1++) {
    ellipse(0, rms * 400, 10 + rms * 300, 20 + rms * 600); 
    rotate(36);
  }
  pop();
  
  // add instruction text 
  push(); 
  textFont('arial'); 
  textSize(18); 
  fill(0, 0, 255); 
  textAlign(LEFT);
  text('[space] to play/pause', 20, height - 110); 
  text('[←→] left/right arrow keys to switch songs', 20, height - 90); 
  text('[↑↓] up/down arrow keys to switch visualization', 20, height - 70)
  text('preselected songs: Cat & Dog, Mind, Fireflies', 20, height - 50); 
  text('try uploading your own song to the right', 20, height - 30); 
  text('*only preselected songs will have lyrics', 20, height - 10); 
  pop(); 
  
  // get time 
  sec = song.currentTime(); 
  
  // display lyrics 
  if (song == song1) {
    l = lyrics[1]; 
  }
  else if (song == song2) {
    l = lyrics[2]; 
  }
  else if (song == song3) {
    l = lyrics[3]; 
  }
  else {
    l = lyrics[0]
  }
  for (var x = 0; x < l.length; x++) {
    if (sec >= l[x].start && sec <= l[x].stop) {
      textFont('Brush Script MT'); 
      textSize(50); 
      fill(0, 0, 255); 
      textAlign(CENTER); 
      text(l[x].lyrics, w / 2, h / 2); 
    }
  }
}

class Particle {
    constructor() {
        this.pos = createVector(width / 2, height / 2);
        this.vel = p5.Vector.random2D().mult(random(2, 5));
        this.size = random(5, 10);
        this.lifespan = 255;
    }

    update() {
        this.pos.add(this.vel);
        this.lifespan -= 2;
        this.size+=0.15;
    }

    display() {
        noStroke();
        fill(c, 255, 255, Math.random(0, 255), this.lifespan);
        ellipse(this.pos.x, this.pos.y, this.size);
    }

    isOffScreen() {
        return (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.lifespan <= 0);
    }
}

function keyPressed() {
  if (keyCode === 32) {
    if (!song.isPlaying()) {
      song.play();
    } 
    else {
      song.pause(); 
    }
  }
  else if (keyCode === LEFT_ARROW) {
    if (n == 0) {
      n = s.length - 1; 
    }
    else {
      n--; 
    }
    song.stop(); 
    song = s[n]; 
    song.play(); 
  } 
  else if (keyCode === RIGHT_ARROW) {
    if (n == s.length - 1) {
      n = 0; 
    }
    else {
      n++; 
    }
    song.stop(); 
    song = s[n]; 
    song.play(); 
  }
  else if (keyCode === UP_ARROW) {
    if (v == visualization.length - 1) {
      v = 0; 
    }
    else {
      v++;
    }
    f = visualization[v].flower; 
    p = visualization[v].particles; 
  }
  else if (keyCode === DOWN_ARROW) {
    if (v == 0) {
      v = visualization.length - 1; 
    }
    else {
      v--; 
    }
    f = visualization[v].flower; 
    p = visualization[v].particles; 
  }
}

// for audio input
function handleFile() {
    const fileList = this.files; 
  const file = fileList[0];
  console.log(file);
  var reader = new FileReader();

  reader.onload = function(e) {
    if (file.type === 'audio/mpeg' || file.type === 'audio/wav') {
      inputsong = loadSound(e.target.result, playInputAudio); 
    } 
  }

  reader.readAsDataURL(file);
}

function playInputAudio() {
  song.stop(); 
  s[s.length] = inputsong; 
  song = s[s.length - 1]; 
  song.play(); 
}
