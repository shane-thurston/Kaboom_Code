import kaboom from "kaboom"

// initialize context
kaboom()
loadPedit("wall", "sprites/wall.pedit");
loadPedit("space-invader", "sprites/space-invader.pedit");
loadPedit("space-ship", "sprites/space-ship.pedit");

// load assets
addLevel(["!^^^^^^^^^^     &",
          "!^^^^^^^^^^     &",
          "!^^^^^^^^^^     &",
          "!               &",
          "!               &",
          "!               &",
          "!               &",
          "!               &",
          "!               &",
         ], {
  width: 30,
  height: 22,
  "^" : () => [sprite("space-invader"), scale(0.7),],
  "!" : () => [sprite("wall"), "left-wall",],
  "&" : () => [sprite("wall"), "right-wall",],
         })

// add a character to screen
const player = add ([
  sprite("space-ship"),
  pos(width()/2, height()*0.90),
  origin("center"),
])

const MOVE_SPEED = 200

keyDown("left", () => {
  player.move(-MOVE_SPEED, 0)
})

keyDown("right", () => {
  player.move(MOVE_SPEED, 0)
})
