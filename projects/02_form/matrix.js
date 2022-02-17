const canvas = document.getElementById('canv');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
let cols = Math.floor(window.innerWidth / 20) + 1;
let ypos = Array(cols).fill(0);

ctx.fillStyle = '#000';
ctx.fillRect(0, 0, canvas.width, canvas.height);

function matrix () {
  const w = window.innerWidth;
  const h = window.innerHeight;
  
  if (canvas.width !== w) {
    canvas.width = w;
    cols = Math.floor(window.innerWidth / 20) + 1;
    ypos = Array(cols).fill(0);
  }
  if (canvas.height !== h) {
    canvas.height = h;
  }

  ctx.fillStyle = '#0001';
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = '#0f0';
  //ctx.font = '15pt monospace';
  ctx.font = "15pt arial";
  
  var matrix_content = "01";
  
  ypos.forEach((y, ind) => {
    //const text = String.fromCharCode(Math.random() * 128);
    const text = matrix_content[Math.floor(Math.random()*matrix_content.length)]
    // space between rain
    const x = ind * 100;
    ctx.fillText(text, x, y);
    if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
    else ypos[ind] = y + 20;
  });
}

setInterval(matrix, 50);

setInterval(matrix, 50);ent