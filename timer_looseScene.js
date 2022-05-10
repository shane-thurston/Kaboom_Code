timer.action( () => {
  timer.time -= dt()
  timer.text = timer.time.toFixed(2)
  if (timer.time <= 0){
    go("loose", score.value)
  }
})

scene("loose", (score) => {
  add([
    text("GAME OVER", {size: 40, font: "sink"}),
    pos(width()/2, height()/2),
    origin("center"),
    layer("ui"),
  ]);
  add([
    text(score, {size: 40, font: "sink"}),
    pos(width()/2, height()*0.7),
    origin("center"),
    layer("ui"),
  ]);
});
