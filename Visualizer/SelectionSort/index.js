let arr = [9, 8, 5, 4, 3, 2, 1]
const RECT_COLOR = [255, 0, 0]
var initialBoxPos = 225;

var rects = [];

function setup() {
    createCanvas(700, 700);
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

var i=0;
var j=0;
var min_idx;

function frame(){
    if(i<arr.length-1){
        min_idx = i;
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min_idx]){
                min_idx = j;
            }
        }
        swapNodes(i,min_idx);
        i++;
    }
}

function swapNodes(ind1,ind2){
    moveRect(rects[ind1], 1*ind1+ind2+1);
    moveRect(rects[ind2], -1*ind1-ind2-1);
    var temp = rects[ind1];
    rects[ind1] = rects[ind2];
    rects[ind2] = temp;

    var tempNum = arr[ind1];
    arr[ind1] = arr[ind2];
    arr[ind2] = tempNum;
}

function moveRect(rect,dir){
    rect.newPos = rect.xPos + (dir)*48;
    rect.swap = true;
    rect.dir = dir;
}
