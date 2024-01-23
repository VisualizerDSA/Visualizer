let c=1;
let cursorSpeed = 2;
let initialBoxPos = 225;
let stopLimit = 5;

let arr = [9,8,5,4,3,2,1]
let src = 1;
const RECT_COLOR = [255,0,0]
let initialRectPos = 225;
let initialTrianglePos = 225;

let i=0;
let j=0;
let k=0;

stopLimit = arr.indexOf(src);


function setup() {
  createCanvas(700, 700);
  x=initialBoxPos;
  background(0o0);
  noLoop();
}

function mousePressed(){
  loop();
}

function wait(time){
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
        createTriangle(arr[i]);
        wait(700);
        arr[j+1] = temp;
      }
      j++;
      
      if(j>=arr.length-i-1){
        j = 0;
        i++;
        initialTrianglePos = initialRectPos;
      }
  }
}

function createTriangle(ind){
  var xPos = initialTrianglePos + (ind);
  triangle(xPos+15, 300, xPos+35, 300, xPos+25, 320);
  triangle(xPos+65, 300, xPos+85, 300, xPos+75, 320);
  initialTrianglePos+=50;
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
  var xPos = initialRectPos + (ind * 50);
  rect(xPos, 350, 50, 50);
  textSize(26);
  textAlign(CENTER);
  fill('white')
  text(arr[ind], xPos + 25, 385);
}