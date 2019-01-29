let c = 0;
let pos = [];

function play(n) {
  console.log(n);
}

function draw() {
  c += 10;
  let dots = document.getElementsByClassName("dots");
  for (let d in dots) {
    if ("object" === typeof dots[d]) {
      let dot = dots[d];
      let id = dot.getAttribute("id");
      let radius = 50 * parseInt(id.substr(1));
      let loop = Math.pow(2, radius / 50);
      let xy = circleCoords(radius, c / loop);
      let cx = 450 + xy.x;
      let cy = 450 + xy.y;
      dot.setAttribute("cx", cx);
      dot.setAttribute("cy", cy);
      // if (cy >= 450 && pos[d] <= 450) {
      //   play(d);
      // }
      pos[d] = dot.getAttribute("cy");
    }
  }
  requestAnimationFrame(draw);
}

function load() {
  requestAnimationFrame(draw);
}

window.onload = load;

function circleCoords(radius, degFromTop) {
  const rads = degToRad(degFromTop);

  return {
    x: radius * Math.cos(rads),
    y: radius * Math.sin(rads)
  };
}

function degToRad(deg) {
  return (deg / 360) * (Math.PI * 2);
}