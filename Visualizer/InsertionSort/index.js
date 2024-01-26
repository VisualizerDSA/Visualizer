let arr = [9, 6, 8, 5, 2, 1]
const RECT_COLOR = [255, 0, 0]
var initialBoxPos = 225;

var rects = [];

function setup() {
    createCanvas(850, 700);
    background(0o0);
    for (let i = 0; i < arr.length; i++) {
        curRect = new Node(getPosFromIndex(i), arr[i]);
        curRect.display();
        rects.push(curRect);   
    }
}

var tick = 0;
var time = 100;

function draw() {
    background(0o0);
    for (let i = 0; i < arr.length; i++) {
        if(rects[i].swap){
            rects[i].move();
        }
        rects[i].display();
    }

    tick++;

    if(tick>=time){
        frame();
        tick=0;
    }

}

function getPosFromIndex(ind){
    return initialBoxPos + (ind * 50);
}

var i=1;

function frame(){
    if(i<arr.length){
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            moveRect(rects[j + 1], -1);
            moveRect(rects[j], 1);
            j = j - 1;
        }
        arr[j + 1] = key;
        moveRect(rects[j + 1], (j + 1) + (i - 1));
        moveRect(rects[i], i - (j + 1));
        i++;
    }
}

function moveRect(rect,dir){
    rect.newPos = rect.xPos + (dir)*48;
    rect.swap = true;
    rect.dir = dir;
}
