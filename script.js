var timer = 3;

function newHit() {
  var rn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = rn;
}

function makeBubble() {
  var clutter = "";

  for (var i = 1; i <= 10; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function countDown() {
  var timerInt = setInterval(function() {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").innerHTML = timer;
    } else {
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over!</h1>`;
      clearInterval(timerInt);
    }
  }, 1000);;
}


newHit();
makeBubble();
countDown();