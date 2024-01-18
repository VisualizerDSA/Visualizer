let x;
let cursorSpeed = 2;

let initialBoxPos = 200;
let stopLimit = 5;

let arr = [2, 4, 1, 8, 9, 3, 0]
let src;
let play = false;

hljs.highlightAll();



function setup() {
    var canvas = createCanvas(window.screen.width / 2.1, window.screen.height);
    canvas.parent('canvasCont');
    x = 225;
}


function draw() {
    background(0o0);
    fill(204, 101, 192, 127);
    stroke(127, 63, 120);
    rect(initialBoxPos, 350, 50, 50);
    rect(initialBoxPos + 50, 350, 50, 50);
    rect(initialBoxPos + 100, 350, 50, 50);
    rect(initialBoxPos + 150, 350, 50, 50);
    rect(initialBoxPos + 200, 350, 50, 50);
    rect(initialBoxPos + 250, 350, 50, 50);
    rect(initialBoxPos + 300, 350, 50, 50);

    textSize(26);
    textAlign(CENTER);
    text('2', initialBoxPos + 25, 385);
    text('4', initialBoxPos + 75, 385);
    text('1', initialBoxPos + 125, 385);
    text('8', initialBoxPos + 175, 385);
    text('9', initialBoxPos + 225, 385);
    text('3', initialBoxPos + 275, 385);
    text('0', initialBoxPos + 325, 385);


    triangle(x - 10, 300, x + 10, 300, x, 320);

    if(!play) return;

    if (x != ((initialBoxPos - 25) + 50 * (stopLimit + 1))) {
        x += cursorSpeed;
    }
}

function visualize(){
    src = parseInt(document.getElementById("srcInput").value);
    stopLimit = arr.indexOf(src);
    if(stopLimit == -1) stopLimit = arr.length;
    console.log(arr.indexOf(src));
    play = true;
    x = 225;
}
