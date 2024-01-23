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
function frame(){
    if(i<arr.length){
        if(j>=arr.length-1){
            i++;
            j=0;
        }

        if (arr[j] > arr[j + 1]) {
            swapNodes(j);
        }
        j++;
    }

}

function swapNodes(ind){
    moveRect(rects[ind], 1);
    moveRect(rects[ind+1], -1);
    var temp = rects[ind];
    rects[ind] = rects[ind+1];
    rects[ind+1] = temp;

    var tempNum = arr[j];
    arr[j] = arr[j + 1];
    arr[j + 1] = tempNum;
}

function moveRect(rect,dir){
    rect.newPos = rect.xPos + (dir)*48;
    rect.swap = true;
    rect.dir = dir;
}





    // if(i<arr.length){
    //     if(j>=arr.length-1){
    //         i++;
    //         j=0;
    //     }

    //     if (arr[j] > arr[j + 1]) {
    //         var temp = arr[j];
    //         arr[j] = arr[j + 1];
    //         arr[j + 1] = temp;
    //     }
    //     j++;
    // }
// }



// function drawTriangles(){
//     triangle(initalBoxPos + 40, 300, initalBoxPos + 60, 300, initalBoxPos + 50, 320);
//     triangle(initalBoxPos - 10, 300, initalBoxPos + 10, 300, initalBoxPos, 320);
// }