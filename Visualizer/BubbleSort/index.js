
let x;
let c=1;
let cursorSpeed = 2;
let initialBoxPos = 200;
let stopLimit = 5;

let arr = [9,8,5,4,3,2,1]
let src = 1;

let i=0;
let j=0;
let k=0;

stopLimit = arr.indexOf(src);


function setup() {
  createCanvas(700, 700);
  x=225;
  background(000);
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
        x=230;
      }
  }
}

function createrect(a,p,r,g,b){
  fill(r,g,b);
  rect(p,350,50,50);
  textSize(26);
  textAlign(CENTER);
  fill('white')
  text(a, p+25, 385);
}

function createTriangle(x){
  triangle(x+40, 300, x+60, 300, x+50, 320);
  triangle(x-10, 300, x+10, 300, x, 320);
}

function draw() {
  background(000);
  for(let o=0;o<arr.length;o++){
    createrect(arr[o],initialBoxPos, 255,0,0);
    initialBoxPos+=50;
    
  }
  initialBoxPos = 200;
  bubSort(arr);
}