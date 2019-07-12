let antenna = document.querySelector("#antenna");
let eye = document.querySelector("#eye");
let shot = document.querySelector("#shot");
let smoke = document.querySelector("#smoke");
let laser = document.querySelector("#laser");

//normalize function/stop
function normalize(){
  console.log("stop");
  antenna.classList.remove('animateAntenna');
  eye.classList.remove('animateEye');
  shot.classList.remove('animateShot');
  smoke.classList.remove('animateSmoke');
  laser.classList.remove('animateLaser');
}

//animation function/start
function animate(e){
  console.log("start");
  e.preventDefault();
  antenna.classList.add('animateAntenna');
  eye.classList.add('animateEye');
  shot.classList.add('animateShot');
  smoke.classList.add('animateSmoke');
  laser.classList.add('animateLaser');
}


document.querySelector("#start").addEventListener("click", animate);
document.querySelector("#stop").addEventListener("click", normalize);
//--------------------------------
