// Create an Array

let arr = [];
let count=0;

for (let i=1; i<=8;i++){
  for(let j=1; j<=8; j++){
    count++;
    let obj = {
      id: count,
      x: j,
      y: i
    }
    arr.push(obj)
  }
}

// Create chess board

let chess = document.getElementById('chess');
let xAxis = document.getElementById('xAxis');
let yAxis = document.getElementById('yAxis');
let castle = document.getElementById('castle');


arr.forEach((square)=>{
  let box = document.createElement('div');
  box.classList= 'box';
  chess.appendChild(box);
 box.addEventListener('mousemove',(e)=>{
   xAxis.innerHTML = `x : ${square.x}`
   yAxis.innerHTML = `y : ${square.y}`
   e.target.classList.add('active'); 
 })
 box.addEventListener('mouseleave',(e)=>{
  e.target.classList.remove('active');
 })
 if(square.x%2==0 && square.y%2==0){
   box.style.background="url('images/wood.jpeg')"
 }
 if(square.x%2!==0 && square.y%2!==0){
  box.style.background="url('images/wood.jpeg')"
}
if(square.y%2==0 && square.x%2!==0){
  box.style.background="url('images/white.webp')"
}
if(square.y%2!==0 && square.x%2==0){
 box.style.background="url('images/white.webp')"
}

// Catle


})


