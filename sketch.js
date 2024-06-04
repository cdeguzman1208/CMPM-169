let speechRec;
let continuous = true;
let interimResults = false;
let transcript = '';

function setup() {
    createCanvas(800, 600);
    background(200);

    // Initialize the Speech Recognition object (will prompt for mic access)
    speechRec = new p5.SpeechRec('en-US', gotSpeech);
    speechRec.start(continuous, interimResults);

    textSize(32);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(0);
    fill(255);
    text(transcript, width / 2, height / 2);
}

function gotSpeech() {
    if (speechRec.resultValue) {
        transcript = speechRec.resultString;
    }
}
