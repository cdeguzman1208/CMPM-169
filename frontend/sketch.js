let song;
let lyrics = [];
let currentLyricIndex = 0;
let lyricElement;

function preload() {
  // Load the separated vocals audio file
  song = loadSound('assets/vocals.wav');
  // Load the lyrics file
  loadStrings('assets/lyrics.lrc', parseLyrics);
}

function setup() {
  createCanvas(800, 600);
  textAlign(CENTER, CENTER);
  textSize(32);
  
  // Create a div element to display the lyrics
  lyricElement = createDiv('').style('font-size', '32px').style('text-align', 'center');
  
  // Start playing the song
  song.play();
}

function draw() {
  background(0);

  // Get the current time of the song
  let currentTime = song.currentTime();
  
  // Update the displayed lyrics based on the current time
  if (currentLyricIndex < lyrics.length - 1 && currentTime >= lyrics[currentLyricIndex + 1].time) {
    currentLyricIndex++;
  }
  
  // Display the current lyric
  let currentLyric = lyrics[currentLyricIndex].text;
  lyricElement.html(currentLyric);
}

function parseLyrics(lyricStrings) {
  // Parse the .lrc file
  for (let i = 0; i < lyricStrings.length; i++) {
    let parts = lyricStrings[i].match(/\[(\d+):(\d+).(\d+)\](.*)/);
    if (parts) {
      let minutes = int(parts[1]);
      let seconds = int(parts[2]);
      let milliseconds = int(parts[3]);
      let text = parts[4];
      let time = minutes * 60 + seconds + milliseconds / 1000.0;
      lyrics.push({ time: time, text: text });
    }
  }
}