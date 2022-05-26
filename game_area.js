kaboom({
  background: [0,0,0],
  width:510,
  height:220,
  scale:1.5
})

const player = add ([
  sprite("space-ship"),
  pos(width()/2, height()*0.90),
  origin("center"),
  area(),
  "space-ship",
])
