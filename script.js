const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const ballRadius = 30


canvas.style.backgroundColor = "lightgreen";

let x = 100;
let y = 600;
let vx = 0;
let vy = 0;

update();

function update(){
  ctx.beginPath();
  ctx.strokeStyle = "lightgreen";
  ctx.lineWidth = 120;
  ctx.arc(x, y, 30, Math.PI * 2, false);
  ctx.stroke();
  ctx.closePath();

  
  ctx.fill();

  x += vx;
  y += vy;

  if (x - ballRadius < 0) {
    x = ballRadius;
    vx = 0;
  }
  if (x + ballRadius > canvas.width) {
    x = canvas.width - ballRadius;
    vx = 0;
  }
  if (y - ballRadius < 0) {
    y = ballRadius;
    vy = 0;
  }
  if (y + ballRadius > canvas.height) {
    y = canvas.height - ballRadius;
    vy = 0;
  }
  
  requestAnimationFrame(update);
}
addEventListener("keydown", function(e){
  if(e.code == "KeyD") vx = 10;
  if(e.code == "KeyA") vx = -10;
  if(e.code == "KeyW") vy = -10;
  if(e.code == "KeyS") vy = 10;

});
addEventListener("keyup", function(e){
  if(e.code == "KeyD") vx = 0;
  if(e.code == "KeyA") vx = 0;
  if(e.code == "KeyS") vy = 0;
  if(e.code == "KeyW") vy = 0;
});

