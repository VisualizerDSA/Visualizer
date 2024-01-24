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
        quicksort(0, arr.length - 1);
        tick=0;
    }

}

function getPosFromIndex(ind){
    return initialBoxPos + (ind * 50);
}

function quicksort(low, high){
    if(low < high){
        var pi = partition(low, high);
        quicksort(low, pi-1);
        quicksort(pi+1, high);
    }
}

function partition(low, high){
    var pivot = arr[high];
    var i = low - 1;
    for(var j = low; j <= high-1; j++){
        if(arr[j] < pivot){
            i++;
            swapNodes(i, j);
        }
    }
    swapNodes(i+1, high);
    return i+1;
}

function swapNodes(ind1, ind2){
    moveRect(rects[ind1], 1);
    moveRect(rects[ind2], -1);
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