let x;
let c=1;
let initialBoxPos = 75;
let arr=[];
let Arraylength = 25;
// 9,8,5,4,3,2,1
let i=0;
let j=0;
let k=0;


function setup() {    
    for(let i=0;i<Arraylength;i++){   
        arr[i] = floor(random(1,100));
    }
    Arraylength = document.getElementById("slider1").value;
    createCanvas(1400, 700);
    x=100;
    background(0);
    noLoop();
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
  if(i<Arraylength){
      createTriangle(x,0,255,0);
      let temp = arr[j];
      if(arr[j] > arr[j+1]){
        arr[j] = arr[j+1];
        createTriangle(x,255,0,0);
        arr[j+1] = temp;
        
      }
      x+=50;
      wait(500);
      j++;
      
      if(j>=Arraylength-i-1){
        j = 0;
        i++;
        x=100;
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

function createTriangle(x,r,g,b){
    fill(r,g,b);
    triangle(x+40, 300, x+60, 300, x+50, 320);
    fill(r,g,b);
    triangle(x-10, 300, x+10, 300, x, 320);
}

function draw() {
    background(0);
    for(let o=0;o<Arraylength;o++){
        createrect(arr[o],initialBoxPos, 255,0,0);
        initialBoxPos+=50;
        
    }
    initialBoxPos = 75;
    bubSort(arr);
    Arraylength = document.getElementById("slider1").value;
}

function Go(){
    loop();
}



