
let x;
let c=1;
let cursorSpeed = 2;
let initialBoxPos = 225;
let stopLimit = 5;

let arr = [9,8,5,4,3,2,1]
let src = 1;
const RECT_COLOR = [255,0,0]
let initalBoxPos = 225;

let i=0;
let j=0;
let k=0;

stopLimit = arr.indexOf(src);


function setup() {
  createCanvas(700, 700);
  x=250;
  background(0o0);
  noLoop();
}

function mousePressed(){
  loop();
}

function wait(time)
{
  start = millis()
  do
  {
    current = millis();
  }
  while(current < start + time)
}

function bubSort(arr){
  if(i<arr.length){
      let temp = arr[j];
      if(arr[j] > arr[j+1]){
        arr[j] = arr[j+1];
        createTriangle(x);
        x+=50;
        wait(700);
        arr[j+1] = temp;
      }
      j++;
      
      if(j>=arr.length-i-1){
        j = 0;
        i++;
        x=250;
      }
  }
}

function createTriangle(x){
  triangle(x+40, 300, x+60, 300, x+50, 320);
  triangle(x-10, 300, x+10, 300, x, 320);
}

function draw() {
  background(0o0);
  for(let v=0;v<arr.length;v++){
    rectange(v);
    initialBoxPos+=50; 
  }
  initialBoxPos = 200;
  bubSort(arr);
}

function rectange(ind){
  fill(RECT_COLOR[0], RECT_COLOR[1], RECT_COLOR[2]);
  var xPos = initalBoxPos + (ind * 50);
  rect(xPos, 350, 50, 50);
  textSize(26);
  textAlign(CENTER);
  fill('white')
  text(arr[ind], xPos + 25, 385);
}