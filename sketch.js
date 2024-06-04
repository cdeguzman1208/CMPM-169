let lyrics = [
  { time: 5, text: "Here comes the sun" },
  { time: 10, text: "It's all right" }
];

let startTime;

function setup() {
  createCanvas(800, 600);
  startTime = millis();
}

function draw() {
  background(0);
  let currentTime = (millis() - startTime) / 1000;

  for (let i = 0; i < lyrics.length; i++) {
    if (currentTime >= lyrics[i].time) {
      fill(255);
      textSize(32);
      textAlign(CENTER, CENTER);
      text(lyrics[i].text, width / 2, height / 2);
      break;
    }
  }
}